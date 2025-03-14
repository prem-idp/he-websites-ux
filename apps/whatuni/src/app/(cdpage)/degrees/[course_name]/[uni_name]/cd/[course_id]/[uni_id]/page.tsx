import Cdpageclient from './cdPageClientWrapper';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import { generateBreadcrumbData } from "@packages/lib/utlils/generateBreadcrumb"
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';
import { graphQlFetchFunction, httpBFFRequest } from '@packages/lib/server-actions/server-action';
import { COURSE_DETAILS_QUERY, courseContentExtractor } from "@packages/lib/graphQL/course-details.graphql";
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import SimilarCourseComponent from '@packages/shared-components/course-details/similar-course/SimilarCourseComponent';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
import { reviewPayload } from "@packages/lib/api-payloads/payloads";
import getApiUrl from "@packages/REST-API/api-urls";
import makeApiCall from "@packages/REST-API/rest-api";
import LazyLoadWrapper from "@packages/lib/utlils/lazyloadcomponent"
import { cdfetchData } from "./apicalls/cdpagedata"
import { getMetaDetailsQueryForSRpage } from '@packages/lib/graphQL/search-results';
import { replaceSEOPlaceHolder } from '@packages/lib/utlils/resultsPageActions';
import { MetaDataInterface, MetaFilterTypesReplace } from '@packages/lib/types/interfaces';
import { SRDisplayNameEndPt } from '@packages/shared-components/services/bffEndpoitConstant';
import { getCustomDomain } from '@packages/lib/utlils/common-function-server';
import { otherRecommendedCourse } from "./apicalls/othercourse"
export async function generateMetadata({ params }: any) {
  const prams_slug = await params;
  const slug = `/degrees/${prams_slug.course_name}/${prams_slug.uni_name}/cd/${prams_slug.course_id}/${prams_slug.uni_id}/`
  // ------------------------------------------------------initial fetch ----------------------------------------------------------------
  const searchparams = new URLSearchParams({
    courseId: String(prams_slug?.course_id || ""),
  });
  return getCDMetaDetailsFromContentful(searchparams, slug)
}
export default async function Cdpage({ params }: any) {
  const prams_slug = await params;
  const slug = `/degrees/${prams_slug.course_name}/${prams_slug.uni_name}/cd/${prams_slug.course_id}/${prams_slug.uni_id}/`
  // ------------------------------------------------------initial fetch ----------------------------------------------------------------
  const searchparams = new URLSearchParams({
    courseId: String(prams_slug?.course_id || ""),
    affiliateId: String(process.env.AFFILATE_ID || ""),
    collegeId: String(prams_slug?.uni_id || ""),
  });
  const url = `https://p5bgb22g76.execute-api.eu-west-2.amazonaws.com/dev-dom-search-bff/v1/search/getCourseDetails?${searchparams.toString()}`;
  const [data, contents, othercourseData] = await Promise.all([
    cdfetchData(url).catch(err => ({ error: err })),
    graphQlFetchFunction(COURSE_DETAILS_QUERY).catch(err => ({ error: err })),
    otherRecommendedCourse(prams_slug.course_id, prams_slug.uni_id)
      .catch(err => ({ error: err }))
  ]);

  console.log(data, "json")


  const customLabels = [
    "degrees",
    "",
    "",
    "cd",
    "",
    ""
  ];


  const courseContent = courseContentExtractor(contents);
  const breadcrumbData = generateBreadcrumbData(slug, customLabels);


  return (
    <>
      <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden lg:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent propsdata={breadcrumbData} preview={false} />
        </div>
      </section>
      <Courseheaderinfocomponents data={data} searchPayload = {searchparams}/>
      <Yearofentrycomponents />
      <Cdpageclient data={data} courseContent={courseContent} prams_slug={prams_slug} />
      {othercourseData?.length > 0 &&
        <Othercoursesmaylikecomponents othercourseData={othercourseData} />
      }
      {data?.similarCourses?.courses?.length > 0 &&
        <SimilarCourseComponent data={data} />
      }
      {process.env.PROJECT === "Whatuni" &&
        <LazyLoadWrapper>
          <Findacoursecomponents />
        </LazyLoadWrapper>
      }
    </>
  )
}
export async function getCDMetaDetailsFromContentful(searchParams: any, slug: string) {
  //1) bff API hit
  const displayNameReqBody = getRequestInputPayload(searchParams);
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, 
    displayNameReqBody, 
    "POST", 
    `${process.env.NEXT_PUBLIC_X_API_KEY}`, 
    "no-cache",  0, 
    {});
  //2) contentful API hit
  const query = getMetaDetailsQueryForSRpage("SEO - courseDetails"  + ` - ${process.env.PROJECT}`);
  let contentfulMetadata = await graphQlFetchFunction(query);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];
  const metaFiltersOpted: MetaFilterTypesReplace = {
    providerName : displayNameResponse?.collegeName ?? undefined,
    courseName : displayNameResponse?.courseName ?? undefined,
  }
  const metaTitle = replaceSEOPlaceHolder(contentfulMetadata?.metaTite, metaFiltersOpted);
  const metaDesc = replaceSEOPlaceHolder(contentfulMetadata?.metaDescription, metaFiltersOpted);
  const index = contentfulMetadata?.robots;
  const canonical = getCustomDomain() + slug;
  let actualMetaData: MetaDataInterface = {
    canonical: canonical,
    description: metaDesc ?? "Default description",
    indexation: index,
    keyword: [],
    title: metaTitle ?? "Default title",
    og_title: metaTitle,
    og_canonical: canonical,
    og_description: metaDesc,
    twitter_url: canonical,
    twitter_titile: metaTitle,
    twitter_description: metaDesc,
  } 
  return actualMetaData;
  }

  export function getRequestInputPayload(searchPayLoad: any){
    let courseId = searchPayLoad?.get('courseId'); 
    courseId = +courseId;
    const displayNameReqBody = { 
      "courseId":  courseId ?? "", 
    }
    return displayNameReqBody;
  }
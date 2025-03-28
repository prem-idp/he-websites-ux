import Cdpageclient from '@packages/shared-components/course-details/cdpageutils/cdPageClientWrapper';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import { generateBreadcrumbData } from "@packages/lib/utlils/generateBreadcrumb"
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import { graphQlFetchFunction, httpBFFRequest } from '@packages/lib/server-actions/server-action';
import { COURSE_DETAILS_QUERY, courseContentExtractor } from "@packages/lib/graphQL/course-details.graphql";
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import SimilarCourseComponent from '@packages/shared-components/course-details/similar-course/SimilarCourseComponent';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
import LazyLoadWrapper from "@packages/lib/utlils/lazyloadcomponent"
import { cdfetchData } from "@packages/shared-components/course-details/cdpageutils/apicalls/cdpagedata"
import { getMetaDetailsQueryForSRpage } from '@packages/lib/graphQL/search-results';
import { replaceSEOPlaceHolder } from '@packages/lib/utlils/resultsPageActions';
import { MetaDataInterface, MetaFilterTypesReplace } from '@packages/lib/types/interfaces';
import { SRDisplayNameEndPt } from '@packages/shared-components/services/bffEndpoitConstant';
import { getCustomDomain } from '@packages/lib/utlils/common-function-server';
import { otherRecommendedCourse } from "@packages/shared-components/course-details/cdpageutils/apicalls/othercourse";
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { getQualCode } from '@packages/shared-components/services/utils';
import SchemaTagLayoutComponent from '@packages/shared-components/common-utilities/schematag-layout/SchemaTagLayoutComponent';
import makeApiCall from "@packages/REST-API/rest-api";
import getApiUrl from "@packages/REST-API/api-urls";

let breadcrumbData: any;
const domain = getCustomDomain();
let schemaData: any[] = [];

export async function generateMetadata({ params }: any) {
  const cookieStore = await cookies();
  const qualCode = cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const cookieparams = cookieStore?.get("searchParamscookies")?.value || "{}";
  const urlparams = new URLSearchParams(cookieparams);
  const cookieObject = Object.fromEntries(urlparams?.entries());
  const subjectNameParam = cookieObject?.subject?.includes(" ") ? cookieObject.subject?.split(" ") : cookieObject.subject;
  const prams_slug = await params;
  const slug = `/courses/search/postgraduate/${prams_slug.uni_name}/${prams_slug.course_name}/${prams_slug.course_id}/`
  const searchparams = new URLSearchParams({
    courseId: String(prams_slug?.course_id || ""),
    qualCode: getQualCode(qualCode),
  });
  return getCDMetaDetailsFromContentful(searchparams, slug, subjectNameParam)
}

export default async function Cdpage({ params }: any) {
  const cookieStore = await cookies();
  const qualCode = cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const cookieparams = cookieStore?.get("searchParamscookies")?.value || "{}";
  const urlparams = new URLSearchParams(cookieparams);
  const cookieObject = Object.fromEntries(urlparams?.entries());
  const subjectNameParam = cookieObject?.subject?.includes(" ") ? cookieObject.subject?.split(" ") : cookieObject.subject
  const prams_slug = await params;
  const slug = `/courses/search/postgraduate/${prams_slug.uni_name}/${prams_slug.course_name}/${prams_slug.course_id}/`
  // ------------------------------------------------------initial fetch ----------------------------------------------------------------
  const searchparams = new URLSearchParams();

  if (prams_slug?.course_id) {
    searchparams.append("courseId", String(prams_slug.course_id));
  }

  if (process.env.AFFILATE_ID) {
    searchparams.append("affiliateId", String(process.env.AFFILATE_ID));
  }

  const url = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/getCourseDetails?${searchparams.toString()}`;

  const pgsbody:any = {
    affiliateId: 607022,
    actionType: "subject",
    keyword: "",
    qualCode: "",
    networkId: 2,
  };

  const queryParams = new URLSearchParams(pgsbody).toString();
  const [data, contents, othercourseData,pgs_search_data] = await Promise.all([
    cdfetchData(url).catch(err => ({ error: err })),
    graphQlFetchFunction(COURSE_DETAILS_QUERY).catch(err => ({ error: err })),
    otherRecommendedCourse(prams_slug.course_id, prams_slug.uni_id)
      .catch(err => ({ error: err })),
      makeApiCall(getApiUrl?.subjectAjax, "GET", null, queryParams, null)
  ]);
  console.log("----------------------------------------------------------------------")
  console.log(data,"data")
  console.log("----------------------------------------------------------------------")
  console.log(contents,"contents")
  console.log("----------------------------------------------------------------------")
  console.log(othercourseData,"othercourseData")
  console.log("----------------------------------------------------------------------")
  if (!data?.courseInfo?.collegeId && !data?.courseInfo?.courseId) {
    notFound();
  }
  const courseContent = courseContentExtractor(contents);
  return (
    <>
      {breadcrumbData.length > 1 && (
        <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden lg:block">
          <div className="max-w-container mx-auto">
            <Breadcrumblayoutcomponent propsdata={breadcrumbData} preview={false} />
            <SchemaTagLayoutComponent schemaType="BreadcrumbList" schemaData={{ "itemListElement": schemaData }} />
          </div>
        </section>
      )}
      <Courseheaderinfocomponents data={data} searchPayload={searchparams} />
      <Cdpageclient data={data} courseContent={courseContent} prams_slug={prams_slug} />
      {othercourseData?.length > 0 &&
        <Othercoursesmaylikecomponents othercourseData={othercourseData} />
      }
      {data?.similarCourses?.courses?.length > 0 &&
        <SimilarCourseComponent data={data} />
      }
        <LazyLoadWrapper>
          <Findacoursecomponents h1value="Find a course" subheading={false} pgs_search_data={pgs_search_data}/>
        </LazyLoadWrapper>
    </>
  )
}

async function getCDMetaDetailsFromContentful(searchParams: any, slug: string, subjectNameParam: any): Promise<MetaDataInterface> {
  //1) bff API hit
  const displayNameReqBody = getRequestInputPayload(searchParams, subjectNameParam);
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, displayNameReqBody, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "no-cache", 0, {});
  //2) contentful API hit
  const query = getMetaDetailsQueryForSRpage("SEO - courseDetails" + ` - ${process.env.PROJECT}`);
  let contentfulMetadata = await graphQlFetchFunction(query);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];
  const metaFiltersOpted: MetaFilterTypesReplace = {
    providerName: displayNameResponse?.collegeName ?? undefined,
    courseName: displayNameResponse?.courseName ?? undefined,
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
  const cookieStore = await cookies();
  const getBreadcrumb = (): any[] => {
    const qualCode = cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
    switch (process.env.PROJECT) {
      case "Whatuni": return get_WU_CD_breadcrumb(searchParams, displayNameResponse, qualCode, subjectNameParam);
      case "PGS": return get_WU_CD_breadcrumb(searchParams, displayNameResponse, qualCode, subjectNameParam);
      default: return [];
    }
  }
  const breadcrumb: any[] = subjectNameParam ? getBreadcrumb() : [];
  breadcrumbData = [
    {
      url: domain,
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    ...breadcrumb,
  ];
  if (breadcrumb.length)
    breadcrumb?.map((data: { url: string; label: string; }, index: number) => {
      const obj: any = {
        '@type': 'ListItem',
        position: (index + 1),
        item: {
          '@id': data?.url?.trim()?.includes("+") ? data?.url?.split("+")?.[0] : data?.url,
          "name": data?.label?.trim()?.includes(",") ? data?.label?.split(",")?.[0]?.trim() : data?.label,
        }
      }
      schemaData.push(obj);
    });
  return actualMetaData;
}

function getRequestInputPayload(searchPayLoad: any, subjectNameParam: any) {
  let courseId = searchPayLoad?.get('courseId');
  let qualCode = searchPayLoad?.get('qualCode');
  courseId = +courseId;
  const displayNameReqBody = {
    "courseId": courseId ?? "",
    "parentQualification": qualCode,
    "searchSubject": subjectNameParam,
  }
  return displayNameReqBody;
}

function get_WU_CD_breadcrumb(
  searchSEOPayload: any,
  displayNameResponse: any,
  qualInUrl: string,
  subjectNameParam: any
) {
  const get_find_a_course_url_label = (qualInUrl: string) => {
    switch (qualInUrl) {
      case "degree-courses": return ["/degrees/courses/", "Courses"]
      case "postgraduate-courses": return ["/postgraduate-courses/", "Courses"]
      case "foundation-degree-courses": return ["/foundation-degree-courses/", "Courses"]
      case "access-foundation-courses": return ["/access-foundation-courses/", "Courses"]
      case "hnd-hnc-courses": return ["/hnd-hnc-courses/", "Courses/HNC"]
      default: return ["", ""];
    }
  }
  const formatMultiSelctedDisplaynameSEO = (inputstringArr: string[]): string => {
    if (Array.isArray(inputstringArr)) return inputstringArr?.length > 0 ? inputstringArr.join(", ") : "";
    return inputstringArr;
  }
  const displaySubject = displayNameResponse?.subjectName?.length > 0 ? formatMultiSelctedDisplaynameSEO(displayNameResponse?.subjectName) : displayNameResponse?.subjectName;
  const displayParentSubject = displayNameResponse?.parentSubjectName;
  const [qualUrl, qualLabel] = get_find_a_course_url_label(
    qualInUrl
  );
  const breadcrumb_courses = qualInUrl
    ? [{ url: qualUrl, label: qualLabel }]
    : [];
  const breadCrumb_subjectl2 =
    displayNameResponse?.subjectName &&
      displayNameResponse?.subjectName?.length > 0
      ? [
        {
          url: `/${qualInUrl}/search?subject=${subjectNameParam?.[0]}+${subjectNameParam?.[1]}`,
          label: `${displaySubject} courses`,
        },
      ]
      : [{
        url: `/${qualInUrl}/search?subject=${searchSEOPayload?.searchSubject}`,
        label: `${displaySubject} courses`,
      },];
  const breadCrumb_subjectl1 = displayNameResponse?.parentSubjectName
    ? [
      {
        url: `/${qualInUrl}/search?subject=${displayNameResponse?.parentSubjectTextKey}`,
        label: `${displayParentSubject}`,
      },
    ]
    : [];
  return [...breadcrumb_courses, ...breadCrumb_subjectl1, ...breadCrumb_subjectl2];
}

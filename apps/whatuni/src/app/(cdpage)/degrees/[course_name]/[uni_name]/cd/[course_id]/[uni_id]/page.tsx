import Cdpageclient from './cdPageClientWrapper';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import { generateBreadcrumbData } from "@packages/lib/utlils/generateBreadcrumb"
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/CourseInfoComponent';
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';
import { graphQlFetchFunction } from '@packages/lib/server-actions/server-action';
import { COURSE_DETAILS_QUERY, courseContentExtractor } from "@packages/lib/graphQL/course-details.graphql";
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import SimilarCourseComponent from '@packages/shared-components/course-details/similar-course/SimilarCourseComponent';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';

import { reviewPayload } from "@packages/lib/api-payloads/payloads";
import getApiUrl from "@packages/REST-API/api-urls";
import makeApiCall from "@packages/REST-API/rest-api";


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
  const [data, contents, jsonResponse] = await Promise.all([
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc",
      },
    }).then((res) => res.json()),
    graphQlFetchFunction(COURSE_DETAILS_QUERY),
    makeApiCall(
      getApiUrl?.homePageReviews,
      "POST",
      null,
      null,
      reviewPayload
    )
  ]);


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
      <Courseheaderinfocomponents data={data} />
      <Yearofentrycomponents />
      <Cdpageclient data={data} courseContent={courseContent} prams_slug={prams_slug} jsonResponse={jsonResponse} />
      <Othercoursesmaylikecomponents />
      <SimilarCourseComponent data={data} />
      {process.env.PROJECT === "Whatuni" &&
        <Findacoursecomponents />
      }
    </>
  )
}

import Cdpageclient from './cdPageClientWrapper';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import {generateBreadcrumbData} from "@packages/lib/utlils/generateBreadcrumb"
export default async function Cdpage({ params }: any) {

  const prams_slug = await params;
  const slug = `/degrees/${await prams_slug.course_name}/${prams_slug.uni_name}/cd/${prams_slug.id1}/${prams_slug.id2}/`

  // ------------------------------------------------------initial fetch ----------------------------------------------------------------
  const searcchparams = new URLSearchParams({
    courseId: "123",
    affiliateId: "220703",
  })
  const url = `https://p5bgb22g76.execute-api.eu-west-2.amazonaws.com/dev-dom-search-bff/v1/search/getCourseDetails?${searcchparams.toString()}`;
  const cdpagedata = await fetch(url, {
    method: "GET",
    headers: {
      "siteCode": "WU",
      "Content-Type": "application/json",
      "x-api-key": "YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc",
    },
  });
  const data = await cdpagedata.json();
  console.log(data,"data from the cdpage")
  // --------------------------------------------------------------------------------------------------------------------------------------
  const customLabels = [
    "degrees",
    "",
    "",
    "cd",
    "",
    ""
  ];
  const breadcrumbData = generateBreadcrumbData(slug,customLabels);
  return (
    <>
      <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden lg:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent propsdata={breadcrumbData} preview={false} />
        </div>
      </section>
      <Cdpageclient data={data} />
    </>
  )
}

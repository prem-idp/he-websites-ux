import Cdpageclient from './cdPageClientWrapper';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import cdjson from './cdpagejson.json'
export default async function Cdpage({params}:any){

  const prams_slug =await params;
  const slug= `/degrees/${ await prams_slug.course_name}/${prams_slug.uni_name}/cd/${prams_slug.id1}/${prams_slug.id2}/`
  const searcchparams = new URLSearchParams({
    courseId: "123",
    affiliateId: "220703", 
  })
  const url = `https://p5bgb22g76.execute-api.eu-west-2.amazonaws.com/dev-dom-search-bff/v1/search/getCourseDetails?${searcchparams.toString()}`;
  const cdpagedata = await fetch(url, {
    method: "GET",
    headers: {
      "siteCode":"WU",
      "Content-Type": "application/json",
      "x-api-key":"YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc",
    },
  });

  const data = await cdpagedata.json();
  const customLabels = [
    "degrees",
    "",
    "",
    "cd",
    "",
    ""
  ];
  function generateBreadcrumbData(currentPath: any) {
  
    const sanitizedPath = currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;
    const pathSegments = sanitizedPath
      .split("/")
      .filter((segment: any) => segment);
    // Construct breadcrumb data
    const breadcrumbData = pathSegments.map((segment: any, index: any) => {
      const url =
        index === pathSegments.length - 1
          ? "" // No URL for the last breadcrumb
          : "/" + pathSegments.slice(0, index + 1).join("/"); // Build URL for each segment

      return {
        url,
        label:
          customLabels[index] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char: any) => char.toUpperCase()),
      };
    });
    breadcrumbData.unshift({
      url: "/",
      label: "Home",
    });

    return breadcrumbData;
  }


  const breadcrumbData = generateBreadcrumbData(slug)


  return (
    <>
    <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden lg:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent propsdata={breadcrumbData}  preview={false}/>
        </div>
    </section>
  <Cdpageclient data={data}/>
    </>     
  )
}

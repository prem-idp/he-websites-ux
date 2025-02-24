import Courseoptionscomponents from '@packages/shared-components/course-details/course-options/courseoptionscomponents';
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/courseinfocomponents';
import Jumptocomponents from '@packages/shared-components/course-details/jump-to/jumptocomponents';
import Modulescomponents from '@packages/shared-components/course-details/modules/modulescomponents';
import Entryrequirements from '@packages/shared-components/course-details/entery-requirements/entryrequirements';
import Tuitionfeescomponents from '@packages/shared-components/course-details/tuition-fees/tuitionfeescomponents';
import Popularalevelsubjectcomponents from '@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents';
import Latestreviewscomponents from '@packages/shared-components/course-details/latest-reviews/latestreviewscomponents';
import Uniinfocomponents from '@packages/shared-components/course-details/uni-info/uniinfocomponents';
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import Similarcoursecomponents from '@packages/shared-components/course-details/similar-course/similarcoursecomponents';
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
import Reviewfiltermodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewfiltermodalcomponents';
import Reviewgallerymodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewgallerymodalcomponents';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import cdjson from './cdpagejson.json'
export default async function Cdpage({params}:any){
  console.log(await params,"parmas")
  const pathslug =await params;
  const slug= `/degrees/${params.course_name}/${params.uni_name}/cd/${params.id1}/${params.id2}/`
  let propsdata;
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
  console.log(data);
  
  console.log(cdpagedata,"cdpage")
  if(cdpagedata){
    propsdata=cdpagedata
  }
  else{
    propsdata=cdjson;
  }
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
    {/* <Courseheaderinfoskeleton /> */}
    <Courseheaderinfocomponents />
    {/* <Yearofentryskeleton /> */}
    <Yearofentrycomponents />
    {/* <Courseoptionsskeleton />  */}
    <Courseoptionscomponents/> 
    {/* <Jumptoskeleton /> */}
    <Jumptocomponents />
    <Courseinfocomponents  />
    <Modulescomponents />
    <Entryrequirements/>
    <Popularalevelsubjectcomponents />
    <Tuitionfeescomponents />
    <Latestreviewscomponents />
    <Uniinfocomponents />
    <Othercoursesmaylikecomponents />
    <Similarcoursecomponents />
    <Findacoursecomponents />
    {/* <Subscribecomponents /> */}
   
    {/* {(openModal === "reviewfilter" || openModal === "reviewgallery") && <Reviewfiltermodalcomponents isOpen={isOpen} onOpenReviewGalleryModal={()=> handleOpenModal("reviewgallery")} onClose={handleCloseModal} />} */}
    {/* {openModal === "reviewgallery" && <Reviewgallerymodalcomponents isOpen={isOpen} onClose={()=> handleCloseModal("reviewgallery")} />} */}
    </>     
  )
}

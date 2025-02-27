import Courseoptionscomponents from '@packages/shared-components/course-details/course-options/courseoptionscomponents';
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/CourseInfoComponent';
import Jumptocomponents from '@packages/shared-components/course-details/jump-to/jumptocomponents';
import Modulescomponents from '@packages/shared-components/course-details/modules/ModulesComponent';
import Entryrequirements from '@packages/shared-components/course-details/entery-requirements/EntryrequirementsComponent';
import Tuitionfeescomponents from '@packages/shared-components/course-details/tuition-fees/TutionFeesComponent';
import Popularalevelsubjectcomponents from '@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents';
import Latestreviewscomponents from '@packages/shared-components/course-details/latest-reviews/LatestReviewsComponent';
import Uniinfocomponents from '@packages/shared-components/course-details/uni-info/UniInfoComponent';
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import Similarcoursecomponents from '@packages/shared-components/course-details/similar-course/SimilarCourseComponent';
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
import Reviewfiltermodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewfiltermodalcomponents';
import Reviewgallerymodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewgallerymodalcomponents';
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';

const Page = () => {
  const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Insert level",
    },
    {
      url: "",
      label: "Insert level",
    },
  ];
  return (
    <>
    <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden lg:block">
        <div className="max-w-container mx-auto">
          <p> test</p>
          <Breadcrumblayoutcomponent data={breadcrumbData} />
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

export default Page
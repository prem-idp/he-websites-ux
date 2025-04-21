"use client"
import React, { useState } from 'react'

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
import Subjectmodalcomponents from '@packages/shared-components/course-details/Modal/subjectmodalcomponents';
import Examtypemodalcomponents from '@packages/shared-components/course-details/Modal/examtypemodalcomponents';
import Locationmodalcomponents from '@packages/shared-components/course-details/Modal/locationmodalcomponents';
import Courseinfomodalcomponents from '@packages/shared-components/course-details/Modal/courseinfomodalcomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';

const page = () => {
  const [openModal, setOpenModal] = useState(null);
  const [isOpen, setIsOpen] = useState<any>(null);

  const handleOpenModal = (modalName: any) => {
    setOpenModal(modalName);
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };
  const handleCloseModal = (modalName: any) => {
    setIsOpen(null);
    setOpenModal(null);
    document.body.classList.remove("overflow-y-hidden");
    const validModals = ["subject", "examType", "location", "courseoption", "reviewfilter", "reviewgallery"];   
    
    if (validModals.includes(modalName)) {
      setOpenModal(null);
    }
  };

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
    <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden md:block">
        <div className="max-w-container mx-auto">
          {/* <Breadcrumblayoutcomponent data={breadcrumbData} /> */}
        </div>
    </section>
    {/* <Courseheaderinfoskeleton /> */}
    <Courseheaderinfocomponents onOpenModal={() => handleOpenModal("oneclick")} />
    {/* <Clearingcourseheaderinfo /> */}
    {/* <Yearofentryskeleton /> */}
    <Yearofentrycomponents />
    {/* <Courseoptionsskeleton />  */}
    <Courseoptionscomponents onOpenModal={() => handleOpenModal("courseoption")} /> 
    {/* <Jumptoskeleton /> */}
    <Jumptocomponents />
    <Courseinfocomponents  onOpenModal={() => handleOpenModal("subject")} onOpenReviewModal={()=> handleOpenModal("reviewfilter")} />
    <Modulescomponents />
    <Entryrequirements onOpenModal={() => handleOpenModal("examType")} />
    {/* <Entryrequirementsskeleton />
    <Popularalevelsubjectskeleton /> */}
    <Popularalevelsubjectcomponents />
    <Tuitionfeescomponents onOpenModal={() => handleOpenModal("location")} />
    <Latestreviewscomponents onOpenModal={() => handleOpenModal("subject") } />
    <Uniinfocomponents />
    {/* <Othercoursesmaylikecomponents /> */}
    <Similarcoursecomponents />
    <Findacoursecomponents />
    {/* <Subscribecomponents /> */}
    {openModal === "courseoption" && <Courseinfomodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    {openModal === "subject" && <Subjectmodalcomponents isOpen={isOpen}  onClose={handleCloseModal} />}
    {openModal === "examType" && <Examtypemodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    {openModal === "location" && <Locationmodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    {/* {(openModal === "reviewfilter" || openModal === "reviewgallery") && <Reviewfiltermodalcomponents isOpen={isOpen} onOpenReviewGalleryModal={()=> handleOpenModal("reviewgallery")} onClose={handleCloseModal} />}
    {openModal === "reviewgallery" && <Reviewgallerymodalcomponents isOpen={isOpen} onClose={()=> handleCloseModal("reviewgallery")} />}
    {openModal === "oneclick" && <Oneclickmodalcomponents isOpen={isOpen} onClose={handleCloseModal} />} */}
    </>     
  )
}

export default page
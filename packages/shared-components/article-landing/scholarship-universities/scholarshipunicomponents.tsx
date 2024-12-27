"use server";
import Scholarshipunislidercomponents from "@packages/shared-components/common-utilities/slider/scholarshipunislidercomponents";
import React from "react";

const Scholarshipunicomponents = async () => {
  return (
    <div className="scholarship-container bg-white">
      <div className="max-w-container mx-auto">
        <div className="scholarship-card-container px-[0] py-[34px] md:py-[64px]">
          <div className="scholarship-header px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]">
            <div className="h2 font-bold">Heading</div>
            <p className="font-normal small mt-[8px]">Subheading</p>
          </div>
          <div className="scholarship-course-container ">
            <div className="scholarship-inner-wrap">
              <Scholarshipunislidercomponents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarshipunicomponents;

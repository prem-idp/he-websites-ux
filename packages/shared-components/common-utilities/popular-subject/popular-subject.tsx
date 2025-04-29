import React from "react";
import PopularSubjectSlider from "@packages/shared-components/common-utilities/popular-subject-slider/popular-subject-slider";

const PopularSubject = ({uniTitle,subjectTitle}:any) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
        <div className="text-heading5 font-bold font-farro">{uniTitle}</div>
        <div className="text-para-lg font-semibold">{subjectTitle}</div>
      </div>
      <PopularSubjectSlider />
    </div>
  );
};

export default PopularSubject;

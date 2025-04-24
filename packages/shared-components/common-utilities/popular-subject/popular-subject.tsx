import React from "react";
import PopularSubjectSlider from "@packages/shared-components/common-utilities/popular-subject-slider/popular-subject-slider";

const PopularSubject = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-heading5 font-bold font-farro">
        Courses at Portsmouth University
      </div>
      <div className="text-para-lg font-semibold">Popular subjects</div>
      <PopularSubjectSlider />
    </div>
  );
};

export default PopularSubject;

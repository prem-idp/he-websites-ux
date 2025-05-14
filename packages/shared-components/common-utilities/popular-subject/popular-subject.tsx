import React from "react";
import PopularSubjectSlider from "@packages/shared-components/common-utilities/popular-subject-slider/popular-subject-slider";

const PopularSubject = ({ uniTitle, subjectTitle }: any) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
        {uniTitle && (
          <div className="h5 md:text-heading5 font-bold font-farro">
            {uniTitle}
          </div>
        )}
        <div className="text-para-lg font-semibold">{subjectTitle}</div>
      </div>
      <PopularSubjectSlider />
      <div className="flex justify-center mt-[4px]">
        <a
          href="#"
          className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
        >
          View all courses
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
              stroke="#3460DC"
              strokeWidth="1.48148"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PopularSubject;

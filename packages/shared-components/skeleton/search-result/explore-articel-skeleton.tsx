import React from "react";

const Explorearticelskeleton = () => {
  return (
    <>
      <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] lg:flex-row">
        <div className="w-full md:h-[193px] lg:h-[221px] lg:w-[392px] shrink-0">
          <div className="skeleton skeleton-square-img skeleton-text-animated w-full h-full object-cover md:h-[193px] lg:h-[221px] !m-0 rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"></div>
        </div>
        <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 lg:px-[24px] lg:py-[32px] grow">
          <div className="skeleton skeleton-text-animated large_heading !w-[40%] !mt-0"></div>
          <div className="skeleton skeleton-text-animated descrip !mt-0"></div>
          <div className="skeleton skeleton-text-animated descrip !mt-0"></div>
          <div className="skeleton skeleton-text-animated descrip !mt-0"></div>
          <div className="skeleton skeleton-text-animated descrip !mt-0"></div>
          <div className="flex items-center gap-[4px] w-fit text-primary-400 small font-semibold hover:underline">
            <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5.61377L12 10.6138L7 15.6138"
                stroke="#d4d4d4"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorearticelskeleton;

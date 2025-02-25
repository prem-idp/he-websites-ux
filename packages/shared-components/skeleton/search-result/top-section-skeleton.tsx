import React from "react";

const TopSectionSkeleton = () => {
  return (
    <>
      <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
        <nav aria-label="breadcrumb">
          <ul className="flex flex-wrap gap-[20px]">
            <li className="flex relative">
              <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
            </li>
            <li className="flex relative">
              <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
            </li>
            <li className="flex relative">
              <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
            </li>
            <li className="flex relative">
              <span className="skeleton after:absolute after:flex after:justify-center after:content-[''] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="py-[16px]">
        <div className="skeleton skeleton-text-animated descrip !w-[50%]"></div>
        <div className="skeleton skeleton-text-animated descrip !w-[30%]"></div>
      </div>
    </>
  );
};

export default TopSectionSkeleton;

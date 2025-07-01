import React from "react";

const TotalCostSkeleton = () => {
  return (
    <div className="skeleton skeleton-text-animated !h-[106px] p-[16px] !rounded-none lg:p-[24px] lg:!rounded-[8px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
          <div className="skeleton skeleton-text-animated large_heading !w-[50px]"></div>
        </div>
        <div className="flex flex-col items-end">
          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
          <div className="skeleton skeleton-text-animated large_heading !w-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default TotalCostSkeleton;

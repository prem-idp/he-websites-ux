import React from "react";
import { RightBlueArrowIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";
import { LeftBlueArrowIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";
const RedirectionButton = () => {
  return (
    <div className="grid grid-cols-2 gap-[8px]">
      <button className="group flex gap-[4px] items-center justify-start bg-white hover:bg-primary-400 hover:text-white border border-primary-400 rounded-[4px] p-[12px]">
        <span className="flex items-center justify-center w-[24px] h-[24px]">
          <LeftBlueArrowIcon hover={"group-hover:stroke-white"} />
        </span>
        <span className="flex flex-col items-start">
          <span>Previous</span>
          <span>Why study here</span>
        </span>
      </button>
      <button className="group flex gap-[4px] items-center justify-between bg-white hover:bg-primary-400 hover:text-white border border-primary-400 rounded-[4px] p-[12px]">
        <span className="flex flex-col items-start">
          <span>Next</span>
          <span>University life</span>
        </span>
        <span className="flex items-center justify-center w-[24px] h-[24px]">
          <RightBlueArrowIcon hover={"group-hover:stroke-white"} />
        </span>
      </button>
    </div>
  );
};

export default RedirectionButton;

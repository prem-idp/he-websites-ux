import React from "react";
import { RightBlueArrowIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";
import { LeftBlueArrowIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";
const RedirectionButton = ({ btnState = false }) => {
  return (
    // <div className="flex justify-end gap-[8px]">
    <div className="flex items-end justify-end gap-[8px] px-[16px] md:px-[20px] lg:px-0">
      {btnState && (
        <button className="group w-1/2 text-primary-400 flex gap-[4px] items-center justify-start bg-white hover:bg-primary-400 hover:text-white border border-primary-400 rounded-[4px] p-[12px]">
          <span className="flex items-center justify-center w-[24px] h-[24px]">
            <LeftBlueArrowIcon hover={"group-hover:stroke-white"} />
          </span>
          <span className="flex flex-col text-left items-start">
            <span className="para font-semibold">Previous</span>
            <span className="small">Why study here</span>
          </span>
        </button>
      )}
      <button className="group w-1/2 text-primary-400 flex gap-[4px] items-center justify-between bg-white hover:bg-primary-400 hover:text-white border border-primary-400 rounded-[4px] p-[12px]">
        <span className="flex flex-col text-left items-start">
          <span className="para font-semibold">Next</span>
          <span className="small">University life</span>
        </span>
        <span className="flex items-center justify-center w-[24px] h-[24px]">
          <RightBlueArrowIcon hover={"group-hover:stroke-white"} />
        </span>
      </button>
    </div>
  );
};

export default RedirectionButton;

import React from "react";
import { RightArrowIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";
const RedirectionButton = () => {
  return (
    <div className="grid grid-cols-2 gap-[8px]">
      <button className="bg-white border border-primary-400 rounded-[4px] p-[12px]">
        {/* <Image> */}

        <RightArrowIcon />
        <span>
          <p>Previous</p>
          <span>Why study here</span>
        </span>
      </button>
      <button className="bg-white border border-primary-400 rounded-[4px] p-[12px]">
        {/* <Image> */}
        <span>
          <p>Next</p>
          <span>University life</span>
        </span>
      </button>
      <button></button>
    </div>
  );
};

export default RedirectionButton;

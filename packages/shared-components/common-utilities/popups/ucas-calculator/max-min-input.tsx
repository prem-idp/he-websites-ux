import React from "react";

const MaxMinInputBox = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[4px] small">
        <label htmlFor="minpoint" className="font-semibold ">
          Minimum points
        </label>
        <input
          type="text"
          id=""
          placeholder="Enter UCAS points"
          className="block rounded-[8px] min-h-[44px] border border-grey-500 py-[12px] px-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[4px] small">
        <label htmlFor="minpoint" className="font-semibold ">
          Maximum points
        </label>
        <input
          type="text"
          id=""
          placeholder="Enter UCAS points"
          className="block rounded-[8px] min-h-[44px] border border-grey-500 py-[12px] px-[10px]"
        />
      </div>
    </div>
  );
};

export default MaxMinInputBox;

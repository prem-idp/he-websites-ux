"use client";
import React, { useState } from "react";

const SwitchToggleComponent = ({ label, description, stateEnable }: any) => {
  const [enabled, setEnabled] = useState(stateEnable || false);

  return (
    <div className="flex gap-[12px] justify-between">
      {/* Text Content */}
      <div className="flex flex-col gap-[4px] max-w-[220px] xs:max-w-[250px] sm:max-w-[100%] text-grey300 select-none">
        <span className="small font-semibold">{label}</span>
        <span className="x-small">{description}</span>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-[42px] min-h-[24px] max-h-[24px] relative inline-flex reve items-center mt-[4px] rounded-full transition-colors focus:outline-none ${
          enabled ? "bg-positive-default" : "bg-grey-400"
        } 
        `}
      >
        <span
          className={` transform transition ease-in-out duration-200 absolute translate-y-[1px] inset-y-[1] left-[1px] top-[1] flex items-center justify-center rounded-full bg-white shadow-custom-13 size-[20px] ${enabled ? "translate-x-[19px]" : " translate-x-[2px]"} `}
        />
      </button>
    </div>
  );
};

export default SwitchToggleComponent;

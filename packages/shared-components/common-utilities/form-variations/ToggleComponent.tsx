import React, { useState } from "react";

const ToggleComponent = ({ label, description }: any) => {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };
  return (
    <>
      <div className="flex gap-[12px]">
        <button
          onClick={toggle}
          className={`relative inline-flex items-center w-[26px] h-[16px] mt-[4px] rounded-full transition-colors focus:outline-none ${
            enabled ? "bg-positive-default" : "bg-grey-400"
          }`}
        >
          <span
            className={`translate-x-0 transform transition ease-in-out duration-200 absolute inset-y-0 left-[1px] top-[1] flex items-center justify-center size-[14px] rounded-full bg-white shadow-custom-13 ${
              enabled ? "translate-x-[10px]" : "translate-x-0"
            }`}
          />
        </button>
        {/* Text Content */}
        <div>
          <p className="font-semibold text-gray-600">{label}</p>
          <p className="small text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ToggleComponent;

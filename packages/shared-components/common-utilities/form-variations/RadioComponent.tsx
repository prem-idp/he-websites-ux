import React from "react";

const RadioComponent = ({ label, description }: any) => {
  return (
    <form>
      <label className="flex gap-[12px]">
        <input
          type="radio"
          name="control"
          className="size-[16px] border border-grey-400 accent-primary-400 mt-[4px]"
        />
        <div>
          <p className="font-semibold text-gray-600">{label}</p>
          <p className="small text-gray-600">{description}</p>
        </div>
      </label>
    </form>
  );
};

export default RadioComponent;

import React from "react";

type RadioProps = {
  id: number;
  label?: string;
  description?: string;
};
import React from "react";

type RadioProps = {
  id: number;
  label?: string;
  description?: string;
};

const RadioComponent = ({id, label, description }: RadioProps) => {
  return (
      <div className="flex items-center gap-[12px]">
        <input type="radio" name="control" id={`radio ${id}`} className="self-start size-[16px] border border-grey-400 accent-primary-400 mt-[4px]"/>
        <label htmlFor={`radio ${id}`}>
          {label?.trim() && <p className="x-small font-semibold text-grey-600">{label}</p>}
          {description?.trim() && <p className="small font-normal text-grey-600">{description}</p>}
        </label>
      </div>
  );
};

export default RadioComponent;

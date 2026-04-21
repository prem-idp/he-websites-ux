import React from "react";
import { CheckIcon } from "@/app/media-utilities/mediautilities";

const CustomCheckbox = ({ children }: { children: React.ReactNode }) => (
  <label className="flex items-start gap-[12px] cursor-pointer">
    <input type="checkbox" className="peer hidden" />
    <div className="w-[16px] h-[16px] mt-[3px] border border-grey-400 rounded flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-blue-600 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100 flex-shrink-0">
      <CheckIcon />
    </div>
    <span className="x-small text-grey-600">{children}</span>
  </label>
);

export default CustomCheckbox;

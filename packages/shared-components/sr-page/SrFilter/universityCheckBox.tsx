"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const UniversityCheckBox = ({
  slug,
  formUrl,
  appendSearchParams,
  item,
}: any) => {
  const searchparams = useSearchParams();
  const [isUniSelected, setIsUniSelected] = useState(false);
  const [pageCategory, setPageCategory] = useState("csearch");
  useEffect(() => {
    const uni = searchparams?.get("university")?.includes(item?.collegeTextKey);
    if (uni) {
      setPageCategory("search");
      setIsUniSelected(true);
    }
  }, [searchparams]);
  return (
    <div className="form_check relative">
      <div className="flex items-start gap-[8px]">
        <div className="checkbox_card">
          <Link
            id={"university" + item?.collegeTextKey}
            href={{
              pathname: `/${slug[1]}/${pageCategory}`,
              query: formUrl("university", item?.collegeTextKey, true),
            }}
          ></Link>
          <input
            type="checkbox"
            checked={searchparams?.get("university") === item?.collegeTextKey}
            className="form-checkbox hidden"
            id={item?.collegeName}
            onChange={() => {
              appendSearchParams("university", item?.collegeTextKey, true);
              setIsUniSelected(!isUniSelected);
            }}
          />
          <label
            htmlFor={item?.collegeName}
            className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
          >
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                fill="white"
                stroke="white"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
        </div>
        <label
          htmlFor={item?.collegeName}
          className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
        >
          {item?.collegeName}
        </label>
      </div>
    </div>
  );
};

export default UniversityCheckBox;

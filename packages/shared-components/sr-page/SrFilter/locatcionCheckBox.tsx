"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SubRegions from "@packages/shared-components/sr-page/SrFilter/subregion";
const LocationcheckBox = ({
  item,
  jsondata,
  slug,
  isIndexed,
  formUrl,
  appendSearchParams,
  isAllUkChecked,
}: any) => {
  const searchparams = useSearchParams();

  const [isRegionSelected, setIsRegionSelected] =
    useState<any>(!!isAllUkChecked);

  useEffect(() => {
    if (isAllUkChecked) {
      setIsRegionSelected(true);
    } else {
      const region = searchparams
        ?.get("location")
        ?.includes(item?.regionTextKey);
      setIsRegionSelected(region);
    }
  }, [isAllUkChecked, searchparams]);
  return (
    <>
      <div className="form_check relative m-[0_0_12px_24px]">
        <div className="flex items-start gap-[8px]">
          <div className="checkbox_card">
            {isIndexed && !isRegionSelected && (
              <Link
                id={"location" + item?.regionTextKey}
                href={{
                  pathname: `${slug}`,
                  query: formUrl("location", item?.regionTextKey),
                }}
              ></Link>
            )}
            <input
              checked={isRegionSelected || false}
              onChange={() => {
                appendSearchParams("location", item?.regionTextKey);
                setIsRegionSelected(!isRegionSelected);
              }}
              type="checkbox"
              className="form-checkbox hidden"
              id={item?.regionName}
              name={item?.regionName}
            />

            <label
              htmlFor={item?.regionName}
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
            htmlFor={item?.regionName}
            className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
          >
            {item?.regionName}
          </label>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
        <SubRegions
          item={item}
          jsondata={jsondata}
          isIndexed={isIndexed}
          slug={slug}
          formUrl={formUrl}
          appendSearchParams={appendSearchParams}
          isRegionSelected={isRegionSelected}
        />
        <li>
          {jsondata?.regionList
            ?.map((regionlist: any) => {
              if (regionlist?.parentRegionId == item?.regionId) {
                return regionlist;
              }
            })
            .filter(Boolean)
            ?.map((childItem: any, index: any) => (
              <SubRegions
                key={index + 1}
                childItem={childItem}
                jsondata={jsondata}
                isIndexed={isIndexed}
                slug={slug}
                formUrl={formUrl}
                appendSearchParams={appendSearchParams}
                isRegionSelected={isRegionSelected}
              />
            ))}
        </li>
      </ul>
    </>
  );
};

export default LocationcheckBox;

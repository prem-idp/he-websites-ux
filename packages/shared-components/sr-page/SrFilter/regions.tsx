"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { extractUrlAndCookieValues } from "@packages/lib/utlils/filters/result-filters";
import LocationCheckBox from "@packages/shared-components/sr-page/SrFilter/locationCheckBox";
const Regions = ({
  item,
  regionListData,
  slug,
  isIndexed,
  formUrl,
  appendSearchParams,
  country,
}: any) => {
  const searchparams = useSearchParams();

  const [isRegionSelected, setIsRegionSelected] = useState<any>(false);

  useEffect(() => {
    const appliedvalues =
      extractUrlAndCookieValues(searchparams, "", "")?.region?.split("+") || [];
    if (
      appliedvalues?.includes(item?.regionTextKey) ||
      appliedvalues?.includes(country?.regionTextKey)
    ) {
      setIsRegionSelected(true);
    } else {
      setIsRegionSelected(false);
    }
  }, [searchparams]);

  const locationClicked = (regionTextKey: string) => {
    console.log(regionTextKey);
    console.log(regionListData);
    const selectedRegion = regionListData?.find(
      (region: any) => region?.regionTextKey == regionTextKey
    );

    console.log({ selectedRegion });
    if (!selectedRegion) return;
    const parentRegion = regionListData?.find(
      (region: any) => region?.regionId === selectedRegion?.parentRegionId
    );
    let appliedRegions =
      extractUrlAndCookieValues(searchparams, "", "")?.region?.split("+") || [];
    const isParentRegion = regionListData?.some(
      (region: any) => region?.parentRegionId === selectedRegion?.regionId
    );
    console.log("selected value oda parent", parentRegion);
    console.log("applied filter", appliedRegions);
    console.log("isParentRegion", isParentRegion);
    if (isParentRegion) {
      appliedRegions = appliedRegions?.filter((region) => {
        const subregion = regionListData?.find(
          (r: any) => r?.regionTextKey === region
        );
        return subregion?.parentRegionId !== selectedRegion?.regionId;
      });
      appliedRegions?.push(regionTextKey);
    } else if (parentRegion) {
      if (appliedRegions.includes(parentRegion?.regionTextKey)) {
        appliedRegions = appliedRegions.filter(
          (region) => region !== parentRegion?.regionTextKey
        );
        const siblingRegions = regionListData
          ?.filter(
            (region: any) => region?.parentRegionId === parentRegion?.regionId
          )
          ?.map((region: any) => region?.regionTextKey)
          ?.filter((region: any) => region !== regionTextKey);
        appliedRegions.push(...siblingRegions);
      } else {
        if (appliedRegions?.includes(regionTextKey)) {
          appliedRegions = appliedRegions?.filter(
            (region) => region !== regionTextKey
          );
        } else {
          appliedRegions?.push(regionTextKey);
        }
      }
      const allSubregions = regionListData
        ?.filter(
          (region: any) => region?.parentRegionId === parentRegion?.regionId
        )
        ?.map((region: any) => region?.regionTextKey);
      const allSelected = allSubregions?.every((subregion: any) =>
        appliedRegions?.includes(subregion)
      );
      if (allSelected) {
        appliedRegions = appliedRegions?.filter(
          (region) => !allSubregions?.includes(region)
        );
        appliedRegions?.push(parentRegion?.regionTextKey);
      }
    }
    console.log(appliedRegions?.join("+"));
    appendSearchParams("region", appliedRegions?.join("+"));
  };

  return (
    <>
      <div className="form_check relative m-[0_0_12px_24px]">
        <div className="flex items-start gap-[8px]">
          <div
            className="checkbox_card"
            onClick={() => {
              locationClicked(item?.regionTextKey);
            }}
          >
            {isIndexed && !isRegionSelected && (
              <Link
                id={"region" + item?.regionTextKey}
                href={{
                  pathname: `${slug}`,
                  query: formUrl("region", item?.regionTextKey),
                }}
              ></Link>
            )}
            <input
              checked={isRegionSelected || false}
              onChange={() => {
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
        <li>
          {regionListData
            ?.map((regionlist: any) => {
              if (regionlist?.parentRegionId == item?.regionId) {
                return regionlist;
              }
            })
            ?.filter(Boolean)
            ?.map((childItem: any, index: any) => (
              <LocationCheckBox
                key={index + 1}
                childItem={childItem}
                isIndexed={isIndexed}
                regionListData={regionListData}
                slug={slug}
                formUrl={formUrl}
                country={country}
                locationClicked={locationClicked}
              />
            ))}
        </li>
      </ul>
    </>
  );
};

export default Regions;

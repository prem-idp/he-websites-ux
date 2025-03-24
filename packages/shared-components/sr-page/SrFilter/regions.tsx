"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { KeyNames } from "@packages/lib/utlils/filters/filterJson";
import { extractUrlAndSessionValues } from "@packages/lib/utlils/filters/result-filters";
import LocationCheckBox from "@packages/shared-components/sr-page/SrFilter/locationCheckBox";
import { generatePathName } from "@packages/lib/utlils/filters/result-filters";
const Regions = React.memo(
  ({
    item,
    regionListData,
    slug,
    isIndexed,
    formUrl,
    appendSearchParams,
  }: any) => {
    const searchparams = useSearchParams();
    const keyName = KeyNames();
    const [isRegionSelected, setIsRegionSelected] = useState<any>(false);
    useEffect(() => {
      const appliedvalues =
        extractUrlAndSessionValues(searchparams, "", "")?.location?.split(
          "+"
        ) || [];
      if (appliedvalues?.includes(item?.regionTextKey)) {
        setIsRegionSelected(true);
      } else {
        setIsRegionSelected(false);
      }
    }, [searchparams]);

    const getSelectedRegion = (regionListData: any[], regionTextKey: string) =>
      regionListData?.find((region) => region?.regionTextKey === regionTextKey);

    const getParentRegion = (regionListData: any[], selectedRegion: any) =>
      regionListData?.find(
        (region) => region?.regionId === selectedRegion?.parentRegionId
      );

    const isParentRegionSelected = (
      regionListData: any[],
      selectedRegion: any
    ) =>
      regionListData?.some(
        (region) => region?.parentRegionId === selectedRegion?.regionId
      );

    const getSubRegions = (regionListData: any[], parentRegionId: string) =>
      regionListData
        ?.filter((region) => region?.parentRegionId === parentRegionId)
        ?.map((region) => region?.regionTextKey);

    const getAppliedRegions = (searchParams: any) =>
      extractUrlAndSessionValues(searchParams, "", "")?.location?.split("+") ||
      [];
    const locationClicked = (regionTextKey: string) => {
      const selectedRegion = getSelectedRegion(regionListData, regionTextKey);
      if (!selectedRegion) return;

      const parentRegion = getParentRegion(regionListData, selectedRegion);

      let appliedRegions = getAppliedRegions(searchparams);

      if (isParentRegionSelected(regionListData, selectedRegion)) {
        // Remove all subregions if a parent is selected
        appliedRegions = appliedRegions.filter((region) => {
          console.log("entered for", region);
          const subregion = getSelectedRegion(regionListData, region);
          console.log(subregion);
          return subregion?.parentRegionId !== selectedRegion?.regionId;
        });
        appliedRegions.push(regionTextKey);
      } else if (parentRegion) {
        appliedRegions = handleParentRegionSelection(
          appliedRegions,
          parentRegion,
          regionTextKey
        );
      } else {
        //if (!appliedRegions.includes(regionTextKey)) {
        appliedRegions.push(regionTextKey);
        // } else {
        //   appliedRegions?.filter((region) => region !== regionTextKey);
        // }
      }

      console.log(appliedRegions?.join("+"));
      appendSearchParams(keyName?.location, appliedRegions?.join("+"));
    };

    const handleParentRegionSelection = (
      appliedRegions: string[],
      parentRegion: any,
      regionTextKey: string
    ) => {
      console.log({ appliedRegions, parentRegion, regionTextKey });
      if (appliedRegions.includes(parentRegion?.regionTextKey)) {
        console.log("Entered in first if");
        appliedRegions = appliedRegions.filter(
          (region) => region !== parentRegion?.regionTextKey
        );
        const siblingRegions = getSubRegions(
          regionListData,
          parentRegion?.regionId
        )?.filter((region) => region !== regionTextKey);
        console.log("before", appliedRegions, "==", siblingRegions);
        appliedRegions.push(...siblingRegions);
        console.log("after", appliedRegions, "++", siblingRegions);
      } else {
        console.log("entered in else");
        appliedRegions = appliedRegions.includes(regionTextKey)
          ? appliedRegions.filter((region) => region !== regionTextKey)
          : [...appliedRegions, regionTextKey];
      }
      console.log({ appliedRegions });
      return handleAllSubregionsSelection(appliedRegions, parentRegion);
    };

    const handleAllSubregionsSelection = (
      appliedRegions: string[],
      parentRegion: any
    ) => {
      const allSubregions = getSubRegions(
        regionListData,
        parentRegion?.regionId
      );
      const allSelected = allSubregions.every((subregion) =>
        appliedRegions.includes(subregion)
      );
      if (allSelected) {
        appliedRegions = appliedRegions.filter(
          (region) => !allSubregions.includes(region)
        );
        appliedRegions.push(parentRegion?.regionTextKey);
      }
      return appliedRegions;
    };

    return (
      <>
        <div className="form_check relative m-[0_0_12px]">
          <div className="flex items-start gap-[8px]">
            <div
              className="checkbox_card"
              onClick={() => {
                locationClicked(item?.regionTextKey);
              }}
            >
              {!isRegionSelected && (
                <Link
                  id={keyName?.location + item?.regionTextKey}
                  href={{
                    pathname: generatePathName(slug, keyName?.location),
                    query: formUrl(keyName?.location, item?.regionTextKey),
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
        <ul>
          <li className="grid grid-cols-1 sm:grid-cols-2">
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
                  locationClicked={locationClicked}
                />
              ))}
          </li>
        </ul>
      </>
    );
  }
);

export default Regions;

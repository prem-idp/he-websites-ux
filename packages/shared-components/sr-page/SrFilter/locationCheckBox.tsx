"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  extractUrlAndCookieValues,
  heirarchicalLocation,
} from "@packages/lib/utlils/filters/result-filters";
import { getCookie } from "@packages/lib/utlils/helper-function";
const LocationcheckBox = ({
  childItem,
  isIndexed,
  type,
  jsondata,
  slug,
  formUrl,
  appendSearchParams,
  isRegionSelected,
  country,
}: any) => {
  const searchparams = useSearchParams();

  const [isChecked, setIsChecked] = useState<any>(!!isRegionSelected);
  useEffect(() => {
    const locationParam = searchparams?.get("location")?.split(" ");
    if (
      locationParam?.length == 1 &&
      locationParam[0] == country?.regionTextKey
    ) {
      setIsChecked(true);
    }

    // if (isRegionSelected) {
    //   setIsSubRegionSelected(true);
    // } else {
    //   const subregion = searchparams
    //     .get("location")
    //     ?.includes(childItem?.regionTextKey);
    //   setIsSubRegionSelected(subregion);
    // }
  }, [isRegionSelected, searchparams]);
  const regionList = heirarchicalLocation(jsondata?.regionList);
  // console.log({ regionList });
  // const locationCheckboxClicked = (regionTextKey: string) => {
  //   appendSearchParams("location", "");
  // };
  // function locationCheckboxClicked(regionTextKey: any) {
  //   const urlParams = searchparams;
  //   const cookieParams = JSON.parse(getCookie("filter_param") || "");

  //   const urlLocation: any = urlParams?.get("location")
  //     ? urlParams?.get("location")?.split(" ")
  //     : [];
  //   const cookieLocation = cookieParams?.location
  //     ? cookieParams?.location?.split("+")
  //     : [];

  //   let allLocations = Array.from(new Set([...urlLocation, ...cookieLocation]));
  //   if (allLocations.includes(regionTextKey)) {
  //     allLocations = allLocations.filter(
  //       (location) => location !== regionTextKey
  //     );
  //   } else {
  //     allLocations.push(regionTextKey);
  //   }

  //   function getSubRegions(region: any) {
  //     return region.children.flatMap((child: any) => [
  //       child.regionTextKey,
  //       ...getSubRegions(child),
  //     ]);
  //   }

  //   function isAllSubRegionsSelected(region: any) {
  //     const subRegions = getSubRegions(region);
  //     return subRegions.every((subRegion: any) =>
  //       allLocations.includes(subRegion)
  //     );
  //   }

  //   function getRegionByKey(regionList: any, key: any) {
  //     for (const region of regionList) {
  //       if (region.regionTextKey === key) return region;
  //       if (region.children.length) {
  //         const found: any = getRegionByKey(region.children, key);
  //         if (found) return found;
  //       }
  //     }
  //     return null;
  //   }

  //   // Check for region-level selection
  //   for (const country of regionList) {
  //     if (isAllSubRegionsSelected(country)) {
  //       allLocations = allLocations.filter(
  //         (loc) => !getSubRegions(country).includes(loc)
  //       );
  //       allLocations.push(country.regionTextKey);
  //     } else {
  //       for (const region of country.children) {
  //         if (isAllSubRegionsSelected(region)) {
  //           allLocations = allLocations.filter(
  //             (loc) => !getSubRegions(region).includes(loc)
  //           );
  //           allLocations.push(region.regionTextKey);
  //         }
  //       }
  //     }
  //   }
  //   console.log(`?location=${allLocations.join("+")}`);
  //   appendSearchParams("location", allLocations.join("+"));
  //   //router.push(`?location${allLocations.join("+")}`);
  // }

  // Usage
  // updateLocationSearchParams("london");

  return (
    <>
      {childItem && (
        <div>
          <div className="form_check relative m-[0_0_12px_40px]">
            <div className="flex items-start gap-[8px]">
              <div
                className="checkbox_card"
                onClick={() => {
                  //locationCheckboxClicked(childItem?.regionTextKey);
                  appendSearchParams("location", childItem?.regionTextKey);
                }}
              >
                {isIndexed && !isChecked && (
                  <Link
                    id={"location" + childItem?.regionTextKey}
                    href={{
                      pathname: `${slug}`,
                      query: formUrl("location", childItem?.regionTextKey),
                    }}
                  ></Link>
                )}
                <input
                  type="checkbox"
                  checked={isChecked || false}
                  className="form-checkbox hidden"
                  id={childItem?.regionName}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label
                  htmlFor={childItem?.regionName}
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
                htmlFor={childItem?.regionName}
                className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
              >
                {childItem?.regionName}
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationcheckBox;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import { useState, useEffect, useRef } from "react";
import Form from "next/form";
import GADataLayerFn from "@packages/shared-components/common-utilities/commonutil/ga-util";

interface UniversityTabProps {
  searchFormHandle: any;
  setsearchFormHandle: any;
  data: any;
}
const UniversityTab: React.FC<UniversityTabProps> = ({
  searchFormHandle,
  setsearchFormHandle,
  data,
}) => {
  // console.log("searchFormHandle,", searchFormHandle);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [universityList, setUniversityList] = useState<string[]>([]);
  const [unierror, setUnierror] = useState(false);
  const [unidetails, setUnidetails] = useState<Array<any>>(
    Array.isArray(data) ? data : []
  );
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        courseActions("");
        // console.log("click outside in university");
      }
    };
    // Delay adding listener to avoid immediate triggering

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      !searchFormHandle?.university?.trim() ||
      searchFormHandle?.university?.trim().length < 3
    ) {
      setUniversityList([]);
      return;
    }

    const results = unidetails?.filter((colleges: any) =>
      colleges.collegeNameDisplay
        ?.toLowerCase()
        .includes(searchFormHandle?.university?.trim().toLowerCase())
    );

    setUniversityList(results || []);
  }, [searchFormHandle?.university]);

  const resetAllTabs = (currentTab: string) => ({
    isUniversityClicked:
      currentTab === "University"
        ? !searchFormHandle?.isUniversityClicked
        : false,
  });

  const courseActions = (tabName: string) => {
    // console.log("tabName", tabName);
    setsearchFormHandle((prevData: SearchFormHandle) => ({
      ...prevData,
      ...resetAllTabs(tabName),
    }));
  };
  function handleUnisearch() {
    setUnierror(true);
  }
  return (
    <div ref={containerRef} className="flex flex-col gap-[16px]">
      <div className="bg-white rounded-[24px] p-[16px] border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:pl-[24px] md:p-[10px]">
        <Form
          action={handleUnisearch}
          className="flex flex-col gap-[16px] small md:flex-row"
        >
          <div className="relative grow">
            <input
              autoComplete="off"
              onClick={() => {
                courseActions("University");
                setUnierror(false);
              }}
              type="text"
              className="w-full focus:outline-none pt-0 pb-[16px] text-black placeholder:text-gray-500 border-b border-grey-200 md:py-[10px] md:border-none"
              aria-label=""
              placeholder="University name"
              onChange={(event) => {
                setsearchFormHandle((preData: any) => ({
                  ...preData,
                  university: event.target.value
                    .replace(/\s{2,}/g, " ")
                    .trimStart(),
                  isUniversityClicked: true,
                }));
                setUnierror(false);
              }}
              value={searchFormHandle?.university || ""}
            />
            {searchFormHandle?.isUniversityClicked &&
              searchFormHandle?.university?.trim().length > 2 && (
                <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[53px] custom-scrollbar-2 max-h-[205px] overflow-y-auto mr-[4px]">
                  <ul>
                    {universityList?.map((item: any, index: any) => (
                      <Link
                      prefetch={false}
                      href={`/university-profile/${item?.collegeNameDisplay
                        ?.toLowerCase() // Convert to lowercase
                        ?.replace(/\s+/g, "-")}/${item.collegeId}/`}
                      onClick={() => {
                        // Update state
                        setsearchFormHandle((prevData: any) => ({
                          ...prevData,
                          university: item.collegeNameDisplay,
                          isUniversityClicked: false,
                        }));
                    
                        // Trigger GADataLayerFn
                        GADataLayerFn(
                          "ga_events", // Event type
                          "homepage_search",
                          "university_search",
                          "NA",
                          "NA",
                          "NA",
                          "homepage", // University name
                          "NA", // University ID
                          item.collegeNameDisplay,
                          "NA",
                          "NA",
                          "NA",
                          item.collegeId,
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                          "NA",
                        `${process.env.PROJECT}`,
                          "NA",
                          "NA" // Site name or context
                        );
                      }}
                      key={index}
                      className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      {item.collegeNameDisplay}
                    </Link>
                    
                    ))}
                  </ul>
                </div>
              )}
          </div>
          <button
            type="submit"
            className="btn btn-primary flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[114px]"
          >
            <Image
              src="/static/assets/icons/search_icon.svg"
              width="18"
              height="18"
              alt="Search icon"
            />
            Search
          </button>
        </Form>
      </div>
      {unierror && (
        <p className="small text-negative-default">
          Please select university from dropdown
        </p>
      )}
    </div>
  );
};

export default UniversityTab;

"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import SearchFilterButtonsSkeleton from "@packages/shared-components/skeleton/search-result/search-filter-buttons-skeleton";
const UcasComponent = dynamic(
  () =>
    import(
      "@packages/shared-components/common-utilities/popups/ucas-calculator/ucascomponent"
    ),
  { ssr: false }
);
const filterCookie = JSON.parse(
  decodeURIComponent(
    (typeof document !== "undefined" &&
      document.cookie.split("filter_param=")[1]?.split(";")[0]) ||
      "{}"
  )
);
// Function to get the size of query parameters excluding a specific one
const getfilterCount = (url: any, excludeParam: any[]) => {
  const urlObj = new URL(url); // Create a URL object
  const params = new URLSearchParams(urlObj.search); // Get query parameters
  excludeParam.forEach((param) => params.delete(param));
  if (filterCookie?.subject) delete filterCookie?.subject;
  const filterCount: number =
    params
      .toString()
      .split("&")
      .filter((param) => param).length +
    2 +
    Object.keys(filterCookie).length; // Count remaining params
  return filterCount;
};

const SearchFilterButtons = () => {
  const searchParams = useSearchParams();
  const locationFilterCount: any =
    searchParams?.get("region")?.split(" ")?.length ||
    searchParams?.get("city")?.split(" ")?.length;
  let subjectFilterCount = (
    searchParams?.get("subject")?.split(" ") ||
    searchParams?.get("course")?.split(" ")
  )?.length;
  if (filterCookie?.subject)
    subjectFilterCount =
      subjectFilterCount +
      (filterCookie?.subject?.includes("+")
        ? filterCookie?.subject?.split("+").length
        : 1);
  let url: any;
  const [filterCount, setFilterCount] = useState(0);
  const [gradeCount, setGradeCount] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      url = new URL(window.location.href);
    }
    setFilterCount(
      getfilterCount(url, ["pageno", "page_no", "sort", "q", "keyword"])
    );
    setGradeCount(searchParams?.has("score") ? "1" : "");
  }, [filterCount]);
  const appliedFilters = {
    year: searchParams?.get("year")?.split(","),
    month: searchParams?.get("month")?.split(","),
    location: searchParams?.get("location")?.split(","),
    ucasDcore: searchParams?.get("score")?.split(","),
    university: searchParams?.get("university")?.split(","),
    campusType: searchParams?.get("campus-type")?.split(","),
    qualification: searchParams?.get("qualification")?.split(","),
    studyMethod: searchParams?.get("study-method")?.split(","),
    locationType: searchParams?.get("location-type")?.split(","),
    russellGroup: searchParams?.get("russell-group")?.split(","),
    employmentRateMin: searchParams?.get("employment-rate-min")?.split(","),
    employmentRateMax: searchParams?.get("employment-rate-max")?.split(","),
    studyMode:
      searchParams?.get("study-mode")?.split(",") ||
      searchParams?.get("study_mode")?.split(","),
    pageNo:
      searchParams?.get("pageno")?.split(",") || searchParams?.get("page_no"),
    subject:
      searchParams?.get("subject")?.split(",") || searchParams?.get("course"),
  };
  const router = useRouter();
  const [isUcasPopupOpen, setUcasPopupOpen] = useState(false);

  const filterEvents = (eventName: string | null | undefined) => {
    emitter.emit("isfilterOpen", eventName);
  };

  const ucasClick = () => {
    setUcasPopupOpen(true);
    const body = document?.body;
    body.classList.add("overflow-y-hidden");
  };
  const ucasClose = () => {
    const body = document?.body;
    setUcasPopupOpen(false);
    body.classList.remove("overflow-y-hidden");
  };
  return (
    <>
      <section className="bg-grey-600 px-[12px] py-[16px] sticky top-0 z-[4]">
        <div className="max-w-container mx-auto flex gap-[8px] small">
          {process.env.PROJECT === "Whatuni" && (
            <div
              className="flex items-center justify-center gap-[8px] btn btn-primary grow w-fit px-[12px] lg:grow-0 lg:shrink-0"
              onClick={ucasClick}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                  fill="#F9FAFB"
                />
              </svg>
              Add my grades {gradeCount ? "(" + { gradeCount } + ")" : ""}
            </div>
          )}
          {isUcasPopupOpen && (
            <UcasComponent onClose={ucasClose} isUcasOpen={isUcasPopupOpen} />
          )}
          <div
            onClick={() => filterEvents("all")}
            className="flex items-center justify-center gap-[8px] btn grow w-fit px-[12px] bg-primary-100 hover:bg-primary-200 text-grey300 lg:grow-0 lg:shrink-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.90625V1.875M10 3.90625C8.87817 3.90625 7.96875 4.81567 7.96875 5.9375C7.96875 7.05933 8.87817 7.96875 10 7.96875M10 3.90625C11.1218 3.90625 12.0312 4.81567 12.0312 5.9375C12.0312 7.05933 11.1218 7.96875 10 7.96875M3.90625 16.0938C5.02808 16.0938 5.9375 15.1843 5.9375 14.0625C5.9375 12.9407 5.02808 12.0312 3.90625 12.0312M3.90625 16.0938C2.78442 16.0938 1.875 15.1843 1.875 14.0625C1.875 12.9407 2.78442 12.0312 3.90625 12.0312M3.90625 16.0938V18.125M3.90625 12.0312V1.875M10 7.96875V18.125M16.0938 16.0938C17.2156 16.0938 18.125 15.1843 18.125 14.0625C18.125 12.9407 17.2156 12.0312 16.0938 12.0312M16.0938 16.0938C14.9719 16.0938 14.0625 15.1843 14.0625 14.0625C14.0625 12.9407 14.9719 12.0312 16.0938 12.0312M16.0938 16.0938V18.125M16.0938 12.0312V1.875"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter ({filterCount})
          </div>
          <div className="hidden lg:flex items-center justify-center gap-[8px] lg:shrink-0">
            <div
              className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300"
              onClick={() => filterEvents("subject")}
            >
              Study level
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300"
              onClick={() => filterEvents("subject")}
            >
              Subject {subjectFilterCount && `(${subjectFilterCount})`}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300"
              onClick={() => filterEvents("year")}
            >
              Year
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300"
              onClick={() => filterEvents("university")}
            >
              University
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300"
              onClick={() => filterEvents("location")}
            >
              Location {locationFilterCount && `(${locationFilterCount})`}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="flex items-center justify-center gap-[4px] cursor-pointer px-0 text-grey-50 hover:underline xl:px-[16px] lg:shrink-0"
            onClick={() => {
              router.push(`/degree-courses/search`);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.8173 1.8173C2.24037 1.39423 2.9263 1.39423 3.34937 1.8173L8 6.46794L12.6506 1.8173C13.0737 1.39423 13.7596 1.39423 14.1827 1.8173C14.6058 2.24037 14.6058 2.9263 14.1827 3.34937L9.53206 8L14.1827 12.6506C14.6058 13.0737 14.6058 13.7596 14.1827 14.1827C13.7596 14.6058 13.0737 14.6058 12.6506 14.1827L8 9.53206L3.34937 14.1827C2.9263 14.6058 2.24037 14.6058 1.8173 14.1827C1.39423 13.7596 1.39423 13.0737 1.8173 12.6506L6.46794 8L1.8173 3.34937C1.39423 2.9263 1.39423 2.24037 1.8173 1.8173Z"
                fill="white"
              />
            </svg>
            Reset
          </div>
        </div>
      </section>
      {/* <SearchFilterButtonsSkeleton/> */}
    </>
  );
};

export default SearchFilterButtons;

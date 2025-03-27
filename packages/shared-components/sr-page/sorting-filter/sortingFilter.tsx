"use client";

import { setNewCookie } from "@packages/lib/utlils/commonFunction";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import RadioFilterGroup from "./radioFilterGroup";

const FilterSpinner = dynamic(
  () => import("@packages/shared-components/skeleton/search-result/filter-spinner"),
  { ssr: false }
);

interface SortingFilterProps {
  sortParam?: {
    param?: { sort?: string; postcode?: string; distance_from_home?: string };
    filterCookieParam?: Record<string, string>;
  };
  filters: Record<string, Record<string, string>>;
  projectName?: string;
}

const SortingFilterGen: React.FC<SortingFilterProps> = ({
  sortParam = {},
  filters,
  projectName = "Default",
}) => {
  const router = useRouter();
  const filterCookieParam = sortParam?.filterCookieParam || {};
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [sortValue, setSortValue] = useState<string | null>(null);

  const toggleSortDropdown = () => setIsSortClicked((prev) => !prev);

  // Memoized sorting filter options
  const filteredFilters = useMemo(() => {
    const shouldRemoveDistance = !sortParam?.param?.postcode && !sortParam?.param?.distance_from_home;

    return Object.fromEntries(
      Object.entries(filters).map(([title, options]) => [
        title,
        shouldRemoveDistance
          ? Object.fromEntries(Object.entries(options).filter(([key]) => key !== "Distance from home"))
          : options,
      ])
    );
  }, [filters, sortParam]);

  const handleSort = (value: string) => {
    setSortValue(value);
    setIsFilterLoading(true);

    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);
    let sortUrl = `${currentUrl.origin}${currentUrl.pathname}?${urlParams.toString()}`;

    if (urlParams.size > 4) {
      const updatedFilterParams = {
        ...filterCookieParam,
        sort: value === "r" ? "" : value,
      };
      setNewCookie(`filter_param=${JSON.stringify(updatedFilterParams)}; path=/; secure`);
    } else {
      if (value && value !== "r") {
        urlParams.set("sort", value);
      } else {
        urlParams.delete("sort");
      }
      urlParams.delete(projectName === "Whatuni" ? "pageno" : "page_no");
      sortUrl = `${currentUrl.origin}${currentUrl.pathname}?${decodeURIComponent(urlParams.toString())}`;
    }

    router.push(sortUrl);

    // Ensure loading spinner hides after route change
    setTimeout(() => setIsFilterLoading(false), 2000); // Adjust delay if needed
  };

  const selectedSort = sortParam?.param?.sort || sortValue || filterCookieParam?.sort;

  // Optimized lookup for selected sort label
  const selectedSortLabel = useMemo(() => {
    for (const options of Object.values(filteredFilters)) {
      for (const [label, value] of Object.entries(options)) {
        if (value === selectedSort) return label;
      }
    }
    return "Recommended";
  }, [filteredFilters, selectedSort]);

  // Close dropdown when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsSortClicked(false);
    }
  }, []);

  useEffect(() => {
    setIsFilterLoading(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <>
      {isFilterLoading && <FilterSpinner />}
      <div className="ml-auto w-fit relative">
        <div
          ref={divRef}
          onClick={toggleSortDropdown}
          className="flex items-center gap-[4px] px-[4px] py-[16px] small text-grey300 cursor-pointer hover:underline"
        >
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 2.72217H10.8889M1.5 5.61106H8M1.5 8.49995H8M11.6111 5.61106V14.2777M11.6111 14.2777L8.72222 11.3888M11.6111 14.2777L14.5 11.3888"
              stroke="#333333"
              strokeWidth="1.335"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold">Sort:</span>
          <span>{selectedSortLabel}</span>
        </div>

        {isSortClicked && (
          <div
            className={`absolute top-[53px] right-[-1px] w-[345px] bg-white p-[24px] rounded-[8px] shadow-custom-3 z-10
             ${Object.keys(filteredFilters).length > 1 ? "md:w-[700px] lg:w-[940px]" : ""}`}
          >
            <div className="flex flex-col gap-[24px]">
              {Object.entries(filteredFilters).map(([title, options]) => (
                <div key={title} className="flex flex-col gap-[16px]">
                  <div className="text-heading6 font-farro font-bold">{title}</div>
                  <div
                    className={`${Object.keys(filteredFilters).length > 1
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]"
                      : "grid grid-cols-1 gap-[16px]"
                      }`}
                  >
                    <RadioFilterGroup
                      key={title}
                      title={title}
                      options={options}
                      selectedValue={selectedSort}
                      onSelect={handleSort}
                      name={title.replace(/\s+/g, "-").toLowerCase()}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SortingFilterGen;

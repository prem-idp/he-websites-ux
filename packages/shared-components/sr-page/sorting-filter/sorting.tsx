"use client";

import { setNewCookie } from "@packages/lib/utlils/commonFunction";
import {
  pgsSortingFilter,
  wuscaCategories,
  wuSortingFilter,
} from "@packages/shared-components/services/constants";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
interface SortingProps {
  sortParam?: any;
}

const FilterSpinner = dynamic(
  () =>
    import("@packages/shared-components/skeleton/search-result/filter-spinner"),
  { ssr: false }
);
const SortingFilter: React.FC<SortingProps> = ({ sortParam }) => {
  const router = useRouter();
  const filterCookieParam = sortParam?.filterCookieParam || {}
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [filterState, setFilterState] = useState({
    isFilterLoading: false,
  });
  const [sortValue, setSortValue] = useState(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const sortClicked = () => {
    setIsSortClicked(!isSortClicked);
  };
  const getFilteredSortingOptions = (sortingFilter: any) => 
    sortParam?.param?.postcode || sortParam?.param?.distance_from_home
      ? sortingFilter
      : Object.fromEntries(
          Object.entries(sortingFilter).filter(([key]) => key !== "Distance from home")
        );
  
  const wuSortingFilters = getFilteredSortingOptions(wuSortingFilter);
  const pgsSortingFilters = getFilteredSortingOptions(pgsSortingFilter);
  let sortUrl;
  const handleSort = (value: any, label: any) => {
    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);
    setSortValue(value)
    setFilterState((prev: any) => ({ ...prev, isFilterLoading: true }));
    sortUrl = `${currentUrl.origin}${currentUrl.pathname}?${urlParams.toString()}`;
    if (urlParams.size > 4) { // If Query params > 4
      const updatedFilterParams = {
        ...filterCookieParam,
        sort:  value && value === "r" ? "" : value
      };  
      setNewCookie(`filter_param=${JSON.stringify(updatedFilterParams)}; path=/; secure`);    
      sessionStorage.setItem("filter_param", JSON.stringify(updatedFilterParams))
    } else {
      if(value && value !== "r") {
      urlParams.set("sort", value && value === "r" ? "" : value);
      } else {
        urlParams.delete("sort")
      }
      urlParams.delete(process.env.PROJECT === "Whatuni" ? "pageno" : "page_no")
      sortUrl = `${currentUrl.origin}${currentUrl.pathname}?${decodeURIComponent(urlParams.toString())}`;
    }
    router.push(sortUrl)
  }
  const getKeyForValue = (value: string) => {
    const entry = Object.entries(sortingFilter).find(
      ([key, val]) => val === value
    );
    const wuscaentry = Object.entries(wuscaCategories).find(
      ([key, val]) => val === value
    );
    return entry ? entry[0] : wuscaentry ? wuscaentry[0] : "Recommendded";
  };
 
  const sortingFilter = process.env.PROJECT === "Whatuni" ? wuSortingFilters : pgsSortingFilters;
  // Handle outside click to close the div
  useEffect(() => {
    setFilterState((prev: any) => ({ ...prev, isFilterLoading: false }));
    const handleClickOutside = (event:any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsSortClicked(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [sortParam]);

  return (
    <>{filterState?.isFilterLoading && <FilterSpinner loadingFrom="sorting"/>}
    <div className="ml-auto w-fit relative">
      <div ref={divRef}
        onClick={sortClicked}
        className="flex items-center gap-[4px] px-[4px] py-[16px] small text-grey300 cursor-pointer hover:underline"
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 2.72217H10.8889M1.5 5.61106H8M1.5 8.49995H8M11.6111 5.61106V14.2777M11.6111 14.2777L8.72222 11.3888M11.6111 14.2777L14.5 11.3888"
            stroke="#333333"
            strokeWidth="1.335"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold">Sort:</span>
        <span>{getKeyForValue(sortParam?.param?.sort || filterCookieParam?.sort)}</span>
      </div>
      {isSortClicked && (
        <div className="absolute top-[53px] right-[-1px] w-[345px] bg-white p-[24px] rounded-[8px] shadow-custom-3 z-10 md:w-[700px] lg:w-[940px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-heading6 font-farro font-bold">Sort by</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {Object.entries(sortingFilter).map(([label, value]) => (
                <div
                  key={String(value)}
                  className="custom-radio"
                  onClick={() => handleSort(value, label)}
                >
                  <input
                    type="radio"
                    id={String(value)}
                    name="sort by"
                    checked={
                      value === sortParam?.param?.sort || value === sortValue || value === filterCookieParam?.sort
                        ? true
                        : value === "r" && !sortParam?.param?.sort && !filterCookieParam?.sort
                          ? true
                          : false
                    }
                  />
                  <label htmlFor={label} className="flex items-center">
                    {label}
                  </label>
                </div>
              ))}
            </div>
            {process.env.PROJECT === "Whatuni" && (
              <>
                <div className="font-semibold text-heading6 md:text-small">
                  Wusca categories
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                  {Object.entries(wuscaCategories).map(([label, value]) => (
                    
                    <div
                      key={String(value)}
                      className="custom-radio"
                      onClick={() => handleSort(value, label)}
                    >
                      <input
                        type="radio"
                        id={String(value)}
                        name="Wusca categories"
                        checked={
                          value === sortParam?.param?.sort || value === sortValue || value === filterCookieParam?.sort
                            ? true
                            : value === "r" && !sortParam?.param?.sort && !filterCookieParam?.sort
                              ? true
                              : false
                        }
                      />
                      <label htmlFor={label} className="flex items-center">
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SortingFilter;

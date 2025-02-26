"use client";

import { getCookieValue } from "@packages/lib/utlils/commonFunction";
import { getDecodedCookie } from "@packages/lib/utlils/result-filters";
import { pgsSortingFilter, wuscaCategories, wuSortingFilter } from "@packages/shared-components/services/constants";
import React, { useState } from "react";
interface SortingProps {
  sortParam?:any
}
const SortingFilter : React.FC<SortingProps> = ({sortParam}) => {
  const filterCookieParam = JSON.parse(getDecodedCookie("filter_param") || "{}");
  // sortParam = filterCookieParam?.sort ? filterCookieParam?.sort : sortParam ? sortParam : "R";
  const [isSortClicked, setIsSortClicked] = useState(false);
  const sortClicked = () => {
    setIsSortClicked(!isSortClicked);
  };

  const handleSort = (value: any) => {
    console.log("currenturl", sortParam?.currentPage)
    const sortUrl = sortParam?.currentPage && sortParam?.currentPage.includes("?")
      ? sortParam?.currentPage + "&sort=" + value 
      : "?sort=" + value;  
    
    window.location.href = sortUrl;
  };
  const sortingFilter = process.env.PROJECT === "Whatuni" 
  ? wuSortingFilter
  :  pgsSortingFilter
  
  return (
    <div className="ml-auto w-fit relative">
      <div
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
        <span> Recommended</span>
      </div>
      {isSortClicked && (
        <div className="absolute top-[53px] right-[-1px] w-[345px] bg-white p-[24px] rounded-[8px] shadow-custom-3 z-10 md:w-[700px] lg:w-[940px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-heading6 font-farro font-bold">Sort by</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            {Object.entries(sortingFilter).map(([label, value]) => (
                <div className="custom-radio flex items-center" onClick={()=> handleSort(value)}>
                  <input
                    className="rounded-md"
                    type="radio"
                    id={value}
                    name="featured"
                    checked = {value === sortParam?.sort ? true : value === "R" ? true : false}
                  />
                  <label htmlFor={label} className="flex items-center">
                    {label}
                  </label>
                </div>
              ))}
            </div>
            <div className="font-semibold text-heading6 md:text-small">
              Wusca categories{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {Object.entries(wuscaCategories).map(([label, value]) => (
                <div className="custom-radio flex items-center">
                  <input
                    className="rounded-md"
                    type="radio"
                    id={value}
                    name="featured"
                  />
                  <label htmlFor={label} className="flex items-center">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortingFilter;

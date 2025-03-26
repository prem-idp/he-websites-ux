"use client";
import React, { useState, useEffect } from "react";
import PgsSearch from "@packages/shared-components/common-utilities/searchBar/search-pod/pgs-search"
import emitter from "@packages/lib/eventEmitter/eventEmitter";
export default function HeaderPgsSearch({
  pgs_search_data
}: any) {

  const rightMenuAction = (actionType: string) => {
    emitter.emit("rightMenuActionclose", actionType);
  };


  return (
    <>
      <div className="bg-white absolute top-0 left-0 right-0 z-10">
        <div className="max-w-container w-full mx-auto flex flex-col px-[16px] pt-[8px] pb-[56px] md:pt-[16px] md:pb-[32px] xl:px-0">
          <button type="button" className="flex self-end relative">
            <svg
              aria-label="close-button"
              className="cursor-pointer"
              onClick={() => rightMenuAction("SEARCH")}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 29L29 3M3 3L29 29"
                stroke="#333F48"
                strokeWidth="2.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center lg:min-h-[150px] gap-y-[16px] mt-[16px]">
            <div className="w-full lg:max-w-[800px]">
              <PgsSearch pgs_search_data={pgs_search_data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";

import Courses from "./courses";
import Advice from "./advice";
import Universities from "./universities";
export default function Search({ rightMenuAction }: any) {
  // course tab click
  const [activeTab, setActiveTab] = useState("tab1");
  const searchTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  // course tab actions

  return (
    <>
      <div className="bg-white absolute top-0 left-0 right-0 z-10 lg:min-h-[222px]">
        <div className="max-w-container w-full mx-auto flex flex-col px-[16px] pt-[8px] pb-[56px] md:pt-[16px] md:pb-[32px]">
          <div className="flex justify-end relative">
            <svg
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
          </div>
          <div className="flex flex-col items-center justify-center gap-y-[16px] mt-[16px] md:mt-[-16px]">
            <ul className="flex items-center gap-[4px] cursor-pointer">
              <li
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500 ${
                  activeTab === "tab1"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => searchTabClick("tab1")}
              >
                Courses
              </li>
              <li
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500 ${
                  activeTab === "tab2"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => searchTabClick("tab2")}
              >
                Universities
              </li>
              <li
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500 ${
                  activeTab === "tab3"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => searchTabClick("tab3")}
              >
                Advice
              </li>
            </ul>
            <div className="w-full lg:max-w-[800px]">
              {activeTab === "tab1" && <Courses />}
              {activeTab === "tab2" && <Universities />}
              {activeTab === "tab3" && <Advice />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

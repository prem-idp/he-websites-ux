"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CourseTab from "../../search-input-pods/coursetab";
import UniversityTab from "../../search-input-pods/universitytab";
import AdviceTab from "../../search-input-pods/advicetab";
import { searchAjax } from "@packages/lib/api-payloads/payloads";
import { searchAjaxFecthFunction } from "@packages/lib/server-actions/server-action";
const SearchBox = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await searchAjaxFecthFunction(searchAjax);
      console.log("data", data);
    };
    fetchData();
  }, []);

  const searchTabClick = (tabName: string) => {
    setsearchFormHandle((preData) => ({ ...preData, activeTab: tabName }));
  };
  const [searchFormHandle, setsearchFormHandle] = useState({
    activeTab: "tab1",
    isCourseType: false,
    isSubjectClicked: false,
    isLocationClicked: false,
    isAdviceClicked: false,
    isUniversityClicked: false,
    courseType: { qualUrl: "degree", qualCode: "M", qualDesc: "Undergraduate" },
    university: "",
    subject: {},
    location: {},
    advice: "",
  });
  return (
    <div className="pb-[12px] md:px-[16px]">
      <div className="bg-white w-full rounded-none max-w-container mx-auto p-[16px] mt-0 min-h-[160px] relative z-3 md:shadow-custom-5 md:rounded-[32px] md:p-[24px] md:mt-[-82px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[16px]">
          <ul className="flex gap-[4px] justify-center md:justify-start">
            <li role="button">
              <button
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                  searchFormHandle?.activeTab === "tab1"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900 border border-neutral-900"
                }`}
                onClick={() => searchTabClick("tab1")}
              >
                Courses
              </button>
            </li>
            <li role="button">
              <button
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                  searchFormHandle?.activeTab === "tab2"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900 border border-neutral-900"
                }`}
                onClick={() => searchTabClick("tab2")}
              >
                Universities
              </button>
            </li>
            <li role="button">
              <button
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                  searchFormHandle?.activeTab === "tab3"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900 border border-neutral-900"
                }`}
                onClick={() => searchTabClick("tab3")}
              >
                Advice
              </button>
            </li>
          </ul>

          {searchFormHandle?.activeTab == "tab1" && (
            <Link
              href="#"
              className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66678 6.11111H12.3334M12.3334 13.8889V11.5556M10.0001 13.8889H10.0079M7.66678 13.8889H7.67456M7.66678 11.5556H7.67456M10.0001 11.5556H10.0079M12.3334 9.22222H12.3412M10.0001 9.22222H10.0079M7.66678 9.22222H7.67456M6.11122 17H13.889C14.7481 17 15.4446 16.3036 15.4446 15.4444V4.55556C15.4446 3.69645 14.7481 3 13.889 3H6.11122C5.25211 3 4.55566 3.69645 4.55566 4.55556V15.4444C4.55566 16.3036 5.25211 17 6.11122 17Z"
                  stroke="#4664DC"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Calculate your UCAS points
            </Link>
          )}
          {searchFormHandle?.activeTab == "tab2" && (
            <Link
              href="#"
              className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
            >
              Browse unis A-Z
              <Image
                src="/static/assets/icons/arrow-right.svg"
                width={20}
                height={20}
                alt="Right Arrow"
              />
            </Link>
          )}
          {searchFormHandle?.activeTab == "tab3" && (
            <Link
              href="#"
              className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
            >
              Browse advice
              <Image
                src="/static/assets/icons/arrow-right.svg"
                width={20}
                height={20}
                alt="Right Arrow"
              />
            </Link>
          )}

          <div className="row-start-2 md:col-span-2">
            {searchFormHandle?.activeTab === "tab1" && (
              <CourseTab
                searchFormHandle={searchFormHandle}
                setsearchFormHandle={setsearchFormHandle}
              />
            )}
            {searchFormHandle?.activeTab === "tab2" && (
              <UniversityTab
                searchFormHandle={searchFormHandle}
                setsearchFormHandle={setsearchFormHandle}
              />
            )}
            {searchFormHandle?.activeTab === "tab3" && (
              <AdviceTab
                searchFormHandle={searchFormHandle}
                setsearchFormHandle={setsearchFormHandle}
              />
            )}
          </div>
        </div>
        <div className="flex items-start justify-center gap-[8px] md:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 15.6H17V14.2C17 13.0402 16.0598 12.1 14.9 12.1C14.2311 12.1 13.6352 12.4128 13.2506 12.9M13.5 15.6H6.5M13.5 15.6V14.2C13.5 13.7407 13.4115 13.302 13.2506 12.9M6.5 15.6H3V14.2C3 13.0402 3.9402 12.1 5.1 12.1C5.76892 12.1 6.3648 12.4128 6.74937 12.9M6.5 15.6V14.2C6.5 13.7407 6.5885 13.302 6.74937 12.9M6.74937 12.9C7.26545 11.6107 8.52637 10.7 10 10.7C11.4736 10.7 12.7345 11.6107 13.2506 12.9M12.1 6.50002C12.1 7.65982 11.1598 8.60002 10 8.60002C8.8402 8.60002 7.9 7.65982 7.9 6.50002C7.9 5.34023 8.8402 4.40002 10 4.40002C11.1598 4.40002 12.1 5.34023 12.1 6.50002ZM16.3 8.60002C16.3 9.37322 15.6732 10 14.9 10C14.1268 10 13.5 9.37322 13.5 8.60002C13.5 7.82683 14.1268 7.20002 14.9 7.20002C15.6732 7.20002 16.3 7.82683 16.3 8.60002ZM6.5 8.60002C6.5 9.37322 5.8732 10 5.1 10C4.3268 10 3.7 9.37322 3.7 8.60002C3.7 7.82683 4.3268 7.20002 5.1 7.20002C5.8732 7.20002 6.5 7.82683 6.5 8.60002Z"
              stroke="#333333"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="x-small">
            More than
            <span className="font-semibold"> 5 million people </span> come to
            Whatuni each year for their university research
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

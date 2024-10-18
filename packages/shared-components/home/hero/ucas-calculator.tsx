"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CourseTab from "./coursetab";
import UniversityTab from "./universitytab";
import AdviceTab from "./advicetab";
const UcasCalculator = () => {
  const searchTabClick = (tabName: string) => {
    setucasFormHandle((preData) => ({ ...preData, activeTab: tabName }));
  };
  const [ucasFormHandle, setucasFormHandle] = useState({
    activeTab: "tab1",
    isCourseType: false,
    isSubjectClicked: false,
    isLocationClicked: false,
    isAdviceClicked: false,
    isUniversityClicked: false,
    courseType: "Undergraduate",
    university: "",
    subject: "",
    location: "",
    advice: "",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[16px]">
      <ul className="flex gap-[4px] justify-center md:justify-start">
        <li role="button">
          <button
            className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
              ucasFormHandle?.activeTab === "tab1"
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
              ucasFormHandle?.activeTab === "tab2"
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
              ucasFormHandle?.activeTab === "tab3"
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-900 border border-neutral-900"
            }`}
            onClick={() => searchTabClick("tab3")}
          >
            Advice
          </button>
        </li>
      </ul>

      {ucasFormHandle?.activeTab == "tab1" && (
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
      {ucasFormHandle?.activeTab == "tab2" && (
        <Link
          href="#"
          className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
        >
          Browse unis A-Z
          <Image
            src="/assets/icons/arrow-right.svg"
            width={20}
            height={20}
            alt="Right Arrow"
          />
        </Link>
      )}
      {ucasFormHandle?.activeTab == "tab3" && (
        <Link
          href="#"
          className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
        >
          Browse advice
          <Image
            src="/assets/icons/arrow-right.svg"
            width={20}
            height={20}
            alt="Right Arrow"
          />
        </Link>
      )}

      <div className="row-start-2 md:col-span-2">
        {ucasFormHandle?.activeTab === "tab1" && (
          <CourseTab
            ucasFormHandle={ucasFormHandle}
            setucasFormHandle={setucasFormHandle}
          />
        )}
        {ucasFormHandle?.activeTab === "tab2" && (
          <UniversityTab
            ucasFormHandle={ucasFormHandle}
            setucasFormHandle={setucasFormHandle}
          />
        )}
        {ucasFormHandle?.activeTab === "tab3" && (
          <AdviceTab
            ucasFormHandle={ucasFormHandle}
            setucasFormHandle={setucasFormHandle}
          />
        )}
      </div>
    </div>
  );
};

export default UcasCalculator;

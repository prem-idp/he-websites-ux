"use client";
import React from "react";
import Link from "next/link";
import SubjectCheckBox from "./subjectcheckBox";
const L2subjectList = ({
  selectedSubject,
  isIndexed,
  isSubjectOpen,
  subjectClicked,
  formUrl,
  appendSearchParams,
  containsSearchParam,
  slug,
}: any) => {
  console.log("sliging", slug);
  return (
    <div
      className={`flex flex-col gap-[16px] ${isSubjectOpen ? "" : "hidden"}`}
    >
      <ul className="flex flex-wrap gap-[8px] uppercase">
        <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
          Business Law
        </li>
        <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
          Educational Law
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L12 4M4 4L12 12"
              stroke="#3460DC"
              strokeWidth="1.13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[4px]  font-semibold x-small flex items-center gap-[2px]">
          <Link href="/" aria-label="Back Arrow">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11L6 8L9 5"
                stroke="#3460DC"
                strokeWidth="1.13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <div className="flex flex-col gap-[12px]">
        <div
          onClick={() => {
            subjectClicked("");
          }}
          className="flex items-center gap-[4px] text-blue-400 font-semibold cursor-pointer"
        >
          <svg
            className="rotate-180"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
              fill="#4664DC"
            />
          </svg>
          Choose a different subject
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="small font-bold">
            {selectedSubject?.ParentSubject}
          </div>
          {selectedSubject?.SubjectList && (
            <div className="flex flex-col gap-[12px]">
              {selectedSubject?.SubjectList?.map((item: any, index: any) => (
                <div className="form_check relative" key={index + 1}>
                  <SubjectCheckBox
                    item={item}
                    formUrl={formUrl}
                    isIndexed={isIndexed}
                    appendSearchParams={appendSearchParams}
                    state={containsSearchParam("subject", item?.subjectTextKey)}
                    slug={slug}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default L2subjectList;

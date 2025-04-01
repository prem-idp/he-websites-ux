"use client";
import React, { useState, useMemo } from "react";
import SubjectCheckBox from "./subjectcheckBox";
import { KeyNames } from "@packages/lib/utlils/filters/filterJson";
import { useSearchParams } from "next/navigation";
import { extractUrlAndSessionValues } from "@packages/lib/utlils/filters/result-filters";
const L2subjectList = React.memo(
  ({
    selectedSubject,
    isIndexed,
    isSubjectOpen,
    subjectClicked,
    formUrl,
    appendSearchParams,
    slug,
    subjectsArray,
    prepopulateFilter,
  }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const searchParams = useSearchParams();
    const keyName = KeyNames();

    const subjectsSelected = useMemo(
      () =>
        extractUrlAndSessionValues(searchParams, "", "")?.[
          keyName?.subject
        ]?.split("+"),
      [searchParams, keyName?.subject]
    );

    const subjectLabels = useMemo(() => {
      if (!subjectsSelected || !subjectsArray?.subjects) return [];

      return subjectsSelected
        .map((subjectParam) =>
          subjectsArray.subjects.find(
            (subject: any) => subject.subjectTextKey === subjectParam
          )
        )
        .filter(Boolean);
    }, [subjectsSelected, subjectsArray?.subjects]);

    const visibleItems = isExpanded
      ? subjectLabels
      : subjectLabels?.slice(0, 4);
    return (
      <div
        className={`flex flex-col gap-[16px] ${isSubjectOpen && selectedSubject?.parentSubject == subjectsArray?.parent ? "" : "hidden"}`}
      >
        {subjectLabels?.length > 0 && (
          <ul className="flex flex-wrap gap-[8px] uppercase">
            {/* <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              {subjectLable[0]?.categoryDesc}
            </li> */}
            {visibleItems?.length > 0 && (
              <>
                {visibleItems?.map((subjectNames: any, index: number) => (
                  <li
                    key={index + 1}
                    className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]"
                  >
                    {subjectNames?.categoryDesc}
                    {visibleItems?.length > 1 && (
                      <svg
                        onClick={() => {
                          appendSearchParams(
                            keyName?.subject,
                            subjectNames?.subjectTextKey
                          );
                          // subjectLabels.filter(
                          //   (item) => item !== subjectNames?.subjectTextKey
                          // );
                        }}
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
                    )}
                  </li>
                ))}
              </>
            )}
            {visibleItems?.length > 3 && (
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[4px]  font-semibold x-small flex items-center gap-[2px]">
                <div aria-label="Back Arrow">
                  <svg
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
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
                </div>
              </li>
            )}
          </ul>
        )}
        <div className="flex flex-col gap-[12px]">
          <div
            onClick={() => {
              subjectClicked("", false);
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
              {selectedSubject?.parentSubject}
            </div>
            <div className="flex flex-col gap-[12px]">
              {subjectsArray?.subjects?.map((item: any, index: any) => (
                <SubjectCheckBox
                  key={index + 1}
                  item={item}
                  formUrl={formUrl}
                  isIndexed={isIndexed}
                  appendSearchParams={appendSearchParams}
                  slug={slug}
                  parent={selectedSubject?.parentSubject}
                  prepopulateFilter={prepopulateFilter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default L2subjectList;

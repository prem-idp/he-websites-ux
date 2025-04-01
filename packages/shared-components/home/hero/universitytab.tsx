"use client";
import React from "react";
import Image from "next/image";
import { UcasFormHandle } from "@packages/lib/types/interfaces";

interface UniversityTabProps {
  ucasFormHandle: UcasFormHandle;
  setucasFormHandle: React.Dispatch<React.SetStateAction<UcasFormHandle>>;
}
const UniversityTab: React.FC<UniversityTabProps> = ({
  ucasFormHandle,
  setucasFormHandle,
}) => {
  const resetAllTabs = (currentTab: string) => ({
    isUniversityClicked:
      currentTab === "University"
        ? !ucasFormHandle?.isUniversityClicked
        : false,
  });

  const courseActions = (tabName: string) => {
    setucasFormHandle((prevData: UcasFormHandle) => ({
      ...prevData,
      ...resetAllTabs(tabName),
    }));
  };
  const handleSearch = () => {
    console.log(ucasFormHandle);
  };
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:pl-[24px] lg:p-[8px]">
        <div className="flex flex-col gap-x-[10px] justify-between relative lg:flex-row">
          <div className="grow">
            <input
              onClick={() => courseActions("University")}
              type="text"
              className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 lg:py-[10px] border-b border-neutral-400 lg:border-none"
              aria-label=""
              placeholder="University name"
              onChange={(event) =>
                setucasFormHandle((preData) => ({
                  ...preData,
                  university: event.target.value,
                }))
              }
              value={ucasFormHandle?.university}
            />
          </div>
          <div className="pt-[16px] md:pt-[0]">
            <button
              onClick={handleSearch}
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
            >
              <Image
                src="/static/assets/icons/search_icon.svg"
                width="18"
                height="18"
                alt="Search icon"
              />
              Search
            </button>
          </div>
          {ucasFormHandle?.isUniversityClicked &&
            ucasFormHandle?.university.length > 2 && (
              <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[53px] overflow-hidden">
                <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                  UNIVERSITIES
                </div>
                <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                  {[
                    "Undergraduate",
                    "HND / HNC",
                    "Foundation degree",
                    "Access & foundation",
                    "Postgraduate",
                  ].map((item, index) => (
                    <li
                      onClick={() =>
                        setucasFormHandle((prevData) => ({
                          ...prevData,
                          university: item,
                          isUniversityClicked: false,
                        }))
                      }
                      key={index}
                      className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default UniversityTab;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import { useState, useEffect } from "react";
import { searchAjaxFecthFunction } from "@packages/lib/server-actions/server-action";
interface UniversityTabProps {
  searchFormHandle: any;
  setsearchFormHandle: any;
}
const UniversityTab: React.FC<UniversityTabProps> = ({
  searchFormHandle,
  setsearchFormHandle,
}) => {
  const [universityList, setUniversityList] = useState<string[]>([]);
  useEffect(() => {
    const body = {
      affiliateId: 220703,
      actionType: "institution",
      keyword: `${searchFormHandle.university}`,
      qualCode: "M",
      networkId: 2,
    };
    const fetchSubject = async () => {
      const data = await searchAjaxFecthFunction(body);
      if (data) {
        setUniversityList(data);
      }
    };
    console.log(universityList);
    if (searchFormHandle.university.length > 2) {
      fetchSubject();
    }
    // else{
    //   setSubjectlist([])
    // }
  }, [searchFormHandle.university]);

  const resetAllTabs = (currentTab: string) => ({
    isUniversityClicked:
      currentTab === "University"
        ? !searchFormHandle?.isUniversityClicked
        : false,
  });

  const courseActions = (tabName: string) => {
    setsearchFormHandle((prevData: SearchFormHandle) => ({
      ...prevData,
      ...resetAllTabs(tabName),
    }));
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
                setsearchFormHandle((preData: any) => ({
                  ...preData,
                  university: event.target.value,
                }))
              }
              value={searchFormHandle?.university}
            />
          </div>
          <div className="pt-[16px] md:pt-[0]">
            <button className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]">
              <Image
                src="/static/assets/icons/search_icon.svg"
                width="18"
                height="18"
                alt="Search icon"
              />
              Search
            </button>
          </div>
          {searchFormHandle?.isUniversityClicked &&
            searchFormHandle?.university.length > 2 && (
              <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[53px] overflow-hidden">
                <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                  {universityList?.map((item: any, index: any) => (
                    <Link
                      href={`/university-profile/${item.college_name_display}/${item.college_id}`}
                      onClick={() =>
                        setsearchFormHandle((prevData: any) => ({
                          ...prevData,
                          university: item.college_name_display,
                          isUniversityClicked: false,
                        }))
                      }
                      key={index}
                      className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      {item.college_name_display}
                    </Link>
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

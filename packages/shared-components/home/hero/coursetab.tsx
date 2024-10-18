import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UcasFormHandle } from "@packages/lib/types/interfaces";
interface CourseTabProps {
  ucasFormHandle: UcasFormHandle;
  setucasFormHandle: React.Dispatch<React.SetStateAction<UcasFormHandle>>;
}
const CourseTab: React.FC<CourseTabProps> = ({
  ucasFormHandle,
  setucasFormHandle,
}) => {
  const resetAllTabs = (currentTab: string) => ({
    isCourseType: currentTab === "UG" ? !ucasFormHandle?.isCourseType : false,
    isSubjectClicked:
      currentTab === "Subject" ? !ucasFormHandle?.isSubjectClicked : false,
    isLocationClicked:
      currentTab === "Location" ? !ucasFormHandle?.isLocationClicked : false,
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
      <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:pr-[10px] md:py-[7px]">
        <div className="flex flex-col items-stretch md:flex-row md:items-center">
          <div className="relative mb-[24px] md:mb-[0]">
            <button
              onClick={() => courseActions("UG")}
              className="flex items-center justify-between gap-[4px] mr-0 w-full small text-black md:w-[124px] md:mr-[16px]"
              type="button"
            >
              {ucasFormHandle?.courseType}
              <Image
                src="/assets/icons/arrow_down_black.svg"
                width="20"
                height="20"
                alt="Search icon"
              />
            </button>
            {ucasFormHandle?.isCourseType && (
              <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[40px] overflow-hidden lg:w-[230px]">
                <ul>
                  {[
                    "Undergraduate",
                    "HND / HNC",
                    "Foundation degree",
                    "Access & foundation",
                    "Postgraduate",
                  ].map((item, index) => (
                    <li
                      onClick={() =>
                        setucasFormHandle((prevData: UcasFormHandle) => ({
                          ...prevData,
                          courseType: item,
                          isCourseType: !ucasFormHandle?.isCourseType,
                        }))
                      }
                      className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="w-full relative border-y-[1px] border-neutral200 grow md:border-l md:border-y-0">
            <div className="flex items-center w-full my-[12px] md:my-[0]">
              <input
                value={ucasFormHandle?.subject}
                // onClick={() => courseActions("Subject")}
                onClick={() =>
                  setucasFormHandle((prevData: UcasFormHandle) => ({
                    ...prevData,
                    isSubjectClicked: !ucasFormHandle?.isSubjectClicked,
                  }))
                }
                type="text"
                className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                aria-label=""
                placeholder="Enter subject"
                onChange={(event) =>
                  setucasFormHandle((prevData: UcasFormHandle) => ({
                    ...prevData,
                    subject: event.target.value,
                  }))
                }
              />
            </div>
            {ucasFormHandle?.subject.length > 2 &&
              ucasFormHandle?.isSubjectClicked && (
                <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] max-h-[311px] overflow-y-scroll custom-vertical-scrollbar overflow-hidden">
                  <Link href="">
                    <div className="px-[16px] py-[12px]">
                      <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                        KEYWORD SEARCH FOR
                      </p>
                      <p className="small text-primary-400">Law</p>
                    </div>
                  </Link>
                  <ul>
                    {[
                      "Law",
                      "Law / Legal Studies",
                      "Law (Specific Statutes)",
                      "Asian Law",
                      "Civil Law",
                      "Family Law",
                    ].map((item, index) => (
                      <li
                        onClick={() =>
                          setucasFormHandle((prevData: UcasFormHandle) => ({
                            ...prevData,
                            subject: item,
                            isSubjectClicked: !ucasFormHandle?.isSubjectClicked,
                          }))
                        }
                        key={index}
                        className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
          <div
            className="w-full relative grow md:border-l border-neutral200"
            onClick={() => courseActions("Location")}
          >
            <div className="flex items-center w-full my-[12px] md:my-[0] border-l-0 lg:border-l border-neutral-200">
              <input
                type="text"
                className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                aria-label=""
                placeholder="Location (optional)"
                value={ucasFormHandle?.location}
                onChange={(event) =>
                  setucasFormHandle((prevData: UcasFormHandle) => ({
                    ...prevData,
                    location: event.target.value,
                  }))
                }
              />
            </div>
            {ucasFormHandle?.isLocationClicked && (
              <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] overflow-hidden">
                <ul>
                  {[
                    "United States",
                    "Australia",
                    "Australia",
                    "Canada",
                    "Germany",
                    "Japan",
                  ].map((item, index) => (
                    <li
                      onClick={() =>
                        setucasFormHandle((prevData: UcasFormHandle) => ({
                          ...prevData,
                          location: item,
                        }))
                      }
                      key={index}
                      className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="pt-[2px] md:pt-[0]">
            <button
              onClick={handleSearch}
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[138px]"
            >
              <Image
                src="/assets/icons/search_icon.svg"
                width="18"
                height="18"
                alt="Search icon"
              />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTab;

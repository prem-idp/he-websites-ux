"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import Form from "next/form";
import { useState, useEffect } from "react";
import { searchAjaxFecthFunction } from "@packages/lib/server-actions/server-action";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
interface CourseTabProps {
  searchFormHandle: any;
  setsearchFormHandle: any;
}

const CourseTab: React.FC<CourseTabProps> = ({
  searchFormHandle,
  setsearchFormHandle,
}) => {
  const [subjectList, setSubjectlist] = useState<string[]>([]);
  const [locandstudymode, setLocandstudymode] = useState<any>({});
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const body = {
      affiliateId: 220703,
      actionType: "default",
      keyword: "",
      qualCode: "M",
      networkId: 2,
    };
    const fetchLocationandstudymode = async () => {
      const data = await searchAjaxFecthFunction(body);
      if (data) {
        setLocandstudymode(data);
      }
    };
    fetchLocationandstudymode();
  }, []);

  useEffect(() => {
    if (
      !searchFormHandle?.subject?.description ||
      searchFormHandle.subject.description.length < 3
    ) {
      setSubjectlist([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      const body = {
        affiliateId: 220703,
        actionType: "subject",
        keyword: `${searchFormHandle.subject.description}`,
        qualCode: `${searchFormHandle.courseType.qualCode}`,
        networkId: 2,
      };
      const fetchSubject = async () => {
        try {
          const data = await searchAjaxFecthFunction(body);
          if (data?.courseDetails?.length > 0) {
            setSubjectlist(data.courseDetails);
          } else {
            setSubjectlist([]);
          }
        } catch (error) {
          console.error("Error fetching subjects:", error);
        }
      };
      fetchSubject();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchFormHandle.subject.description]);

  const resetAllTabs = (currentTab: string) => ({
    isCourseType: currentTab === "UG" ? !searchFormHandle?.isCourseType : false,
    isSubjectClicked:
      currentTab === "Subject" ? !searchFormHandle?.isSubjectClicked : false,
    isLocationClicked:
      currentTab === "Location" ? !searchFormHandle?.isLocationClicked : false,
  });

  const courseActions = (tabName: string) => {
    setsearchFormHandle((prevData: SearchFormHandle) => ({
      ...prevData,
      ...resetAllTabs(tabName),
    }));
  };

  function searchHandler() {
    // Check if both location and subject URLs are present
    if (
      searchFormHandle.location.regionName?.trim() && // Check if regionName exists and is not just whitespace
      searchFormHandle.subject.url
    ) {
      console.log("inside the both");
      console.log(searchFormHandle.location.regionName, "location");
      router.push(
        `${searchFormHandle.subject.url}&location=${searchFormHandle.location.regionName}`
      );
    } else if (searchFormHandle.subject.url) {
      console.log("inside the if else");
      // Only the subject URL is present
      router.push(`${searchFormHandle.subject.url}`);
    } else {
      console.log("please enter the subject");
    }
  }

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:pr-[10px] md:py-[7px]">
        <Form
          action={searchHandler}
          className="flex flex-col items-stretch md:flex-row md:items-center"
        >
          <div className="relative mb-[24px] md:mb-[0]">
            <button
              onClick={() => {
                courseActions("UG");
                setDropdown(false);
              }}
              className="flex items-center justify-between gap-[4px] mr-0 w-full small text-black md:w-[124px] md:mr-[16px]"
              type="button"
            >
              {searchFormHandle?.courseType.qualDesc}
              <Image
                src="/static/assets/icons/arrow_down_black.svg"
                width="20"
                height="20"
                alt="Search icon"
              />
            </button>
            {searchFormHandle?.isCourseType && (
              <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[40px] overflow-hidden lg:w-[230px]">
                <ul>
                  {locandstudymode?.studyLevelList?.map(
                    (item: any, index: any) => (
                      <li
                        onClick={() => {
                          setsearchFormHandle((prevData: SearchFormHandle) => ({
                            ...prevData,
                            courseType: item, // Update state with the selected course type
                          }));
                          courseActions("UG"); // Call your additional function
                        }}
                        className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                        key={index}
                      >
                        {item.qualDesc}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="w-full relative border-y-[1px] border-neutral200 grow md:border-l md:border-y-0">
            <div className="flex items-center w-full my-[12px] md:my-[0]">
              <input
                value={searchFormHandle.subject.description || ""}
                type="text"
                className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                aria-label=""
                placeholder="Enter subject"
                onChange={(event) => {
                  setsearchFormHandle((prevData: any) => ({
                    ...prevData,
                    subject: {
                      ...prevData.subject,
                      url: null,
                      parent_subject: null,
                      category_code: null,
                      browse_cat_id: "KW", // Retaining other properties of subject
                      description: event.target.value, // Setting the description value
                    },
                  }));
                  setDropdown(true);
                }}
                onClick={() => {
                  courseActions("Subject");
                  setDropdown((prev) => !prev);
                }}
              />
            </div>
            {subjectList?.length >= 0 && dropdown && (
              <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] max-h-[311px] overflow-y-scroll custom-vertical-scrollbar overflow-hidden">
                <ul>
                  {/* Hardcode the item at index 0 */}
                  {subjectList[0] && (
                    <li
                      onClick={() => {
                        setsearchFormHandle((prevData: SearchFormHandle) => ({
                          ...prevData,
                          subject: subjectList[0],
                          isSubjectClicked: !searchFormHandle?.isSubjectClicked,
                        }));
                        setDropdown(false);
                      }}
                      className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      <Link
                        href={`/degree-courses/search?q=${searchFormHandle.subject.description}`}
                      >
                        <p> Key word seach for</p>
                        {searchFormHandle.subject.description}
                      </Link>
                    </li>
                  )}

                  {/* Map through the rest of the items starting from index 1 */}
                  {subjectList.slice(1)?.map((item: any, index: any) => (
                    <li
                      onClick={() => {
                        setsearchFormHandle((prevData: SearchFormHandle) => ({
                          ...prevData,
                          subject: item,
                          isSubjectClicked: !searchFormHandle?.isSubjectClicked,
                        }));
                        // setSubjectlist([]);
                        setDropdown(false);
                      }}
                      key={index + 1} // Increment index to keep the key unique
                      className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className="w-full relative grow md:border-l border-neutral200"
            onClick={() => {
              courseActions("Location");
              setDropdown(false);
            }}
          >
            <div className="flex items-center w-full my-[12px] md:my-[0] border-l-0 lg:border-l border-neutral-200">
              <input
                type="text"
                className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                aria-label=""
                placeholder="Location (optional)"
                value={searchFormHandle?.location.regionName || ""}
                onChange={(event) =>
                  setsearchFormHandle((prevData: SearchFormHandle) => ({
                    ...prevData,
                    location: event.target.value,
                  }))
                }
                readOnly
              />
            </div>
            {searchFormHandle?.isLocationClicked && (
              <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] overflow-hidden">
                <ul>
                  {locandstudymode?.locationList?.map(
                    (item: any, index: any) => (
                      <li
                        onClick={() => {
                          setsearchFormHandle((prevData: SearchFormHandle) => ({
                            ...prevData,
                            location: item, // Update state with the selected course type
                          }));
                          courseActions("Location"); // Call your additional function
                        }}
                        key={index}
                        className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                      >
                        {item.regionName}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="pt-[2px] md:pt-[0]">
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[138px]"
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
        </Form>
      </div>
    </div>
  );
};

export default CourseTab;

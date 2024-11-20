"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import Form from "next/form";
import { useState, useEffect, useCallback } from "react";
import { searchAjaxFecthFunction } from "@packages/lib/server-actions/server-action";
import { useRouter } from "next/navigation";

interface CourseTabProps {
  searchFormHandle: any;
  setsearchFormHandle: any;
  data: any;
}

const CourseTab: React.FC<CourseTabProps> = ({
  searchFormHandle,
  setsearchFormHandle,
  data,
}) => {
  // console.log(data, "getting data as props");
  const [subjectlist, setSubjectlist] = useState(data?.courseDetails);
  const [locationlist, setLocationlist] = useState(data?.locationList);
  const [studymodelist, setStudymodelist] = useState(data?.studyLevelList);
  const [filteredsubject, setFilteredsubject] = useState<
    { [key: string]: any; description: string }[] | undefined
  >(undefined);
  const [subjecterror, setSubjecterror] = useState(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();

  // ========================================intial fetch if empty=====================================================================================
  // useEffect(() => {
  //   console.log("inside the use effect");
  //   const body = {
  //     affiliateId: 220703,
  //     actionType: "subject",
  //     keyword: "",
  //     qualCode: "",
  //     networkId: 2,
  //   };
  //   if (Object.keys(data).length === 0) {
  //     console.log(
  //       Object.keys(data).length,
  //       "inside the if the data props is empty"
  //     );
  //     const fetchLocationandstudymode = async () => {
  //       console.log("inside the fetch function");
  //       const fetchdata = await searchAjaxFecthFunction(body);
  //       if (fetchdata) {
  //         console.log(fetchdata, "fetched data inside the useefect");
  //         setLocationlist(fetchdata?.locationList);
  //         setSubjectlist(fetchdata?.courseDetails);
  //         setStudymodelist(fetchdata?.studyLevelList);
  //       }
  //     };
  //     console.log(studymodelist, locationlist, subjectlist);
  //     fetchLocationandstudymode();
  //   }
  // }, []);
  // ====================================================================================================================================
  // ========================================fliterstate change when description change============================================================================================

  useEffect(() => {
    const { description } = searchFormHandle.subject || {};
    const { qualCode } = searchFormHandle.courseType || {};
    // console.log(description, qualCode);
    // Early return if description is invalid or too short
    if (!description || description.length < 3) {
      setFilteredsubject([]);
      return;
    }

    // Filter subjects first
    const filteredSubjects = subjectlist?.filter(
      (subjects: any) =>
        subjects?.description
          ?.toLowerCase()
          .includes(description.toLowerCase()) &&
        subjects?.qual_Code === qualCode
    );
    // console.log(filteredSubjects, "filterd subjects");
    // Priority search function to sort filtered results based on search text position
    const prioritySearch = (
      list: { description: string; [key: string]: any }[],
      searchText: string
    ): { description: string; [key: string]: any }[] => {
      if (!searchText) return list;

      const searchLower = searchText.toLowerCase();

      return list
        ?.map((item) => ({
          ...item,
          position: item.description.toLowerCase().indexOf(searchLower),
          startsWithSearch: item.description
            .toLowerCase()
            .startsWith(searchLower),
          exactMatch: item.description.toLowerCase() === searchLower,
        }))
        .filter((item) => item.position !== -1) // Only include items with searchText
        .sort((a, b) => {
          if (a.exactMatch !== b.exactMatch) return a.exactMatch ? -1 : 1;
          if (a.startsWithSearch !== b.startsWithSearch)
            return a.startsWithSearch ? -1 : 1;
          if (a.position !== b.position) return a.position - b.position;
          return a.description.localeCompare(b.description);
        })
        ?.map((item: any) => ({
          description: item.description,
          url: item.url,
          category_code: item.category_code,
          browse_cat_id: item.browse_cat_id,
          parent_subject: item.parent_subject,
          qual_Code: item.qual_Code,
        }));
    };

    // const sortedResults = prioritySearch(filteredSubjects, description);
    setFilteredsubject(prioritySearch(filteredSubjects, description));
    // console.log(filteredsubject, "filterdsubject ");
  }, [
    searchFormHandle.subject.description,
    searchFormHandle.courseType.qualCode,
  ]);

  // ================================================================================================================================================

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

  const searchHandler = () => {
    // console.log(
    //   searchFormHandle.subject.url,
    //   searchFormHandle.subject.description,
    //   searchFormHandle.location.regionName
    // );
    if (
      searchFormHandle.location.regionName &&
      !searchFormHandle.subject.url &&
      !searchFormHandle?.subject?.description?.trim()
    ) {
      // console.log("please enter the subject");
      setSubjecterror(true);
    }
    if (!searchFormHandle?.subject?.description?.trim()) {
      // console.log("please enter the subject");
      setSubjecterror(true);
    }
    if (
      searchFormHandle.location?.regionName &&
      searchFormHandle.subject?.url
    ) {
      router.push(
        `${searchFormHandle.subject.url}&location=${searchFormHandle.location.regionName}`
      );
    } else if (searchFormHandle.subject?.url) {
      router.push(searchFormHandle.subject.url);
    } else if (searchFormHandle?.subject?.description?.trim()) {
      keywordSearch();
    }
  };
  const keywordSearch = () => {
    const searchUrlMap: Record<string, string> = {
      M: "/degree-courses/search",
      N: "/hnd-hnc-courses/search",
      T: "/access-foundation-courses/search",
      A: "/foundation-degree-courses/search",
      L: "/postgraduate-courses/search",
    };

    const baseUrl = searchUrlMap[searchFormHandle.courseType.qualCode];
    if (baseUrl) {
      const sanitizedDescription = searchFormHandle.subject.description
        .trim() // Remove spaces from front and back
        .replace(/\s+/g, "-"); // Replace spaces in between with hyphens

      router.push(`${baseUrl}?q=${sanitizedDescription}`);
    }
  };

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
                  {studymodelist?.map((item: any, index: any) => (
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
                  ))}
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
                      description: event.target.value.trimStart(), // Setting the description value
                    },
                  }));
                  setDropdown(true);
                  setSubjecterror(false);
                }}
                onClick={() => {
                  courseActions("Subject");
                  setDropdown((prev) => !prev);
                }}
              />
            </div>
            {dropdown && (
              <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] max-h-[311px] overflow-y-scroll custom-vertical-scrollbar overflow-hidden">
                <ul>
                  {/* Hardcode the item at index 0 */}
                  {searchFormHandle?.subject?.description?.length > 2 && (
                    <ul
                      onClick={() => {
                        setsearchFormHandle((prevData: SearchFormHandle) => ({
                          ...prevData,
                          subject: subjectlist[0],
                          isSubjectClicked: !searchFormHandle?.isSubjectClicked,
                        }));
                        setDropdown(false);
                      }}
                      className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      <li
                        onClick={() => keywordSearch()}
                        // href={`${searchFormHandle.courseType.qualCode == "M" ? "/degree-courses/search?q=" : searchFormHandle.courseType.qualCode == "N" ? "/hnd-hnc-courses/search?q=" : searchFormHandle.courseType.qualCode == "T" ? "/access-foundation-courses/search?q=" : ""}${searchFormHandle.subject.description}`}
                      >
                        <p> Key word seach for</p>
                        {searchFormHandle.subject.description}
                      </li>
                    </ul>
                  )}

                  {/* Map through the rest of the items starting from index 1 */}
                  {filteredsubject?.map((item: any, index: any) => (
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
                  {locationlist?.map((item: any, index: any) => (
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
                  ))}
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
      {subjecterror && <p> Please enter subject</p>}
    </div>
  );
};

export default CourseTab;

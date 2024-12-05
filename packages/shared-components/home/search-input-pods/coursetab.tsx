"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import Form from "next/form";
import { useState, useEffect, useCallback, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  // console.log(data.courseDetails, "getting data as props");
  const [subjectlist, setSubjectlist] = useState(data?.courseDetails);
  const [locationlist, setLocationlist] = useState(data?.locationList);
  const [studymodelist, setStudymodelist] = useState(data?.studyLevelList);
  const [filteredsubject, setFilteredsubject] = useState<
    { [key: string]: any; description: string }[] | undefined
  >(undefined);
  const [subjecterror, setSubjecterror] = useState(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        courseActions("UG");
        courseActions("Subject");
        // courseActions("Location");
        setDropdown(false);

        // console.log("click outside");
      }
    };
    // Delay adding listener to avoid immediate triggering

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const { description } = searchFormHandle.subject || {};
    // console.log(description);
    const { qualCode } = searchFormHandle.courseType || {};
    // console.log(description, qualCode, "qualcode,descrption");
    // Early return if description is invalid or too short
    if (!description?.trim() || description?.trim().length < 3) {
      setFilteredsubject([]);
      return;
    }

    // Filter subjects first
    const filteredSubjects = subjectlist?.filter(
      (subjects: any) =>
        subjects?.description
          ?.toLowerCase()
          .includes(description?.trim().toLowerCase()) &&
        subjects?.qualCode === qualCode
    );
    // console.log(filteredSubjects);
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
    setFilteredsubject(prioritySearch(filteredSubjects, description?.trim()));
    // console.log(
    //   prioritySearch(filteredSubjects, description),
    //   "filterdsubject "
    // );
  }, [
    searchFormHandle.subject.description,
    searchFormHandle.courseType.qualCode,
  ]);

  // ================================================================================================================================================
  useEffect(() => {
    setsearchFormHandle((prevData: any) => ({
      ...prevData,
      subject: {
        ...prevData.subject,
        url: null,
        parent_subject: null,
        category_code: null,
        browse_cat_id: "KW", // Retaining other properties of subject
        description: "", // Setting the description value
      },
    }));
  }, [searchFormHandle.courseType.qualCode]);
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
    if (
      searchFormHandle.location.regionName &&
      !searchFormHandle.subject.url &&
      !searchFormHandle?.subject?.description?.trim()
    ) {
      setSubjecterror(true);
    }
    if (!searchFormHandle?.subject?.description?.trim()) {
      setSubjecterror(true);
    }
    if (
      searchFormHandle.location?.regionName &&
      searchFormHandle.subject?.url
    ) {
      const sanitizedRegionName = searchFormHandle.location.regionName
        .trim() // Remove spaces from the front and back
        .replace(/[^a-zA-Z0-9\s]+/g, "-") // Replace one or more special characters with a hyphen
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
        .replace(/^-|-$/g, "") // Remove hyphens from the start and end
        .toLowerCase(); // Convert the entire string to lowercase

      router.push(
        `${searchFormHandle.subject.url}&location=${sanitizedRegionName}`
      );
    } else if (searchFormHandle.subject?.url) {
      router.push(searchFormHandle.subject.url);
    } else if (searchFormHandle?.subject?.description?.trim()) {
      keywordSearch();
    }
  };
  const keywordSearch = () => {
    const sanitizedDescription = searchFormHandle.subject.description
      .trim() // Remove spaces from the front and back
      .replace(/[^a-zA-Z0-9\s]+/g, "-") // Replace one or more special characters with a hyphen
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
      .replace(/^-|-$/g, "") // Remove hyphens from the start and end
      .toLowerCase();
    const searchUrlMap: Record<string, string> = {
      M: "/degree-courses/search",
      N: "/hnd-hnc-courses/search",
      T: "/access-foundation-courses/search",
      A: "/foundation-degree-courses/search",
      L: "/postgraduate-courses/search",
    };
    const matchedSubject = filteredsubject?.find(
      (item) =>
        item.description.toLowerCase() ===
        searchFormHandle.subject.description?.trim().toLowerCase()
    );

    if (searchFormHandle.location?.regionName && matchedSubject) {
      const sanitizedRegionName = searchFormHandle.location.regionName
        .trim() // Remove spaces from the front and back
        .replace(/[^a-zA-Z0-9\s]+/g, "-") // Replace one or more special characters with a hyphen
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
        .replace(/^-|-$/g, "") // Remove hyphens from the start and end
        .toLowerCase(); // Convert the entire string to lowercase

      return router.push(
        `${matchedSubject.url}&location=${sanitizedRegionName}`
      );
    }
    if (matchedSubject) {
      return router.push(`${matchedSubject.url}`);
    }
    const baseUrl = searchUrlMap[searchFormHandle.courseType.qualCode];
    if (baseUrl) {
      return router.push(`${baseUrl}?q=${sanitizedDescription}`);
    }
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div
        ref={containerRef}
        className="bg-white rounded-[24px] p-[16px] border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:pl-[24px] md:p-[10px]"
      >
        <Form
          action={searchHandler}
          className="flex flex-col small md:flex-row md:items-center"
        >
          <div className="relative shrink-0">
            <button
              onClick={() => {
                courseActions("UG");
                setDropdown(false);
              }}
              className="w-full flex items-center justify-between gap-[4px] pr-0 pb-[24px] text-black md:w-[160px] md:pr-[16px] md:pb-0"
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
              <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute left-[-16px] top-[45px] w-[calc(100%+32px)] md:w-[calc(100%+16px)]">
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
          <div className="w-full relative grow border-y-[1px] border-grey-200 md:border-l md:border-y-0">
            <input
              autoComplete="off"
              value={searchFormHandle.subject.description || ""}
              type="text"
              className="w-full focus:outline-none text-black placeholder:text-gray-500 px-[0] py-[24px] md:px-[16px] md:py-[10px]"
              aria-label="submenu"
              placeholder="Enter subject"
              onChange={(event) => {
                const trimmedValue = event.target.value.replace(/\s{2,}/g, " "); // Replace multiple spaces with a single space

                setsearchFormHandle((prevData: any) => ({
                  ...prevData,
                  subject: {
                    ...prevData.subject,
                    url: null,
                    parent_subject: null,
                    category_code: null,
                    browse_cat_id: "KW", // Retaining other properties of subject
                    description: trimmedValue.trimStart(), // Setting the description value
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
            {dropdown && (
              <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] w-full max-h-[310px] overflow-y-auto custom-scrollbar-2">
                {/* Hardcode the item at index 0 */}
                {searchFormHandle?.subject?.description?.trim()?.length > 2 && (
                  <div
                    onClick={() => {
                      setsearchFormHandle((prevData: SearchFormHandle) => ({
                        ...prevData,
                        subject: subjectlist[0],
                        isSubjectClicked: !searchFormHandle?.isSubjectClicked,
                      }));
                      setDropdown(false);
                      keywordSearch();
                    }}
                    className="px-[16px] py-[12px] cursor-pointer"
                  >
                    <p className="x-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">
                      Key word search for
                    </p>
                    <p className="small text-primary-400">
                      {`'${searchFormHandle.subject.description}'`}
                    </p>
                  </div>
                )}
                <ul>
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
            className="w-full relative grow md:border-l border-grey-200"
            onClick={() => {
              courseActions("Location");
              setDropdown(false);
            }}
          >
            <input
              autoComplete="off"
              type="text"
              className="w-full focus:outline-none text-black placeholder:text-gray-500 px-[0] py-[24px] md:px-[16px] md:py-[10px]"
              aria-label="submenu"
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
            {searchFormHandle?.isLocationClicked && (
              <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] w-full max-h-[310px] overflow-y-auto custom-scrollbar-2">
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
          <button
            type="submit"
            className="btn btn-primary flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:min-w-[114px] md:w-[130px]"
          >
            <Image
              src="/static/assets/icons/search_icon.svg"
              width="18"
              height="18"
              alt="Search icon"
            />
            Search
          </button>
        </Form>
      </div>
      {subjecterror && (
        <p className="small text-negative-default"> Please enter subject</p>
      )}
    </div>
  );
};

export default CourseTab;

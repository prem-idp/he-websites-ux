"use client";
type KeyValueObject = Record<string, string>;
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../accordion/accordion";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import { useSearchParams, usePathname } from "next/navigation";
import {
  getFilterPriority,
  isSingleSelection,
} from "@packages/lib/utlils/filters/result-filters";
import { extractUrlAndCookieValues } from "@packages/lib/utlils/filters/result-filters";
import { locationMilesArray } from "@packages/lib/utlils/filters/result-filters";
import L2subjectList from "@packages/shared-components/sr-page/SrFilter/L2subjectList";
import SelectedUniversity from "@packages/shared-components/sr-page/SrFilter/selecteduniversity";
import LocationcheckBox from "@packages/shared-components/sr-page/SrFilter/locatcionCheckBox";
import { getParentSubject } from "@packages/lib/utlils/filters/result-filters";
import { getSrFilter, getSrFilterCount } from "@packages/REST-API/rest-api";
import { filterbodyJson } from "@packages/lib/utlils/filters/filterJson";
import SubjectSkeleton from "@packages/shared-components/skeleton/search-result/subject-skeleton";
import { getUserLocation } from "@packages/lib/utlils/filters/result-filters";

const SearchFilterComponent = ({ data, path }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [jsondata, setJsondata] = useState(data);
  const [searchedSubject, setSearchedSubject] = useState({
    subjectkeyword: "",
    sortedSubjects: [],
    isSujectDropdownOpen: false,
  });
  const [searchedUniversity, setSearchedUniversity] = useState({
    universityKeyword: "",
    sortedUni: [],
    isUniversityDropdownOpen: false,
  });
  const [location, setLocation] = useState({
    isdropDownOpen: false,
    selectedMile: "50 miles",
    locationMilesArray: locationMilesArray,
  });
  const [slug, setslug] = useState(path || "degree-courses/search");
  const [courseCount, setCourseCount] = useState<any>(0);
  const [isAllUkChecked, setIsAllUkChecked] = useState<any>();
  const [isIndexed, setIsIndexed] = useState(true);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [isSubjectOpen, setIsSubjectOpen] = useState<any>(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOrder, setFilterOrder] = useState<any>(false);
  const [selectedSubject, setSelectedSubject] = useState({
    ParentSubject: "",
    SubjectList: "",
  });
  const [filterLoading, setFilterLoading] = useState(false);
  const [selectedFilter, SetselectedFilter] = useState<
    null | undefined | string
  >(null);
  const [routerEnd, setrouterEnd] = useState(false);

  const [prepopulateFilter, setPrepopulateFilter] = useState<any>(null);
  const subjectClicked = (item: string, closeFilter?: boolean) => {
    setIsSubjectOpen(closeFilter || !isSubjectOpen);
    const L2subject = jsondata?.subjectFilterList?.filter((items: any) => {
      return items.parentSubject == item;
    });
    setSelectedSubject({ ParentSubject: item, SubjectList: L2subject });
    setSearchedSubject((prev: any) => ({
      ...prev,
      isSujectDropdownOpen: false,
    }));
  };
  const subjectParam: any = (
    searchParams?.get("subject") || searchParams?.get("course")
  )?.split(",");
  useEffect(() => {
    setPrepopulateFilter({
      studyMethod:
        searchParams?.get("study-method") ||
        searchParams?.get("study_method") ||
        "",
      studyMode:
        searchParams?.get("study-mode") ||
        searchParams?.get("study_mode") ||
        "",
      year: searchParams?.get("year") || "",
      month: searchParams?.get("month") || "",
      location: searchParams?.get("location") || "",
      russellGroup:
        searchParams?.get("russell-group") ||
        searchParams?.get("russell_group") ||
        "",
      locationType:
        searchParams?.get("location-type") ||
        searchParams?.get("location_type") ||
        "",
    });
    const value = isSingleSelection(searchParams);
    setslug(path);
    setIsIndexed(value);
    if (pathname) {
      setslug(pathname);
    }
    const parentSubjectName = getParentSubject(
      searchParams,
      jsondata,
      subjectParam[0]
    );
    if (parentSubjectName) {
      subjectClicked(parentSubjectName, true);
    }
    const getCount = async () => {
      const bodyJson = extractUrlAndCookieValues(searchParams, "", "");
      const count = await getSrFilterCount(
        filterbodyJson(bodyJson, slug.split("/")[1])
      );
      console.log(count);
      setCourseCount(count);
    };
    getCount();
  }, [searchParams, filterLoading]);
  useEffect(() => {
    const handleTogglePopup = (eventName: string | null | undefined) => {
      if (typeof document === "undefined") {
        return "";
      }

      const element = document?.getElementById(`#${eventName}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      SetselectedFilter(eventName);
      setIsFilterOpen(true);
      const body = document.body;
      body.classList.add("overflow-y-hidden");
    };
    emitter.on("isfilterOpen", handleTogglePopup);
    return () => {
      emitter.off("isfilterOpen", handleTogglePopup);
    };
  }, [isFilterOpen]);

  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const [selectUniId, setSelectUniId] = useState<any>("");
  const universitiesSortingList: any = () => {
    const listvalue: any[] = [];
    [
      {
        id: "Uni1",
        name: "Universities A - C",
        sortingValue: "A-B-C",
        displayHeading: "A - C",
        unilist: [],
      },
      {
        id: "Uni2",
        name: "Universities D - H",
        sortingValue: "D-E-F-G-H",
        displayHeading: "D - H",
        unilist: [],
      },
      {
        id: "Uni3",
        name: "Universities I - M",
        sortingValue: "I-J-K-L-M",
        displayHeading: "I - M",
        unilist: [],
      },
      {
        id: "Uni4",
        name: "Universities N - P",
        sortingValue: "N-O-P-Q-P",
        displayHeading: "N - P",
        unilist: [],
      },
      {
        id: "Uni5",
        name: "Universities Q - U",
        sortingValue: "Q-R-S-T-U",
        displayHeading: "Q - U",
        unilist: [],
      },
      {
        id: "Uni6",
        name: "Universities V - Z",
        sortingValue: "V-W-X-Y-Z",
        displayHeading: "V - Z",
        unilist: [],
      },
    ].map((item: any) => {
      item.unilist = jsondata?.universityFilterList?.filter(
        (collegeItem: any) => {
          const regex = new RegExp(`^[${item.sortingValue}]`, "i");
          return regex.test(collegeItem?.collegeName);
        }
      );
      listvalue.push(item);
    });
    return listvalue;
  };
  const universitiesList = universitiesSortingList();
  const universityClicked = (displayHeading: string, id: string) => {
    setIsUniversityOpen(!isUniversityOpen);
    setSelectUniId({ id, displayHeading });
    setSearchedUniversity((prev: any) => ({
      ...prev,
      isUniversityDropdownOpen: false,
    }));
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
        SetselectedFilter(null);
        const body = document.body;
        body.classList.remove("overflow-y-hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeFilter = () => {
    setIsFilterOpen(false);
    SetselectedFilter(null);
    const body = document.body;
    body.classList.remove("overflow-y-hidden");
  };
  useEffect(() => {
    if (isFilterOpen && filterRef.current) {
      filterRef.current.scrollTop = filterRef.current.scrollHeight;
    }
  }, [isFilterOpen]);
  const ShowResults = () => {
    setIsFilterOpen(false);
  };

  useEffect(() => {
    const dynamicFilter = async () => {
      if (routerEnd) {
        const data = await getSrFilter(
          filterbodyJson(filterOrder, slug.split("/")[1])
        );
        console.log(filterbodyJson(filterOrder, slug.split("/")[1]));
        setJsondata(data);
        setrouterEnd(false);
        setFilterLoading(false);
      }
    };
    dynamicFilter();
  }, [routerEnd]);
  console.log(jsondata);
  const appendSearchParams = async (
    key: string,
    value: string,
    isUniversitySelected?: boolean,
    isQualificationChanged?: boolean
  ) => {
    console.log("entered");
    setFilterLoading(true);
    let crossL1Subject = false;
    if (key === "subject" || key === "course") {
      const selectedParent = jsondata?.subjectFilterList
        ?.map((subjects: any) => {
          if (subjects?.subjectTextKey === value) {
            return subjects?.parentSubject;
          }
        })
        ?.filter(Boolean);
      const currentParent = getParentSubject(searchParams, jsondata);
      if (selectedParent[0] != currentParent) {
        crossL1Subject = true;
      }
    }

    const filters = extractUrlAndCookieValues(
      searchParams,
      key,
      value,
      crossL1Subject
    );
    const orderedFilters = getFilterPriority(
      isUniversitySelected || false
    )?.reduce((acc, priorityKey) => {
      if (filters[priorityKey]) acc[priorityKey] = filters[priorityKey];
      return acc;
    }, {} as KeyValueObject);
    setFilterOrder(orderedFilters);
    const urlParams = new URLSearchParams();
    const cookieParams: KeyValueObject = {};
    let totalValues = 0;
    Object.entries(orderedFilters).forEach(([k, v]) => {
      const valuesArray = v.split("+");
      if (totalValues + valuesArray?.length <= 4) {
        urlParams.set(k, valuesArray?.join("+"));
        totalValues += valuesArray?.length;
      } else {
        const allowedValues = valuesArray.slice(0, 4 - totalValues);
        const remainingValues = valuesArray.slice(4 - totalValues);
        if (allowedValues?.length > 0) {
          urlParams.set(k, allowedValues?.join("+"));
          totalValues += allowedValues?.length;
        }
        if (remainingValues?.length > 0) {
          cookieParams[k] = remainingValues?.join("+");
        }
      }
    });
    const multiSelect =
      urlParams?.toString()?.includes("+") ||
      urlParams?.toString()?.includes("%2B");
    let domainPath = null;
    if (isQualificationChanged && !slug?.includes(value)) {
      domainPath = `/${value}-courses/${slug?.split("/")[2]}`;
    }

    if (urlParams?.toString() === searchParams?.toString()) {
      console.log("refresh", urlParams?.toString());
      document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
      if (isQualificationChanged) {
        router.push(
          `${domainPath}?${urlParams?.toString()}`.replaceAll("%2B", "+")
        );
      }
      router.refresh();
    } else if (multiSelect) {
      console.log("multi select", urlParams?.toString());
      document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
      router.push(
        `${domainPath ?? ""}?${urlParams.toString()}`.replaceAll("%2B", "+")
      );
    } else {
      console.log("link tag");
      document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
      const linkTagId = document.getElementById(key + value);
      if (linkTagId) {
        console.log("link tag found", linkTagId);
        linkTagId.click();
      } else {
        console.log("No link tag", urlParams?.toString());
        router.push(`?${urlParams.toString()}`.replaceAll("%2B", "+"));
      }
    }
    setrouterEnd(true);
  };

  const modifySearchParams = (key: string, value: string, urlParams: any) => {
    const urlParentSubject = getParentSubject(searchParams, jsondata);
    const selectedParentSubject = getParentSubject(null, jsondata, value);
    if (urlParentSubject == selectedParentSubject) {
      const searchparamObject = Object?.fromEntries(urlParams.entries());
      searchparamObject[key] = value;
      const modifiedParam = new URLSearchParams(searchparamObject);
      return `${modifiedParam}`;
    }
  };

  const formUrl = (key: string, value: string, isQualification?: boolean) => {
    let crossL1Subject = false;
    if (key === "subject" || key === "course") {
      const selectedParent = jsondata?.subjectFilterList
        ?.map((subjects: any) => {
          if (subjects?.subjectTextKey === value) {
            return subjects?.parentSubject;
          }
        })
        ?.filter(Boolean);
      const currentParent = getParentSubject(searchParams, jsondata);
      if (selectedParent != currentParent) {
        crossL1Subject = true;
      }
    }
    const filters = extractUrlAndCookieValues(
      searchParams,
      key,
      value,
      crossL1Subject
    );
    const orderedFilters = getFilterPriority(isQualification || false).reduce(
      (acc, priorityKey) => {
        if (filters[priorityKey]) acc[priorityKey] = filters[priorityKey];
        return acc;
      },
      {} as KeyValueObject
    );
    const urlParams = new URLSearchParams();
    let totalValues = 0;
    const a = Object.fromEntries(searchParams.entries());
    const count = Object.keys(a)?.length;
    Object.entries(orderedFilters).forEach(([k, v]) => {
      const valuesArray = v.split("+");
      if (totalValues + valuesArray?.length <= 4) {
        if (k != "study-level") {
          urlParams.set(k, valuesArray.join("+"));
          totalValues += valuesArray?.length;
        }
      }
    });
    if (count >= 4) {
      if (key == "subject") {
        const param = modifySearchParams(key, value, urlParams);
        return param?.toString()?.replace("%2B", "+");
      } else {
        return `${`subject=${searchParams?.get("subject")}&${key}=${value}`}`;
      }
    } else {
      if (key == "subject") {
        const param = modifySearchParams(key, value, urlParams);
        return param?.toString();
      } else {
        return `${urlParams.toString()}`;
      }
    }
  };

  const containsSearchParam = (key: string, value: string): boolean => {
    const paramValue = searchParams.get(key);
    if (!paramValue) return false;
    const decodedValue = decodeURIComponent(paramValue).replace(/\+/g, " ");
    return decodedValue.split(/[\s,]+/).includes(value);
  };
  const parentSubjectSet: any = new Set(
    jsondata?.subjectFilterList
      ?.map((items: any) => {
        if (items.parentSubject) {
          return items.parentSubject;
        }
      })
      ?.filter(Boolean)
  );
  console.log(courseCount);
  const ParentSubject: any = [...parentSubjectSet];

  const L2subjects = ParentSubject?.map((item: any) => {
    const filteredSubjects = jsondata?.subjectFilterList?.filter(
      (subject: any) => subject?.parentSubject === item
    );
    return { parent: item, subjects: filteredSubjects };
  });

  const parentRegion = jsondata?.regionList?.filter((item: any) => {
    return !item?.parentRegionId;
  });

  const FirstLevelRegion = jsondata?.regionList
    ?.map((region: any) => {
      if (region.parentRegionId == 1) return region;
    })
    .filter(Boolean);

  const subjectKeyWordSearch = (keyword: string) => {
    if (keyword?.length >= 3) {
      const filteredSubject = jsondata?.subjectFilterList?.filter(
        (subject: any) =>
          subject?.categoryDesc
            ?.toLowerCase()
            .startsWith(keyword?.toLowerCase())
      );
      setSearchedSubject((prev: any) => ({
        ...prev,
        subjectkeyword: keyword,
        isSujectDropdownOpen: true,
        sortedSubjects: filteredSubject,
      }));
    } else if (keyword?.length < 3) {
      setSearchedSubject((prev: any) => ({
        ...prev,
        subjectkeyword: keyword,
        isSujectDropdownOpen: false,
      }));
    }
  };
  const universityKeywordSearch = (keyword: string) => {
    if (keyword?.length >= 3) {
      const filteredUni = jsondata?.universityFilterList?.filter((uni: any) =>
        uni?.collegeNameDisplay
          ?.toLowerCase()
          .startsWith(keyword?.toLowerCase())
      );
      setSearchedUniversity((prev: any) => ({
        ...prev,
        universityKeyword: keyword,
        isUniversityDropdownOpen: true,
        sortedUni: filteredUni,
      }));
    } else if (keyword?.length < 3) {
      setSearchedUniversity((prev: any) => ({
        ...prev,
        universityKeyword: keyword,
        isUniversityDropdownOpen: false,
      }));
    }
  };
  const toggleLocationMiles = (milesValue: string) => {
    setLocation((prev: any) => ({
      ...prev,
      isdropDownOpen: !prev?.isdropDownOpen,
      selectedMile: milesValue,
    }));
  };
  return (
    <>
      <div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-grey-600 backdrop-blur-custom-1 opacity-[80%] z-10  ${
            isFilterOpen ? "animate-fadeIn block" : "animate-fadeOut hidden"
          }`}
        ></div>

        <div
          className={`bg-white fixed top-0 left-0 w-full h-full z-10 transition-all duration-300 ease-in-out md:w-[768px] ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={filterRef}
        >
          <div className="p-[16px] md:p-[32px] !pb-0">
            <div className="flex justify-between">
              <h6 className="h2">Filter</h6>
              <svg
                onClick={closeFilter}
                className="mt-[-6px] ml-auto mr-[-6px] md:mt-[-22px] md:mr-[-22px] cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="m-[8px_0_24px]">
              Use these filters to narrow down your search options based on your
              preferred criteria 
            </p>
          </div>

          {!filterLoading ? (
            <>
              <div className="h-[calc(100%-215px)] overflow-y-auto custom-scrollbar-2 md:h-[calc(100%-213px)]">
                <Accordion
                  title="Subject"
                  id="#subject"
                  defaultOpenStatus={
                    selectedFilter === "all" || selectedFilter === "subject"
                  }
                >
                  {/* subject */}
                  <div className="flex flex-col gap-[24px] pt-[24px]">
                    {jsondata?.studyMethodList?.length > 0 && (
                      <div className="flex flex-col gap-[4px]">
                        <div className="text-para-lg font-semibold">
                          Study Method
                        </div>
                        <div className="x-small font-semibold text-black uppercase">
                          Choose one
                        </div>
                        <div className="flex flex-wrap gap-[8px]">
                          {jsondata?.studyMethodList?.map(
                            (items: any, index: any) => (
                              <div
                                className="form-black flex relative"
                                key={index + 1}
                              >
                                {isIndexed && (
                                  <Link
                                    id={
                                      "study-method" + items?.studyMethodTextKey
                                    }
                                    href={{
                                      pathname: `${slug}`,
                                      query: formUrl(
                                        "study-method",
                                        items?.studyMethodTextKey
                                      ),
                                    }}
                                  ></Link>
                                )}
                                <input
                                  checked={
                                    prepopulateFilter?.studyMethod ==
                                    items?.studyMethodTextKey
                                  }
                                  onChange={() => {
                                    appendSearchParams(
                                      "study-method",
                                      items?.studyMethodTextKey
                                    );
                                    setPrepopulateFilter((prev: any) => ({
                                      ...prev,
                                      studyMethod:
                                        prev.studyMethod ==
                                        items?.studyMethodTextKey
                                          ? ""
                                          : items?.studyMethodTextKey,
                                    }));
                                  }}
                                  type="checkbox"
                                  id={items?.studyMethodDesc}
                                  name={items?.studyMethodDesc}
                                  className="rounded-[4px] outline-none absolute opacity-0"
                                />
                                <label
                                  htmlFor={items?.studyMethodDesc}
                                  className="btn btn-black-outline"
                                >
                                  {items?.studyMethodDesc}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {jsondata?.studyModeList && (
                      <div className="flex flex-col gap-[4px]">
                        <div className="text-para-lg font-semibold">
                          Study mode
                        </div>
                        <div className="x-small font-semibold text-black uppercase">
                          Choose one
                        </div>
                        <div className="flex flex-row flex-wrap gap-[8px]">
                          {jsondata?.studyModeList?.map(
                            (items: any, index: any) => (
                              <div
                                className="form-black flex relative"
                                key={index + 1}
                                id={items?.studyModeTextKey}
                              >
                                {isIndexed && (
                                  <Link
                                    id={"study-mode" + items?.studyModeTextKey}
                                    href={{
                                      pathname: `${slug}`,
                                      query: formUrl(
                                        "study-mode",
                                        items?.studyModeTextKey
                                      ),
                                    }}
                                  ></Link>
                                )}
                                <input
                                  type="checkbox"
                                  checked={
                                    prepopulateFilter?.studyMode ==
                                    items?.studyModeTextKey
                                  }
                                  onChange={() => {
                                    appendSearchParams(
                                      "study-mode",
                                      items?.studyModeTextKey
                                    );
                                    // setPrepopulateFilter((prev: any) => ({
                                    //   ...prev,
                                    //   studyMode:
                                    //     prev?.studyMode ==
                                    //     items?.studyModeTextKey
                                    //       ? ""
                                    //       : items?.studyModeTextKey,
                                    // }));
                                  }}
                                  className="rounded-[4px] outline-none absolute opacity-0"
                                  id={items?.studyModeDesc}
                                  name={items?.studyModeDesc}
                                />
                                <label
                                  htmlFor={items?.studyModeDesc}
                                  className="btn btn-black-outline"
                                >
                                  {items?.studyModeDesc}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {jsondata?.qualificationList?.length > 0 && (
                      <div className="flex flex-col gap-[4px]">
                        <div className="text-para-lg font-semibold">
                          Study level
                        </div>
                        <div className="x-small font-semibold text-black uppercase">
                          Choose one
                        </div>
                        <div className="flex flex-wrap gap-[8px]">
                          {jsondata?.qualificationList?.map(
                            (item: any, index: any) => (
                              <div
                                className="form-black flex relative"
                                key={index}
                              >
                                {isIndexed &&
                                  !slug.includes(item?.qualTextKey) && (
                                    <Link
                                      id={"study-level" + item?.qualTextKey}
                                      href={{
                                        pathname: `/${item?.qualTextKey}-courses/search`,
                                        query: formUrl(
                                          "study-level",
                                          item?.qualTextKey
                                        ),
                                      }}
                                    ></Link>
                                  )}
                                <input
                                  checked={slug?.includes(item?.qualTextKey)}
                                  onChange={() => {
                                    appendSearchParams(
                                      "study-level",
                                      item?.qualTextKey,
                                      false,
                                      true
                                    );
                                  }}
                                  type="checkbox"
                                  name="studylevel"
                                  id={item?.qualDisplayDesc}
                                  value={item?.qualDisplayDesc}
                                  className="rounded-[4px] outline-none absolute opacity-0"
                                />
                                <label
                                  htmlFor={item?.qualDisplayDesc}
                                  className="btn btn-black-outline"
                                >
                                  {item?.qualDisplayDesc}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-[16px]">
                      <div className="flex flex-col gap-[4px]">
                        <div className="text-para-lg font-semibold">
                          Subject area
                        </div>
                        <div className="x-small font-semibold text-black uppercase">
                          choose one subject area
                        </div>
                      </div>
                      <div className="bg-white rounded-[22px] p-[11px_12px] border border-grey-300 hover:border-primary-500 md:p-[9px_12px]">
                        <div className="flex item-center gap-[12px] relative">
                          <Image
                            src="/static/assets/icons/search-result/search-black.svg"
                            width="20"
                            height="20"
                            alt="Search icon"
                          />
                          <input
                            type="text"
                            className="w-full focus:outline-none small text-black placeholder:text-gray-500"
                            aria-label="enter keyword"
                            placeholder="Search subjects"
                            value={searchedSubject?.subjectkeyword}
                            onChange={(event) => {
                              subjectKeyWordSearch(event.target.value);
                            }}
                          />
                          {searchedSubject?.isSujectDropdownOpen && (
                            <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[33px] custom-scrollbar-2 max-h-[205px] overflow-y-auto mr-[4px]">
                              {searchedSubject?.sortedSubjects?.length > 0 ? (
                                <ul>
                                  {searchedSubject?.sortedSubjects?.map(
                                    (subjects: any, index: number) => (
                                      <li key={index + 1}>
                                        <div
                                          onClick={() => {
                                            subjectClicked(
                                              subjects?.parentSubject
                                            );
                                          }}
                                          className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                                        >
                                          {subjects?.categoryDesc}
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                <p>No match found</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="max-h-[250px] overflow-y-auto custom-scrollbar-2">
                        <div
                          className={`flex flex-col gap-[12px] transition-all duration-300 ease-in-out $
                      ${isSubjectOpen ? "-translate-x-full h-0 hidden" : "translate-x-0 h-auto"}
                      `}
                        >
                          {ParentSubject?.map((item: any, index: any) => (
                            <div
                              key={index}
                              onClick={() => {
                                subjectClicked(item, true);
                              }}
                              className="flex items-center gap-[4px] text-blue-400 small font-semibold cursor-pointer hover:underline"
                            >
                              {item}
                              <svg
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
                            </div>
                          ))}
                        </div>
                        <div
                          className={`
                        bg-white transition-all duration-300 ease-in-out
                        ${isSubjectOpen ? "translate-x-0" : "-translate-x-full"}
                      `}
                        >
                          {L2subjects?.map((subjects: any, index: number) => (
                            <L2subjectList
                              key={index}
                              subjectsArray={subjects}
                              selectedSubject={selectedSubject}
                              isIndexed={isIndexed}
                              isSubjectOpen={isSubjectOpen}
                              subjectClicked={subjectClicked}
                              formUrl={formUrl}
                              slug={slug}
                              appendSearchParams={appendSearchParams}
                              containsSearchParam={containsSearchParam}
                              jsondata={jsondata?.subjectFilterList}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion>
                {(jsondata?.intakeYearDetails?.intakeYearList?.length > 0 ||
                  jsondata?.intakeYearDetails?.intakeMonthList?.length > 0) && (
                  <Accordion
                    id="#year"
                    title="Intake year"
                    defaultOpenStatus={selectedFilter === "year" ? true : false}
                  >
                    {/* intake */}
                    <div className="flex flex-col gap-[8px] p-[8px_0_0]">
                      <div className="x-small font-semibold text-black uppercase">
                        Choose YEAR & MONTH
                      </div>
                      <div className="flex flex-wrap gap-x-[4px] gap-y-[8px]">
                        {jsondata?.intakeYearDetails?.intakeYearList?.map(
                          (item: any, index: any) => (
                            <div
                              className="form-black flex relative"
                              key={index}
                            >
                              {isIndexed && (
                                <Link
                                  id={"year" + item?.year}
                                  href={{
                                    pathname: `${slug}`,
                                    query: formUrl("year", `${item?.year}`),
                                  }}
                                ></Link>
                              )}
                              <input
                                checked={
                                  `${prepopulateFilter?.year}` ==
                                  `${item?.year}`
                                }
                                onChange={() => {
                                  setPrepopulateFilter((prev: any) => ({
                                    ...prev,
                                    year:
                                      `${prev.year}` == `${item?.year}`
                                        ? ""
                                        : `${item?.year}`,
                                  }));
                                  appendSearchParams("year", `${item?.year}`);
                                }}
                                type="checkbox"
                                name={`${item?.year}`}
                                className="rounded-[4px] outline-none absolute opacity-0"
                                id={`${item?.year}`}
                              />
                              <label
                                htmlFor={`${item?.year}`}
                                className="btn btn-black-outline"
                              >
                                {item?.year}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                      <div className="flex flex-wrap gap-x-[4px] gap-y-[8px]">
                        {jsondata?.intakeYearDetails?.intakeMonthList?.map(
                          (item: any, index: any) => (
                            <div
                              className="form-black flex relative"
                              key={index}
                            >
                              {isIndexed && (
                                <Link
                                  id={"month" + item?.month}
                                  href={{
                                    pathname: `${slug}`,
                                    query: formUrl("month", `${item?.month}`),
                                  }}
                                ></Link>
                              )}
                              <input
                                checked={
                                  prepopulateFilter?.month == item?.month
                                }
                                onChange={() => {
                                  appendSearchParams("month", item?.month);
                                  setPrepopulateFilter((prev: any) => ({
                                    ...prev,
                                    month:
                                      prev?.month == item?.month
                                        ? ""
                                        : item?.month,
                                  }));
                                }}
                                type="checkbox"
                                name={item?.month}
                                className="rounded-[4px] outline-none absolute opacity-0"
                                id={item?.month}
                              />
                              <label
                                htmlFor={item?.month}
                                className="btn btn-black-outline min-w-[53px] py-[5px]"
                              >
                                {item?.month}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </Accordion>
                )}
                <Accordion
                  title="University"
                  id="#university"
                  defaultOpenStatus={
                    selectedFilter === "university" ? true : false
                  }
                >
                  <div className="flex flex-col gap-[16px] pt-[24px]">
                    <div className="flex flex-col gap-[4px]">
                      <div className="text-para-lg font-semibold">
                        Find a university
                      </div>
                      <div className="x-small font-semibold text-black uppercase">
                        Choose one
                      </div>
                    </div>
                    <div className="bg-white rounded-[22px] p-[11px_12px] border border-grey-300 hover:border-primary-500 md:p-[9px_12px]">
                      <div className="flex item-center gap-[12px] relative">
                        <Image
                          src="/static/assets/icons/search-result/search-black.svg"
                          width="20"
                          height="20"
                          alt="Search icon"
                        />
                        <input
                          type="text"
                          className="w-full focus:outline-none small text-black placeholder:text-gray-500"
                          aria-label="enter keyword"
                          placeholder="Search universities"
                          onChange={(event) => {
                            universityKeywordSearch(event?.target?.value);
                          }}
                          value={searchedUniversity?.universityKeyword}
                        />
                        {searchedUniversity?.isUniversityDropdownOpen && (
                          <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[33px] custom-scrollbar-2 max-h-[205px] overflow-y-auto mr-[4px]">
                            {searchedUniversity?.sortedUni?.length > 0 ? (
                              <ul>
                                {searchedUniversity?.sortedUni?.map(
                                  (uni: any, index: number) => (
                                    <li key={index + 1}>
                                      <div
                                        onClick={() => {
                                          const selectedItem = universitiesList
                                            ?.flatMap(
                                              (universityArray: any) =>
                                                universityArray?.unilist
                                                  ?.filter(
                                                    (university: any) =>
                                                      university?.collegeNameDisplay ===
                                                      uni?.collegeNameDisplay
                                                  )
                                                  ?.map(
                                                    () => universityArray
                                                  ) || []
                                            )
                                            ?.filter(Boolean)[0];
                                          universityClicked(
                                            selectedItem?.displayHeading,
                                            selectedItem?.id
                                          );
                                        }}
                                        className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                                      >
                                        {uni?.collegeNameDisplay}
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>No match found</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="max-h-[250px] overflow-y-auto custom-scrollbar-2">
                      <div
                        className={`flex flex-col gap-[12px] transition-all duration-300 ease-in-out ${
                          isUniversityOpen
                            ? "-translate-x-full h-0 hidden"
                            : "translate-x-0 h-auto"
                        }`}
                      >
                        {universitiesList?.map((item: any, index: any) => (
                          <div
                            key={index}
                            onClick={() => {
                              universityClicked(item?.displayHeading, item?.id);
                            }}
                            className="flex items-center gap-[4px] text-blue-400 small font-semibold cursor-pointer hover:underline"
                          >
                            {item?.name}
                            <svg
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
                          </div>
                        ))}
                      </div>

                      <div
                        className={`bg-white transition-all duration-300 ease-in-out 
                      ${
                        isUniversityOpen ? "translate-x-0" : "-translate-x-full"
                      }
                    `}
                      >
                        {universitiesList?.map((item: any, index: any) => (
                          <SelectedUniversity
                            key={index + 1}
                            isUniversityOpen={isUniversityOpen}
                            universityClicked={universityClicked}
                            id={item.id}
                            appendSearchParams={appendSearchParams}
                            formUrl={formUrl}
                            selectedId={selectUniId}
                            universityList={item?.unilist}
                            pathname={slug}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Accordion>
                {slug.split("/")[2] === "search" && (
                  <Accordion
                    title="Location"
                    id="#location"
                    defaultOpenStatus={
                      selectedFilter === "location" ? true : false
                    }
                  >
                    {/* location */}
                    <div className="flex flex-col gap-[24px]">
                      <div className="flex flex-col gap-[8px] pt-[24px]">
                        <div className="font-semibold">Distance from home</div>
                        <div className="flex flex-col gap-[16px]">
                          <div className="bg-white rounded-[24px] w-full p-[16px] border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:pl-[24px] md:p-[4px] md:w-[508px]">
                            <div className="flex flex-col gap-[24px] small md:flex-row md:items-center md:gap-[10px]">
                              <div className="relative shrink-0">
                                <button
                                  onClick={() => {
                                    toggleLocationMiles("50 miles");
                                  }}
                                  className="relative shrink-0 w-full flex items-center justify-between gap-[4px] pr-0 text-black md:w-[146px] md:pr-[16  px]"
                                  type="button"
                                >
                                  Range: {location?.selectedMile}
                                  <Image
                                    src="/static/assets/icons/arrow_down_black.svg"
                                    width="20"
                                    height="20"
                                    alt="Search icon"
                                  />
                                </button>
                                {location?.isdropDownOpen && (
                                  <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute left-[-16px] top-[33px] w-[calc(100%+32px)] md:w-[calc(100%+16px)]">
                                    <ul>
                                      {locationMilesArray?.map(
                                        (items, index) => (
                                          <li
                                            key={index + 1}
                                            onClick={() => {
                                              toggleLocationMiles(items?.miles);
                                            }}
                                            className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                                          >
                                            {items?.miles}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </div>
                              <div className="w-full grow border-y-[1px] border-grey-200 md:border-l md:border-y-0">
                                <input
                                  type="text"
                                  className="w-full focus:outline-none text-black placeholder:text-gray-500 px-[0] py-[24px] md:px-[16px] md:py-[0px]"
                                  aria-label="submenu"
                                  placeholder="Enter Postcode"
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary flex items-center justify-center gap-[6px] px-[24px] py-[7px] md:min-w-[114px] md:w-[130px]"
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
                          </div>
                          {/* <p className="small text-negative-default">
                    Please enter subject
                  </p> */}
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.3137 12.8137C11.5923 13.5351 10.1389 14.9886 9.04085 16.0866C8.2598 16.8676 6.99496 16.8675 6.21391 16.0865C5.13566 15.0082 3.70908 13.5817 2.94113 12.8137C0.352958 10.2255 0.352958 6.02929 2.94113 3.44113C5.52929 0.852958 9.72554 0.852958 12.3137 3.44113C14.9019 6.02929 14.9019 10.2255 12.3137 12.8137Z"
                              stroke="#4664DC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.1127 8.12742C10.1127 9.5 9 10.6127 7.62742 10.6127C6.25484 10.6127 5.14214 9.5 5.14214 8.12742C5.14214 6.75483 6.25484 5.64214 7.62742 5.64214C9 5.64214 10.1127 6.75483 10.1127 8.12742Z"
                              stroke="#4664DC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div
                            // href=""
                            onClick={getUserLocation}
                            className="small text-blue-400 hover:underline"
                          >
                            Use current location
                          </div>
                        </div>
                      </div>
                      {(jsondata?.regionList?.length > 0 ||
                        jsondata?.cityList?.length > 0) && (
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-para-lg font-semibold">
                            Region
                          </div>
                          <div className="x-small font-semibold text-black uppercase">
                            Choose one or more
                          </div>
                          <ul className="pt-[12px]">
                            <li>
                              <div className="form_check relative m-[0_0_12px]">
                                <div className="flex items-start gap-[8px]">
                                  <div className="checkbox_card">
                                    {isIndexed && (
                                      <Link
                                        id={
                                          "location" +
                                          parentRegion[0]?.regionTextKey
                                        }
                                        href={{
                                          pathname: `${slug}`,
                                          query: formUrl(
                                            "location",
                                            parentRegion[0]?.regionTextKey
                                          ),
                                        }}
                                      ></Link>
                                    )}
                                    <input
                                      type="checkbox"
                                      checked={isAllUkChecked || false}
                                      className="form-checkbox hidden"
                                      id={parentRegion[0]?.regionName}
                                      name={parentRegion[0]?.regionName}
                                      onChange={() => {
                                        setIsAllUkChecked(!isAllUkChecked);
                                        appendSearchParams(
                                          "location",
                                          parentRegion[0]?.regionTextKey
                                        );
                                      }}
                                    />
                                    <label
                                      htmlFor={parentRegion[0]?.regionName}
                                      className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                                    >
                                      <svg
                                        width="10"
                                        height="8"
                                        viewBox="0 0 10 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                          fill="white"
                                          stroke="white"
                                          strokeWidth="0.666667"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </label>
                                  </div>
                                  <label
                                    htmlFor="All Uk"
                                    className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                  >
                                    {parentRegion[0]?.regionName}
                                  </label>
                                </div>
                              </div>
                              <ul>
                                <li>
                                  {FirstLevelRegion?.map(
                                    (item: any, index: any) => (
                                      <LocationcheckBox
                                        isAllUkChecked={isAllUkChecked}
                                        key={index + 1}
                                        item={item}
                                        jsondata={jsondata}
                                        slug={slug}
                                        isIndexed={isIndexed}
                                        formUrl={formUrl}
                                        appendSearchParams={appendSearchParams}
                                      />
                                    )
                                  )}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      )}
                      {jsondata?.cityList && (
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-para-lg font-semibold">City</div>
                          <div className="x-small font-semibold text-black uppercase">
                            Choose one or more
                          </div>
                          <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                            {jsondata?.cityList?.map(
                              (item: any, index: any) => (
                                <div
                                  className="form_check relative"
                                  key={index}
                                >
                                  <div className="flex items-start gap-[8px]">
                                    <div className="checkbox_card">
                                      {isIndexed && (
                                        <Link
                                          id={"location" + item?.cityTextKey}
                                          href={{
                                            pathname: `${slug}`,
                                            query: formUrl(
                                              "location",
                                              item?.cityTextKey
                                            ),
                                          }}
                                        ></Link>
                                      )}
                                      <input
                                        type="checkbox"
                                        checked={
                                          prepopulateFilter?.location ==
                                          item?.cityTextKey
                                            ? true
                                            : false
                                        }
                                        onChange={() => {
                                          appendSearchParams(
                                            "location",
                                            item?.cityTextKey
                                          );
                                          setPrepopulateFilter((prev: any) => ({
                                            ...prev,
                                            location:
                                              prev?.location ==
                                              item?.cityTextKey
                                                ? ""
                                                : item?.cityTextKey,
                                          }));
                                        }}
                                        className="form-checkbox hidden"
                                        id={item?.cityName}
                                        name={item?.cityName}
                                      />
                                      <label
                                        htmlFor={item?.cityName}
                                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                                      >
                                        <svg
                                          width="10"
                                          height="8"
                                          viewBox="0 0 10 8"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.666667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </label>
                                    </div>
                                    <label
                                      htmlFor={item?.cityName}
                                      className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                    >
                                      {item?.cityName}
                                    </label>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                      {jsondata?.uniLocationTypeList && (
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-para-lg font-semibold">
                            Location type
                          </div>
                          <div className="x-small font-semibold text-black uppercase">
                            Choose one or more
                          </div>
                          <div className="flex items-center gap-[8px]">
                            {jsondata?.uniLocationTypeList?.map(
                              (item: any, index: any) => (
                                <div
                                  className="form-black flex relative"
                                  key={index}
                                >
                                  <input
                                    type="checkbox"
                                    checked={
                                      prepopulateFilter?.locationType ==
                                      item?.locTypeTextKey
                                        ? true
                                        : false
                                    }
                                    onChange={() => {
                                      appendSearchParams(
                                        "location-type",
                                        item?.locTypeTextKey
                                      );
                                      setPrepopulateFilter((prev: any) => ({
                                        ...prev,
                                        locationType:
                                          prev?.locationType ==
                                          item?.locTypeTextKey
                                            ? ""
                                            : item?.locTypeTextKey,
                                      }));
                                    }}
                                    name={item?.locTypeDesc}
                                    className="rounded-[4px] outline-none absolute opacity-0"
                                    id={item?.locTypeDesc}
                                    value={item?.locTypeDesc}
                                  />
                                  <label
                                    htmlFor={item?.locTypeDesc}
                                    className="btn btn-black-outline"
                                  >
                                    {item?.locTypeDesc}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </Accordion>
                )}
                {slug.split("/")[2] === "search" && (
                  <>
                    {jsondata?.universityGroupList?.length > 0 && (
                      <Accordion
                        title="University group"
                        defaultOpenStatus={false}
                      >
                        <div className="flex flex-col gap-[8px] pt-[24px]">
                          <div className="x-small font-semibold text-black uppercase">
                            Choose one or more
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            {jsondata?.universityGroupList?.map(
                              (item: any, index: any) => (
                                <div
                                  className="form_check relative"
                                  key={index}
                                >
                                  <div className="flex items-start gap-[8px]">
                                    <div className="checkbox_card">
                                      <input
                                        type="checkbox"
                                        className="form-checkbox hidden"
                                        id={item?.universityGroupDesc}
                                        checked={
                                          prepopulateFilter?.russellGroup !== ""
                                        }
                                        onChange={() => {
                                          appendSearchParams(
                                            "russell-group",
                                            item?.universityGroupTextKey
                                          );
                                          setPrepopulateFilter((prev: any) => ({
                                            ...prev,
                                            russellGroup:
                                              prev?.russellGroup ==
                                              item?.universityGroupTextKey
                                                ? ""
                                                : item?.universityGroupTextKey,
                                          }));
                                        }}
                                      />
                                      <label
                                        htmlFor={item?.universityGroupDesc}
                                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                                      >
                                        <svg
                                          width="10"
                                          height="8"
                                          viewBox="0 0 10 8"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.666667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </label>
                                    </div>
                                    <label
                                      htmlFor={item?.universityGroupDesc}
                                      className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                    >
                                      {item?.universityGroupDesc}
                                    </label>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </Accordion>
                    )}
                  </>
                )}
              </div>
              <div className="flex items-center justify-between p-[16px] fixed w-full bottom-0 shadow-custom-10 bg-white md:p-[16px_32px] md:w-[768px]">
                <div className="min-w-[128px] text-center hover:underline md:text-left">
                  <Link
                    href={`/degree-courses/search`}
                    aria-label="reset filters"
                    className="text-primary-400 font-semibold"
                  >
                    Clear
                  </Link>
                </div>
                <button
                  className="bg-primary-400 text-white rounded-[24px] py-[10px] px-[16px] font-semibold min-w-[200px] hover:bg-primary-500 md:w-[344px]"
                  onClick={ShowResults}
                >
                  Show all {courseCount?.courseCount} results
                </button>
              </div>
            </>
          ) : (
            <SubjectSkeleton />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFilterComponent;

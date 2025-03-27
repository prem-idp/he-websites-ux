"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../accordion/accordion";
import { KeyNames } from "@packages/lib/utlils/filters/filterJson";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import { useSearchParams, usePathname } from "next/navigation";
import { uniSortingMockData } from "@packages/lib/utlils/filters/result-filters";
import {
  getFilterPriority,
  isSingleSelection,
} from "@packages/lib/utlils/filters/result-filters";
import { determineLocationType } from "@packages/lib/utlils/filters/result-filters";
import { generatePathName } from "@packages/lib/utlils/filters/result-filters";
import { extractUrlAndSessionValues } from "@packages/lib/utlils/filters/result-filters";
import { locationMilesArray } from "@packages/lib/utlils/filters/result-filters";
import L2subjectList from "@packages/shared-components/sr-page/SrFilter/L2subjectList";
import SelectedUniversity from "@packages/shared-components/sr-page/SrFilter/selecteduniversity";
import Regions from "@packages/shared-components/sr-page/SrFilter/regions";
import { getParentSubject } from "@packages/lib/utlils/filters/result-filters";
import { getSrFilter, getSrFilterCount } from "@packages/REST-API/rest-api";
import { filterbodyJson } from "@packages/lib/utlils/filters/filterJson";
import { getUserLocation } from "@packages/lib/utlils/filters/result-filters";
import { getFilterValue } from "@packages/lib/utlils/filters/result-filters";
const FilterSpinner = dynamic(
  () =>
    import("@packages/shared-components/skeleton/search-result/filter-spinner"),
  { ssr: false }
);
type KeyValueObject = Record<string, string>;
const SearchFilterComponent = ({ data, path, count }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [jsondata, setJsondata] = useState(data);
  const [courseCount, setCourseCount] = useState<any>(count);
  const keyName = KeyNames();
  const [selectedLocationType, setSelectedLocationType] = useState<any>("");
  const [subjectState, setSubjectState] = useState({
    subjectkeyword: "",
    sortedSubjects: [],
    isSujectDropdownOpen: false,
    isSubjectOpen: false,
    selectedSubject: {
      parentSubject: "",
      subjectList: "",
    },
  });

  const [locationState, setLocationState] = useState<any>({
    isdropDownOpen: false,
    mileDisplayName:
      searchParams?.get("distance") === "any"
        ? "Any distance"
        : searchParams?.get("distance") || "Any distance",
    selectedMile: searchParams?.get("distance")
      ? searchParams?.get("distance")
      : "any",
    locationMilesArray: locationMilesArray,
    locationMilesError: false,
    postCodeValue: "",
  });
  const [slug, setslug] = useState(path || "degree-courses/search");
  const [isIndexed, setIsIndexed] = useState(true);
  const [urlAndSession, setUrlAndSession] = useState(
    extractUrlAndSessionValues(searchParams, "", "")
  );
  const [filterState, setFilterState] = useState({
    isFilterOpen: false,
    isFilterLoading: false,
    filterOrder: extractUrlAndSessionValues(searchParams, "", ""),
    selectedFilter: "",
  });
  const [universityState, setUniversityState] = useState({
    universityKeyword: "",
    sortedUni: [],
    isUniversityDropdownOpen: false,
    isUniversityOpen: false,
    selectUniId: {
      id: "",
      displayHeading: "",
    },
  });
  const [routerEnd, setrouterEnd] = useState(false);
  const [prepopulateFilter, setPrepopulateFilter] = useState<any>(null);
  const universitiesSortingList: any = () => {
    const listvalue: any[] = [];
    uniSortingMockData?.map((item: any) => {
      item.unilist = jsondata?.universityFilterList?.filter(
        (collegeItem: any) => {
          const regex = new RegExp(`^[${item.sortingValue}]`, "i");
          return regex?.test(collegeItem?.collegeName);
        }
      );
      listvalue?.push(item);
    });
    return listvalue;
  };
  const universitiesList = universitiesSortingList();
  const universityClicked = useCallback(
    (displayHeading: string, id: string, isUniOpen?: boolean) => {
      setUniversityState((prev: any) => ({
        ...prev,
        isUniversityDropdownOpen: false,
        isUniversityOpen: isUniOpen,
        selectUniId: { id, displayHeading },
      }));
    },
    []
  );
  useEffect(() => {
    const handleRefreshFilters = () => {
      setPrepopulateFilter({
        studyMethod: filterState?.filterOrder?.[keyName?.studyMethod] || "",
        studyMode: filterState?.filterOrder?.[keyName?.studyMode] || "",
        year: filterState?.filterOrder?.[keyName?.year] || "",
        month: filterState?.filterOrder?.[keyName?.month] || "",
        location: filterState?.filterOrder?.[keyName?.location] || "",
        russellGroup: filterState?.filterOrder?.[keyName?.russellGroup] || "",
        locationType: filterState?.filterOrder?.[keyName?.locationType] || "",
        university: filterState?.filterOrder?.[keyName?.university] || "",
        qualication: filterState?.filterOrder?.[keyName?.studyLevel] || "",
        studyLevel: pathname?.split("/")[1] || "",
      });

      setslug(path);
      setIsIndexed(isSingleSelection(searchParams));

      if (pathname) {
        setslug(pathname);
      }

      const parentSubjectName = getParentSubject(searchParams, jsondata);
      if (parentSubjectName) {
        subjectClicked(parentSubjectName, true);
      } else {
        const subject = searchParams?.get(keyName?.subject)?.split(" ")[0];
        const isUrlSubjectParent = jsondata?.subjectFilterList?.find(
          (subjects: any) => subjects?.subjectTextKey == subject
        );
        if (isUrlSubjectParent) {
          subjectClicked(isUrlSubjectParent?.categoryDesc, true);
        }
      }

      const isUniversityAdded = searchParams?.get(keyName?.university) || null;
      if (isUniversityAdded) {
        const sortedUni = universitiesList?.find((uni: any) =>
          uni?.sortingValue?.includes(
            isUniversityAdded.charAt(0)?.toUpperCase()
          )
        );
        if (sortedUni) {
          setUniversityState((prev: any) => ({
            ...prev,
            isUniversityOpen: true,
          }));
          universityClicked(sortedUni?.displayHeading, sortedUni?.id, true);
        }
      }

      const selectedLocation = determineLocationType(
        jsondata?.regionList,
        jsondata?.cityList,
        searchParams
      );
      setSelectedLocationType(selectedLocation);
      setUrlAndSession(extractUrlAndSessionValues(searchParams, "", ""));
    };
    handleRefreshFilters();
    emitter.on("refreshFilters", handleRefreshFilters);
    return () => {
      emitter.off("refreshFilters", handleRefreshFilters);
    };
  }, [searchParams, routerEnd]);

  useEffect(() => {
    const handleTogglePopup = (eventName: string | null | undefined) => {
      if (typeof document === "undefined") {
        return "";
      }
      const element = document?.getElementById(`#${eventName}`);
      if (element) {
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setFilterState((prev: any) => ({
        ...prev,
        isFilterOpen: true,
        selectedFilter: eventName,
      }));
      const body = document.body;
      body?.classList?.add("overflow-y-hidden");
    };
    emitter.on("isfilterOpen", handleTogglePopup);
    return () => {
      emitter.off("isfilterOpen", handleTogglePopup);
    };
  }, [filterState?.isFilterOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setFilterState((prev: any) => ({
          ...prev,
          isFilterOpen: false,
          selectedFilter: null,
        }));
        const body = document.body;
        body.classList.remove("overflow-y-hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (filterState?.isFilterOpen && filterRef.current) {
      filterRef.current.scrollTop = filterRef.current.scrollHeight;
    }
  }, [filterState?.isFilterOpen]);

  const closeFilter = () => {
    setFilterState((prev: any) => ({
      ...prev,
      isFilterOpen: false,
      selectedFilter: null,
    }));
    const body = document.body;
    body.classList.remove("overflow-y-hidden");
  };

  const ShowResults = () => {
    const body = document.body;
    body?.classList?.remove("overflow-y-hidden");
    setFilterState((prev: any) => ({ ...prev, isFilterOpen: false }));
  };
  const postCodeChange = (value: string) => {
    const specialCharRegex = /[^a-zA-Z0-9\s]/;
    if (!specialCharRegex.test(value) && value?.length <= 8) {
      setLocationState((prev: any) => ({
        ...prev,
        postCodeValue: value?.toUpperCase(),
      }));
    }
  };
  useEffect(() => {
    const dynamicFilter = async () => {
      if (routerEnd) {
        const body = filterbodyJson(
          filterState?.filterOrder,
          prepopulateFilter?.studyLevel
        );

        const data = await getSrFilter(body);
        const count = await getSrFilterCount(body);
        setJsondata(data);
        setCourseCount(count);
        setSubjectState((prev: any) => ({
          ...prev,
          subjectkeyword: "",
        }));
        setUniversityState((prev: any) => ({
          ...prev,
          universityKeyword: "",
          isUniversityDropdownOpen: false,
        }));
        setFilterState((prev: any) => ({ ...prev, isFilterLoading: false }));
        setrouterEnd(false);
      }
    };
    dynamicFilter();
  }, [routerEnd]);

  const clearFilter = () => {
    const firstSubject = (searchParams?.get(keyName?.subject) || "")?.split(
      " "
    );
    const url = `${firstSubject[0] ? `${slug}?${keyName?.subject}=${firstSubject[0]}` : `${slug?.split("/")[1]}`}`;
    document.cookie = `filter_param={}; path=/;`;
    sessionStorage.setItem("filter_param", "{}");
    router.push(url);
  };

  const modifySearchParams = useCallback(
    (key: string, value: string, urlParams: any) => {
      const searchparamObject = Object?.fromEntries(urlParams?.entries());
      searchparamObject[key] = value;
      const modifiedParam = new URLSearchParams(searchparamObject);
      return `${modifiedParam}`;
    },
    []
  );

  const checkCrossL1Subject = useCallback(
    (
      key: string,
      value: string,
      jsondata: any,
      searchParams: URLSearchParams
    ) => {
      if (key === keyName?.subject) {
        const selectedParent = getParentSubject(null, jsondata, value);
        const currentParent = getParentSubject(searchParams, jsondata);
        if (selectedParent && currentParent) {
          return selectedParent !== currentParent;
        } else {
          return true;
        }
      }
      return false;
    },
    []
  );

  const extractAndOrderFilters = useCallback(
    (
      searchParams: URLSearchParams,
      key: string,
      value: string,
      isUniversitySelected: boolean = false,
      crossL1Subject: boolean = false
    ) => {
      const filters = extractUrlAndSessionValues(
        searchParams,
        key,
        value,
        crossL1Subject
      );
      if (key == keyName?.postcode) {
        filters[keyName?.distance] = locationState?.selectedMile;
      } else if (key == keyName?.distance) {
        filters[keyName?.postcode] = locationState?.postCodeValue;
      }
      return getFilterPriority(isUniversitySelected)?.reduce(
        (acc, priorityKey) => {
          if (filters[priorityKey]) acc[priorityKey] = filters[priorityKey];
          return acc;
        },
        {} as KeyValueObject
      );
    },
    []
  );

  const constructSearchParams = useCallback(
    (orderedFilters: KeyValueObject) => {
      const urlParams = new URLSearchParams();
      const cookieParams: KeyValueObject = {};
      let totalValues = 0;
      Object.entries(orderedFilters)?.forEach(([k, v]) => {
        const valuesArray = v?.split("+");
        if (totalValues + valuesArray?.length <= 4) {
          urlParams.set(k, valuesArray.join("+"));
          totalValues += valuesArray?.length;
        } else {
          const allowedValues = valuesArray?.slice(0, 4 - totalValues);
          const remainingValues = valuesArray?.slice(4 - totalValues);
          if (allowedValues?.length > 0) {
            urlParams.set(k, allowedValues.join("+"));
            totalValues += allowedValues.length;
          }
          if (remainingValues?.length > 0) {
            cookieParams[k] = remainingValues.join("+");
          }
        }
      });
      return { urlParams, cookieParams };
    },
    []
  );

  const handleCookiesAndSession = (cookieParams: KeyValueObject) => {
    document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
    sessionStorage.setItem("filter_param", JSON.stringify(cookieParams));
  };

  const appendSearchParams = useCallback(
    async (
      key: string,
      value: string,
      isUniversitySelected?: boolean,
      isQualificationChanged?: boolean
    ) => {
      if (!routerEnd) {
        setFilterState((prev: any) => ({ ...prev, isFilterLoading: true }));
        if (key === keyName?.studyLevel) {
          setPrepopulateFilter((prev: any) => ({
            ...prev,
            studyLevel: `${value}-courses`,
          }));
        }

        const crossL1Subject = checkCrossL1Subject(
          key,
          value,
          jsondata,
          searchParams
        );

        const orderedFilters = extractAndOrderFilters(
          searchParams,
          key,
          value,
          isUniversitySelected,
          crossL1Subject
        );
        setFilterState((prev: any) => ({
          ...prev,
          filterOrder: orderedFilters,
        }));

        const { urlParams, cookieParams } =
          constructSearchParams(orderedFilters);
        handleCookiesAndSession(cookieParams);
        const multiSelect =
          urlParams.toString()?.includes("+") ||
          urlParams.toString()?.includes("%2B");

        let domainPath = null;

        if (isQualificationChanged && !slug?.includes(value)) {
          domainPath = `/${value}-courses/${slug?.split("/")[2]}`;
        } else if (key === keyName?.university) {
          const uniSelected = searchParams
            ?.get(keyName?.university)
            ?.includes(value);
          domainPath = `/${slug?.split("/")?.[1]}/${uniSelected ? "search" : "csearch"}`;
        }

        const linkTagId = document?.getElementById(key + value);

        if (
          urlParams.toString() === searchParams.toString() &&
          !isQualificationChanged
        ) {
          router.refresh();
        } else if (linkTagId && isIndexed && !multiSelect) {
          window?.history?.pushState(
            null,
            "",
            `${linkTagId?.getAttribute("href")}`
              .replaceAll("%2B", "+")
              .replaceAll("%2C", ",")
          );
          linkTagId.click();
        } else {
          window?.history?.pushState(
            null,
            "",
            `${domainPath ?? ""}?${urlParams.toString()}`
              .replaceAll("%2B", "+")
              .replaceAll("%2C", ",")
          );

          router.push(
            `${domainPath ?? ""}?${urlParams.toString()}`
              .replaceAll("%2B", "+")
              .replaceAll("%2C", ",")
          );
        }
      }
      setrouterEnd(true);
    },
    []
  );

  const formUrl = useCallback(
    (key: string, value: string, isQualification?: boolean) => {
      const crossL1Subject = checkCrossL1Subject(
        key,
        value,
        jsondata,
        searchParams
      );
      const orderedFilters = extractAndOrderFilters(
        searchParams,
        key,
        value,
        isQualification,
        crossL1Subject
      );
      const urlParams = new URLSearchParams();
      let totalValues = 0;

      Object.entries(orderedFilters)?.forEach(([k, v]) => {
        if (totalValues + v?.split("+")?.length <= 4 && k !== "study-level") {
          urlParams?.set(k, v);
          totalValues += v?.split("+")?.length;
        }
      });
      let paramString = "";

      if (key === keyName?.subject) {
        const singleSubject = searchParams?.get(keyName?.subject)?.split(" ");

        if (singleSubject?.length === 1 && singleSubject[0] === value) {
          paramString = ``;
        } else {
          paramString = modifySearchParams(key, value, urlParams)?.toString();
        }
      } else {
        const urlObject = Object.fromEntries(urlParams?.entries());

        [keyName?.subject, keyName?.location]
          ?.filter(Boolean)
          ?.forEach((paramKey) => {
            if (urlObject[paramKey]) {
              urlObject[paramKey] = urlObject[paramKey]?.split("+")[0] || "";
            }
          });

        paramString = new URLSearchParams(urlObject)?.toString();
      }
      if (
        Object.keys(Object.fromEntries(searchParams.entries()))?.length >= 4 &&
        key !== keyName?.subject
      ) {
        paramString = `${searchParams?.get(keyName?.subject) ? `${keyName?.subject}=${searchParams?.get(keyName?.subject)}&` : ""}${key}=${value}`;
      }

      return paramString?.replaceAll("%2C", ",");
    },
    [searchParams, jsondata]
  );

  const containsSearchParam = useCallback(
    (key: string, value: string): boolean => {
      const temp = extractUrlAndSessionValues(searchParams, "", "")?.[
        key
      ]?.split("+");
      if (temp?.includes(value)) {
        return true;
      } else {
        return false;
      }
    },
    [searchParams, extractUrlAndSessionValues]
  );

  const parentSubjectList: any = Array.from(
    new Set(
      jsondata?.subjectFilterList
        ?.filter((items: any) => items?.parentSubject)
        ?.map((items: any) => items.parentSubject)
    )
  );

  const L2subjects = parentSubjectList?.map((item: any) => {
    const filteredSubjects = jsondata?.subjectFilterList?.filter(
      (subject: any) => subject?.parentSubject === item
    );
    return { parent: item, subjects: filteredSubjects };
  });

  const FirstLevelRegion = jsondata?.regionList
    ?.map((region: any) => {
      if (region?.parentRegionId == 1) return region;
    })
    ?.filter(Boolean);

  const subjectKeyWordSearch = (keyword: string) => {
    if (keyword?.length >= 3) {
      const filteredSubject = jsondata?.subjectFilterList?.filter(
        (subject: any) =>
          subject?.categoryDesc
            ?.toLowerCase()
            .startsWith(keyword?.toLowerCase())
      );
      setSubjectState((prev: any) => ({
        ...prev,
        subjectkeyword: keyword,
        isSujectDropdownOpen: true,
        sortedSubjects: filteredSubject,
      }));
    } else if (keyword?.length < 3) {
      setSubjectState((prev: any) => ({
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
      setUniversityState((prev: any) => ({
        ...prev,
        universityKeyword: keyword,
        isUniversityDropdownOpen: true,
        sortedUni: filteredUni,
      }));
    } else if (keyword?.length < 3) {
      setUniversityState((prev: any) => ({
        ...prev,
        universityKeyword: keyword,
        isUniversityDropdownOpen: false,
      }));
    }
  };

  const toggleLocationMiles = (milesDisplayName: string, distance: string) => {
    setLocationState((prev: any) => ({
      ...prev,
      isdropDownOpen: !prev?.isdropDownOpen,
      selectedMile: distance,
      mileDisplayName: milesDisplayName,
    }));
  };

  const subjectClicked = useCallback(
    (item: string, closeFilter?: boolean) => {
      setSubjectState((prev: any) => ({
        ...prev,
        isSubjectOpen: closeFilter || !prev?.isSubjectOpen,
      }));
      const L2subject = jsondata?.subjectFilterList?.filter(
        (items: any) => items?.parentSubject === item
      );
      setSubjectState((prev: any) => ({
        ...prev,
        isSujectDropdownOpen: false,
        selectedSubject: {
          parentSubject: item,
          subjectList: L2subject,
        },
      }));
    },
    [jsondata]
  );
  const postcodeSubmit = () => {
    const ukPostCodeRegx = /^([A-Z]{1,2}[0-9][0-9A-Z]?)\s?([0-9][A-Z]{2})$/i;
    const isValidPostcode = ukPostCodeRegx.test(locationState?.postCodeValue);
    if (locationState?.postCodeValue && isValidPostcode) {
      setLocationState((prev: any) => ({ ...prev, locationMilesError: false }));
      if (urlAndSession?.postcode !== locationState?.postCodeValue) {
        appendSearchParams("postcode", locationState?.postCodeValue);
      } else {
        alert("entered in else condition");
        appendSearchParams("distance", locationState?.selectedMile);
      }
    } else {
      setLocationState((prev: any) => ({ ...prev, locationMilesError: true }));
    }
  };

  const cityCheckBoxClicked = (cityTextKey: string) => {
    let appliedCities: any = getFilterValue(keyName?.location, searchParams);
    if (!Array.isArray(appliedCities)) {
      appliedCities = appliedCities ? [appliedCities] : [];
    }
    if (appliedCities.includes(cityTextKey)) {
      appliedCities = appliedCities?.filter(
        (cityItem: any) => cityItem !== cityTextKey
      );
    } else {
      appliedCities?.push(cityTextKey);
    }
    appendSearchParams("location", appliedCities?.join("+"));
  };
  return (
    <>
      <div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-grey-600 backdrop-blur-custom-1 opacity-[80%] z-10 
             ${
               filterState?.isFilterOpen
                 ? "animate-fadeIn block"
                 : "animate-fadeOut hidden"
             }
          `}
        ></div>

        <div
          className={`bg-white fixed top-0 left-0 w-full h-full z-10 transition-all duration-300 ease-in-out md:w-[768px] ${
            filterState?.isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={filterRef}
        >
          {filterState?.isFilterLoading && <FilterSpinner />}
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

          <>
            <div className="h-[calc(100%-215px)] overflow-y-auto custom-scrollbar-2 md:h-[calc(100%-213px)]">
              <Accordion
                title="Subject"
                id="#subject"
                defaultOpenStatus={
                  filterState?.selectedFilter === "all" ||
                  filterState?.selectedFilter === "subject"
                }
              >
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
                          (studyMethodChild: any, index: number) => (
                            <div
                              className="form-black flex relative"
                              key={index + 1}
                            >
                              <Link
                                id={
                                  keyName?.studyMethod +
                                  studyMethodChild?.studyMethodTextKey
                                }
                                href={{
                                  pathname: generatePathName(
                                    slug,
                                    keyName?.studyMethod
                                  ),
                                  query: formUrl(
                                    keyName?.studyMethod,
                                    studyMethodChild?.studyMethodTextKey
                                  ),
                                }}
                              ></Link>
                              <input
                                checked={
                                  prepopulateFilter?.studyMethod ==
                                  studyMethodChild?.studyMethodTextKey
                                }
                                onChange={() => {
                                  setPrepopulateFilter((prev: any) => ({
                                    ...prev,
                                    studyMethod:
                                      prev?.studyMethod ==
                                      studyMethodChild?.studyMethodTextKey
                                        ? ""
                                        : studyMethodChild?.studyMethodTextKey,
                                  }));
                                  appendSearchParams(
                                    keyName?.studyMethod,
                                    studyMethodChild?.studyMethodTextKey
                                  );
                                }}
                                type="checkbox"
                                id={studyMethodChild?.studyMethodDesc}
                                name={studyMethodChild?.studyMethodDesc}
                                className="rounded-[4px] outline-none absolute opacity-0"
                              />
                              <label
                                htmlFor={studyMethodChild?.studyMethodDesc}
                                className="btn btn-black-outline"
                              >
                                {studyMethodChild?.studyMethodDesc}
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
                          (studyModeChild: any, index: number) => (
                            <div
                              className="form-black flex relative"
                              key={index + 1}
                              id={studyModeChild?.studyModeTextKey}
                            >
                              <Link
                                id={
                                  keyName?.studyMode +
                                  studyModeChild?.studyModeTextKey
                                }
                                href={{
                                  pathname: generatePathName(
                                    slug,
                                    keyName?.studyMode
                                  ),
                                  query: formUrl(
                                    keyName?.studyMode,
                                    studyModeChild?.studyModeTextKey
                                  ),
                                }}
                              ></Link>
                              <input
                                type="checkbox"
                                checked={
                                  prepopulateFilter?.studyMode ==
                                  studyModeChild?.studyModeTextKey
                                }
                                onChange={() => {
                                  appendSearchParams(
                                    keyName?.studyMode,
                                    studyModeChild?.studyModeTextKey
                                  );
                                }}
                                className="rounded-[4px] outline-none absolute opacity-0"
                                id={studyModeChild?.studyModeDesc}
                                name={studyModeChild?.studyModeDesc}
                              />
                              <label
                                htmlFor={studyModeChild?.studyModeDesc}
                                className="btn btn-black-outline"
                              >
                                {studyModeChild?.studyModeDesc}
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
                          (qualChild: any, index: number) => (
                            <div
                              className="form-black flex relative"
                              key={index}
                            >
                              {slug?.split("/")[1] !==
                                `${qualChild?.qualTextKey}-courses` && (
                                <Link
                                  id={
                                    keyName?.studyLevel + qualChild?.qualTextKey
                                  }
                                  href={{
                                    pathname: `${process.env.PROJECT === "Whatuni" ? `/${qualChild?.qualTextKey}-courses/${slug?.split("/")[2]}` : "/pgs/search"}`,
                                    query: formUrl(
                                      keyName?.studyLevel,
                                      qualChild?.qualTextKey
                                    ),
                                  }}
                                ></Link>
                              )}
                              <input
                                checked={
                                  process.env.PROJECT === "Whatuni"
                                    ? slug?.split("/")[1] ===
                                      `${qualChild?.qualTextKey}-courses`
                                    : filterState?.filterOrder?.qualification ==
                                      qualChild?.qualTextKey
                                }
                                type="radio"
                                name="studylevel"
                                id={qualChild?.qualDisplayDesc}
                                value={qualChild?.qualDisplayDesc}
                                onChange={() => {
                                  appendSearchParams(
                                    keyName?.studyLevel,
                                    qualChild?.qualTextKey,
                                    false,
                                    true
                                  );
                                  {
                                    process.env.PROJECT === "Whatuni"
                                      ? appendSearchParams(
                                          keyName?.subject,
                                          qualChild?.subjectTextKey?.replaceAll(
                                            ",",
                                            "+"
                                          )
                                        )
                                      : "";
                                  }
                                }}
                                className="rounded-[4px] outline-none absolute opacity-0"
                              />
                              <label
                                htmlFor={qualChild?.qualDisplayDesc}
                                className="btn btn-black-outline"
                              >
                                {qualChild?.qualDisplayDesc}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {jsondata?.subjectFilterList?.length > 0 && (
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
                            value={subjectState?.subjectkeyword || ""}
                            onChange={(event) => {
                              subjectKeyWordSearch(event?.target?.value);
                            }}
                          />
                          {subjectState?.isSujectDropdownOpen && (
                            <div className="flex flex-col w-[calc(100%_+_26px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-13px] top-[33px] custom-scrollbar-2 max-h-[213px] overflow-y-auto">
                              <div className="px-[16px] py-[12px] cursor-pointer">
                                <p className="x-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">
                                  Keyword search for
                                </p>
                                <p
                                  className="small text-primary-400"
                                  onClick={() => {
                                    appendSearchParams(
                                      "q",
                                      subjectState?.subjectkeyword
                                    );
                                    setSubjectState((prev: any) => ({
                                      ...prev,
                                      isSujectDropdownOpen: false,
                                    }));
                                  }}
                                >
                                  '{subjectState?.subjectkeyword}'
                                </p>
                              </div>
                              {subjectState?.sortedSubjects?.length > 0 ? (
                                <ul>
                                  {subjectState?.sortedSubjects?.map(
                                    (subjects: any, index: number) => (
                                      <li
                                        key={index + 1}
                                        className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                                        onClick={() => {
                                          appendSearchParams(
                                            keyName?.subject,
                                            subjects?.subjectTextKey
                                          );
                                        }}
                                      >
                                        {subjects?.categoryDesc}
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
                      <div className="max-h-[200px] overflow-y-auto custom-scrollbar-2">
                        <div
                          className={`flex flex-col gap-[12px] transition-all duration-300 ease-in-out $
                      ${subjectState?.isSubjectOpen ? "-translate-x-full h-0 hidden" : "translate-x-0 h-auto"}
                      `}
                        >
                          {parentSubjectList?.map(
                            (l1Subjects: any, index: any) => (
                              <div
                                key={index}
                                onClick={() => {
                                  subjectClicked(l1Subjects, true);
                                }}
                                className="flex items-center gap-[4px] text-blue-400 small font-semibold cursor-pointer hover:underline"
                              >
                                {l1Subjects}
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
                            )
                          )}
                        </div>
                        <div
                          className={`
                        bg-white transition-all duration-300 ease-in-out
                        ${subjectState?.isSubjectOpen ? "translate-x-0" : "-translate-x-full"}
                      `}
                        >
                          {L2subjects?.map((subjects: any, index: number) => (
                            <L2subjectList
                              key={index}
                              subjectsArray={subjects}
                              selectedSubject={subjectState?.selectedSubject}
                              isIndexed={isIndexed}
                              isSubjectOpen={subjectState?.isSubjectOpen}
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
                  )}
                </div>
              </Accordion>
              {(jsondata?.intakeYearDetails?.intakeYearList?.length > 0 ||
                jsondata?.intakeYearDetails?.intakeMonthList?.length > 0) && (
                <Accordion
                  id="#year"
                  title="Intake year"
                  defaultOpenStatus={
                    filterState?.selectedFilter === "all" ||
                    filterState?.selectedFilter === "year"
                  }
                >
                  <div className="flex flex-col gap-[8px] p-[8px_0_0]">
                    <div className="x-small font-semibold text-black uppercase">
                      Choose YEAR & MONTH
                    </div>
                    <div className="flex flex-wrap gap-x-[4px] gap-y-[8px]">
                      {jsondata?.intakeYearDetails?.intakeYearList?.map(
                        (yearItem: any, index: number) => (
                          <div className="form-black flex relative" key={index}>
                            <input
                              checked={true}
                              onChange={() => {}}
                              readOnly={true}
                              type="checkbox"
                              name={yearItem?.year}
                              className="rounded-[4px] outline-none absolute opacity-0"
                              id={yearItem?.year}
                            />
                            <label
                              htmlFor={yearItem?.year}
                              className="btn btn-black-outline"
                            >
                              {yearItem?.year}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-[4px] gap-y-[8px]">
                      {jsondata?.intakeYearDetails?.intakeMonthList?.map(
                        (monthItem: any, index: any) => (
                          <div className="form-black flex relative" key={index}>
                            <Link
                              id={keyName?.month + monthItem?.month}
                              href={{
                                pathname: generatePathName(
                                  slug,
                                  keyName?.month
                                ),
                                query: formUrl(
                                  keyName?.month,
                                  `${monthItem?.month}`
                                ),
                              }}
                            ></Link>
                            <input
                              checked={
                                prepopulateFilter?.month == monthItem?.month
                              }
                              onChange={() => {
                                appendSearchParams(
                                  keyName?.month,
                                  monthItem?.month
                                );
                                setPrepopulateFilter((prev: any) => ({
                                  ...prev,
                                  month:
                                    prev?.month == monthItem?.month
                                      ? ""
                                      : monthItem?.month,
                                }));
                              }}
                              type="checkbox"
                              name={monthItem?.month}
                              className="rounded-[4px] outline-none absolute opacity-0"
                              id={monthItem?.month}
                            />
                            <label
                              htmlFor={monthItem?.month}
                              className="btn btn-black-outline min-w-[53px] py-[5px]"
                            >
                              {monthItem?.month}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Accordion>
              )}
              {jsondata?.universityFilterList?.length > 0 && (
                <Accordion
                  title="University"
                  id="#university"
                  defaultOpenStatus={
                    filterState?.selectedFilter === "university" ||
                    filterState?.selectedFilter === "all"
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
                          value={universityState?.universityKeyword || ""}
                        />
                        {universityState?.isUniversityDropdownOpen && (
                          <div className="flex flex-col w-[calc(100%_+_26px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-13px] top-[33px] custom-scrollbar-2 max-h-[213px] overflow-y-auto">
                            <div className="px-[16px] py-[12px] cursor-pointer">
                              <p className="x-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">
                                Keyword search for
                              </p>
                              <p
                                className="small text-primary-400"
                                onClick={() => {}}
                              >
                                '{universityState?.universityKeyword}'
                              </p>
                            </div>
                            <div className="w-fit x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-grey-100">
                              University
                            </div>
                            {universityState?.sortedUni?.length > 0 ? (
                              <ul>
                                {universityState?.sortedUni?.map(
                                  (sortedUniItem: any, index: number) => (
                                    <li
                                      key={index + 1}
                                      className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                                      onClick={() => {
                                        appendSearchParams(
                                          keyName?.university,
                                          sortedUniItem?.collegeTextKey
                                        );
                                      }}
                                    >
                                      {sortedUniItem?.collegeNameDisplay}
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
                    <div className="max-h-[200px] overflow-y-auto custom-scrollbar-2">
                      <div
                        className={`flex flex-col gap-[12px] transition-all duration-300 ease-in-out ${
                          universityState?.isUniversityOpen
                            ? "-translate-x-full h-0 hidden"
                            : "translate-x-0 h-auto"
                        }`}
                      >
                        {universitiesList?.map(
                          (uniItem: any, index: number) => (
                            <div
                              key={index}
                              onClick={() => {
                                universityClicked(
                                  uniItem?.displayHeading,
                                  uniItem?.id,
                                  true
                                );
                              }}
                              className="flex items-center gap-[4px] text-blue-400 small font-semibold cursor-pointer hover:underline"
                            >
                              {uniItem?.name}
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
                          )
                        )}
                      </div>

                      <div
                        className={`bg-white transition-all duration-300 ease-in-out 
                      ${
                        universityState?.isUniversityOpen
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }
                    `}
                      >
                        {universitiesList?.map(
                          (university: any, index: number) => (
                            <SelectedUniversity
                              key={index + 1}
                              isUniversityOpen={
                                universityState?.isUniversityOpen
                              }
                              prepopulateFilter={prepopulateFilter}
                              setPrepopulateFilter={setPrepopulateFilter}
                              universityClicked={universityClicked}
                              id={university?.id}
                              appendSearchParams={appendSearchParams}
                              formUrl={formUrl}
                              selectedId={universityState?.selectUniId}
                              universityList={university?.unilist}
                              slug={slug}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Accordion>
              )}
              {(jsondata?.cityList?.length > 0 ||
                jsondata?.regionList?.length > 0) && (
                <>
                  {slug?.split("/")[2] === "search" && (
                    <Accordion
                      title="Location"
                      id="#location"
                      defaultOpenStatus={
                        filterState?.selectedFilter === "all" ||
                        filterState?.selectedFilter === "location"
                      }
                    >
                      <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[8px] pt-[24px]">
                          <div className="font-semibold">
                            Distance from home
                          </div>
                          <div className="flex flex-col gap-[16px]">
                            <div className="bg-white rounded-[24px] w-full p-[16px] border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:pl-[24px] md:p-[4px] md:w-[508px]">
                              <div className="flex flex-col gap-[24px] small md:flex-row md:items-center md:gap-[10px]">
                                <div className="relative shrink-0">
                                  <button
                                    onClick={() => {
                                      toggleLocationMiles(
                                        locationState?.mileDisplayName,
                                        locationState?.selectedMile
                                      );
                                    }}
                                    className="relative shrink-0 w-full flex items-center justify-between gap-[4px] pr-0 text-black md:w-[146px] md:pr-[16  px]"
                                    type="button"
                                  >
                                    Range: {locationState?.mileDisplayName}
                                    <Image
                                      src="/static/assets/icons/arrow_down_black.svg"
                                      width="20"
                                      height="20"
                                      alt="Search icon"
                                    />
                                  </button>
                                  {locationState?.isdropDownOpen && (
                                    <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute left-[-16px] top-[33px] w-[calc(100%+32px)] md:w-[calc(100%+16px)]">
                                      <ul>
                                        {locationMilesArray?.map(
                                          (mileItem, index) => (
                                            <li
                                              key={index + 1}
                                              onClick={() => {
                                                toggleLocationMiles(
                                                  mileItem?.miles,
                                                  mileItem?.distance
                                                );
                                              }}
                                              className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                                            >
                                              {mileItem?.miles}
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
                                    value={locationState?.postCodeValue || ""}
                                    onChange={(event) => {
                                      postCodeChange(event.target.value);
                                    }}
                                  />
                                </div>
                                <button
                                  onClick={postcodeSubmit}
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
                            {locationState?.locationMilesError && (
                              <p className="small text-negative-default">
                                Please enter valid postcode
                              </p>
                            )}
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
                              onClick={getUserLocation}
                              className="small text-blue-400 hover:underline"
                            >
                              Use current location
                            </div>
                          </div>
                        </div>
                        {(jsondata?.regionList?.length > 0 ||
                          jsondata?.cityList?.length > 0) && (
                          <div className="flex flex-col gap-[4px] ">
                            <div className="text-para-lg font-semibold">
                              Region
                            </div>
                            <div className="x-small font-semibold text-black uppercase">
                              Choose one or more
                            </div>
                            <ul
                              className={`pt-[12px] ${selectedLocationType?.type === "city" ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              <li>
                                {FirstLevelRegion?.map(
                                  (regionItem: any, index: number) => (
                                    <Regions
                                      containsSearchParam={containsSearchParam}
                                      selectedLocationType={
                                        selectedLocationType
                                      }
                                      key={index + 1}
                                      item={regionItem}
                                      regionListData={jsondata?.regionList}
                                      slug={slug}
                                      formUrl={formUrl}
                                      appendSearchParams={appendSearchParams}
                                    />
                                  )
                                )}
                              </li>
                            </ul>
                          </div>
                        )}
                        {jsondata?.cityList && (
                          <div className="flex flex-col gap-[4px]">
                            <div className="text-para-lg font-semibold">
                              City
                            </div>
                            <div className="x-small font-semibold text-black uppercase">
                              Choose one or more
                            </div>
                            <div
                              className={`grid grid-cols-1 gap-[12px] sm:grid-cols-2 ${selectedLocationType?.type === "region" ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              {jsondata?.cityList?.map(
                                (cityItem: any, index: number) => (
                                  <div
                                    className="form_check relative"
                                    key={index}
                                  >
                                    <div className="flex items-start gap-[8px]">
                                      <div className="checkbox_card">
                                        <Link
                                          id={
                                            keyName?.location +
                                            cityItem?.cityTextKey
                                          }
                                          href={{
                                            pathname: generatePathName(
                                              slug,
                                              keyName?.location
                                            ),
                                            query: formUrl(
                                              keyName?.location,
                                              cityItem?.cityTextKey
                                            ),
                                          }}
                                        ></Link>
                                        <input
                                          disabled={
                                            selectedLocationType?.type ===
                                            "region"
                                          }
                                          type="checkbox"
                                          checked={
                                            prepopulateFilter?.location?.includes(
                                              cityItem?.cityTextKey
                                            ) || false
                                          }
                                          onChange={() => {
                                            cityCheckBoxClicked(
                                              cityItem?.cityTextKey
                                            );
                                            setPrepopulateFilter(
                                              (prev: any) => ({
                                                ...prev,
                                                city:
                                                  prev?.city ==
                                                  cityItem?.cityTextKey
                                                    ? ""
                                                    : cityItem?.cityTextKey,
                                              })
                                            );
                                          }}
                                          className="form-checkbox hidden"
                                          id={cityItem?.cityName}
                                          name={cityItem?.cityName}
                                        />
                                        <label
                                          htmlFor={cityItem?.cityName}
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
                                        htmlFor={cityItem?.cityName}
                                        className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                      >
                                        {cityItem?.cityName}
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
                              Choose one
                            </div>
                            <div className="flex items-center gap-[8px]">
                              {jsondata?.uniLocationTypeList?.map(
                                (uniLocationTypeItem: any, index: number) => (
                                  <div
                                    className="form-black flex relative"
                                    key={index}
                                  >
                                    <Link
                                      id={
                                        keyName?.locationType +
                                        uniLocationTypeItem?.locTypeTextKey
                                      }
                                      href={{
                                        pathname: generatePathName(
                                          slug,
                                          keyName?.locationType
                                        ),
                                        query: formUrl(
                                          keyName?.locationType,
                                          uniLocationTypeItem?.locTypeTextKey
                                        ),
                                      }}
                                    ></Link>
                                    <input
                                      type="checkbox"
                                      checked={
                                        prepopulateFilter?.locationType ==
                                        uniLocationTypeItem?.locTypeTextKey
                                      }
                                      onChange={() => {
                                        appendSearchParams(
                                          keyName?.locationType,
                                          uniLocationTypeItem?.locTypeTextKey
                                        );
                                        setPrepopulateFilter((prev: any) => {
                                          const isSelected =
                                            prev?.locationType ===
                                            uniLocationTypeItem?.locTypeTextKey;
                                          return {
                                            ...prev,
                                            locationType: isSelected
                                              ? ""
                                              : uniLocationTypeItem?.locTypeTextKey,
                                          };
                                        });
                                      }}
                                      name={uniLocationTypeItem?.locTypeDesc}
                                      className="rounded-[4px] outline-none absolute opacity-0"
                                      id={uniLocationTypeItem?.locTypeDesc}
                                      value={uniLocationTypeItem?.locTypeDesc}
                                    />
                                    <label
                                      htmlFor={uniLocationTypeItem?.locTypeDesc}
                                      className="btn btn-black-outline"
                                    >
                                      {uniLocationTypeItem?.locTypeDesc}
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
                </>
              )}
              {slug?.split("/")[2] === "search" && (
                <>
                  {jsondata?.universityGroupList?.length > 0 && (
                    <Accordion
                      title="University group"
                      defaultOpenStatus={
                        filterState?.selectedFilter === "all" || false
                      }
                    >
                      <div className="flex flex-col gap-[8px] pt-[24px]">
                        <div className="x-small font-semibold text-black uppercase">
                          Choose one
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          {jsondata?.universityGroupList?.map(
                            (uniGroupListItem: any, index: number) => (
                              <div className="form_check relative" key={index}>
                                <div className="flex items-start gap-[8px]">
                                  <div className="checkbox_card">
                                    <Link
                                      id={
                                        keyName?.russellGroup +
                                        uniGroupListItem?.universityGroupTextKey
                                      }
                                      href={{
                                        pathname: generatePathName(
                                          slug,
                                          keyName?.russellGroup
                                        ),
                                        query: formUrl(
                                          keyName?.russellGroup,
                                          uniGroupListItem?.universityGroupTextKey
                                        ),
                                      }}
                                    ></Link>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox hidden"
                                      id={uniGroupListItem?.universityGroupDesc}
                                      checked={
                                        prepopulateFilter?.russellGroup ===
                                        uniGroupListItem?.universityGroupTextKey
                                      }
                                      onChange={() => {
                                        appendSearchParams(
                                          keyName?.russellGroup,
                                          uniGroupListItem?.universityGroupTextKey
                                        );
                                        setPrepopulateFilter((prev: any) => ({
                                          ...prev,
                                          russellGroup:
                                            prev?.russellGroup ==
                                            uniGroupListItem?.universityGroupTextKey
                                              ? ""
                                              : uniGroupListItem?.universityGroupTextKey,
                                        }));
                                      }}
                                    />
                                    <label
                                      htmlFor={
                                        uniGroupListItem?.universityGroupDesc
                                      }
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
                                    htmlFor={
                                      uniGroupListItem?.universityGroupDesc
                                    }
                                    className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                  >
                                    {uniGroupListItem?.universityGroupDesc}
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
                <div
                  onClick={clearFilter}
                  aria-label="reset filters"
                  className="text-primary-400 font-semibold"
                >
                  Clear
                </div>
              </div>
              <button
                className="bg-primary-400 text-white rounded-[24px] py-[10px] px-[16px] font-semibold min-w-[200px] hover:bg-primary-500 md:w-[344px]"
                onClick={ShowResults}
              >
                Show all {courseCount?.courseCount} results
              </button>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default SearchFilterComponent;

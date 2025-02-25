"use client";
type KeyValueObject = Record<string, string>;
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import { useSearchParams, usePathname } from "next/navigation";
import {
  getFilterPriority,
  isSingleSelection,
} from "@packages/lib/utlils/result-filters";
import { extractUrlAndCookieValues } from "@packages/lib/utlils/result-filters";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../accordion/accordion";
import { locationMilesArray } from "@packages/lib/utlils/result-filters";
import L2subjectList from "@packages/shared-components/sr-page/SrFilter/L2subjectList";
import SelectedUniversity from "@packages/shared-components/sr-page/SrFilter/selecteduniversity";
const SearchFilterComponent = ({ jsondata, path }: any) => {
  const [slug, setslug] = useState(path || "degree-courses/search");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isIndexed, setIsIndexed] = useState(true);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState({
    ParentSubject: "",
    SubjectList: "",
  });
  const [universityList, setUniversityList] = useState({
    sortingCat: "",
    uniList: [],
  });
  const [selectedFilter, SetselectedFilter] = useState<
    null | undefined | string
  >(null);
  useEffect(() => {
    const value = isSingleSelection(searchParams);
    setIsIndexed(value);
    if (pathname) {
      setslug(pathname);
    }
  }, [searchParams, router]);

  useEffect(() => {
    const handleTogglePopup = (eventName: string | null | undefined) => {
      const element = document.getElementById(`#${eventName}`);
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
  const universitiesSortingList = [
    { name: "Universities A - C", sortingValue: "A-C" },
    { name: "Universities D - H", sortingValue: "D-H" },
    { name: "Universities I - M", sortingValue: "I-M" },
    { name: "Universities N - P", sortingValue: "N-P" },
    { name: "Universities Q - U", sortingValue: "Q-U" },
    { name: "Universities V - Z", sortingValue: "V-Z" },
  ];
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const universityClicked = (sortingValue: string) => {
    setIsUniversityOpen(!isUniversityOpen);
    if (sortingValue === "") {
      return;
    }
    const regex = new RegExp(`^[${sortingValue}]`, "i");
    const sortedUni = jsondata?.universityFilterList?.filter(
      (collegeItem: any) => regex.test(collegeItem?.collegeName)
    );
    setUniversityList({ sortingCat: sortingValue, uniList: sortedUni });
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
      filterRef.current.scrollTop = filterRef?.current?.scrollHeight;
    }
  }, [isFilterOpen]);
  const ShowResults = () => {
    setIsFilterOpen(false);
  };

  let isUpdating = false;
  const appendSearchParams = async (key: string, value: string) => {
    if (isUpdating) return;
    isUpdating = true;
    setTimeout(() => {
      const filters = extractUrlAndCookieValues(searchParams, key, value);
      const orderedFilters = getFilterPriority().reduce((acc, priorityKey) => {
        if (filters[priorityKey]) acc[priorityKey] = filters[priorityKey];
        return acc;
      }, {} as KeyValueObject);
      const urlParams = new URLSearchParams();
      const cookieParams: KeyValueObject = {};
      let totalValues = 0;
      Object.entries(orderedFilters).forEach(([k, v]) => {
        const valuesArray = v.split(",");
        if (totalValues + valuesArray.length <= 4) {
          urlParams.set(k, valuesArray.join(","));
          totalValues += valuesArray.length;
        } else {
          const allowedValues = valuesArray.slice(0, 4 - totalValues);
          const remainingValues = valuesArray.slice(4 - totalValues);
          if (allowedValues.length > 0) {
            urlParams.set(k, allowedValues.join(","));
            totalValues += allowedValues.length;
          }
          if (remainingValues.length > 0) {
            cookieParams[k] = remainingValues.join(",");
          }
        }
      });
      const multiSelect =
        urlParams?.toString()?.includes("+") ||
        urlParams?.toString()?.includes("%2C");

      if (urlParams?.toString() === searchParams?.toString()) {
        alert("entered in 1");
        document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
        router.refresh();
      } else if (multiSelect) {
        alert("entered in 2");
        document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
        router.push(urlParams.toString());
      } else {
        alert("entered in 3");
        document.cookie = `filter_param=${JSON.stringify(cookieParams)}; path=/;`;
        const linkTagId = document.getElementById(key + value);
        if (linkTagId) {
          linkTagId.click();
        }
      }
      isUpdating = false;
    }, 0);
  };

  const formUrl = (key: string, value: string, isQualification?: boolean) => {
    const filters = extractUrlAndCookieValues(searchParams, key, value);
    const orderedFilters = getFilterPriority().reduce((acc, priorityKey) => {
      if (filters[priorityKey]) acc[priorityKey] = filters[priorityKey];
      return acc;
    }, {} as KeyValueObject);
    const urlParams = new URLSearchParams();
    let totalValues = 0;
    const a = Object.fromEntries(searchParams.entries());
    const count = Object.keys(a).length;
    Object.entries(orderedFilters).forEach(([k, v]) => {
      const valuesArray = v.split(",");
      if (totalValues + valuesArray.length <= 4) {
        if (k != "study-level") {
          urlParams.set(k, valuesArray.join(","));
          totalValues += valuesArray.length;
        }
      }
    });
    if (count >= 4) {
      return `${process.env.PROJECT === "Whatuni" ? "subject" : "course"}=${
        process.env.PROJECT === "Whatuni"
          ? searchParams?.get("subject")
          : searchParams?.get("course")
      }&${key}=${value}`;
    } else {
      return `${urlParams.toString()}`;
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
  const ParentSubject: any = [...parentSubjectSet];

  const studyMethodList = {
    studyMethodList: [
      {
        studyMethodDesc: "Online",
        studyMethodTextKey: "online",
        selectedFlag: "N",
      },
    ],
  };
  const subjectClicked = (item: string) => {
    if (item === "") {
      setIsSubjectOpen(!isSubjectOpen);
      return;
    }
    setIsSubjectOpen(!isSubjectOpen);
    const L2subject = jsondata?.subjectFilterList?.filter((items: any) => {
      return items.parentSubject == item;
    });
    setSelectedSubject({ ParentSubject: item, SubjectList: L2subject });
  };
  return <div>searchfiltercomponent</div>;
};

export default SearchFilterComponent;

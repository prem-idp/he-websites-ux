"use client";
import { getUserLocationInfo } from "@packages/lib/server-actions/server-action";
type KeyValueObject = Record<string, string>;
const getFilterPriority = (isQualification?: boolean) => {
  const whatuniFilters = [
    "subject",
    "study-level",
    "qualification",
    "location",
    "region",
    "city",
    "study-method",
    "study-mode",
    "year",
    "university",
    "month",
    "distance-from-home",
    "university-group",
    "location-type",
    "pageno",
  ];
  const pgsFilters = [
    "course",
    "study_level",
    "qualification",
    "location",
    "region",
    "city",
    "study_method",
    "study_mode",
    "year",
    "university",
    "month",
    "distance_from_home",
    "university_group",
    "location_type",
    "page_no",
  ];
  const whatuniPrFilters = [
    "university",
    "subject",
    "study-level",
    "qualification",
    "location",
    "region",
    "city",
    "study-method",
    "study-mode",
    "year",
    "month",
    "distance-from-home",
    "university-group",
    "location-type",
    "pageno",
  ];
  const pgsPrFilters = [
    "university",
    "course",
    "study_level",
    "qualification",
    "location",
    "region",
    "city",
    "study_method",
    "study_mode",
    "year",
    "month",
    "distance_from_home",
    "university_group",
    "location_type",
    "page_no",
  ];
  if (process.env.PROJECT === "Whatuni" && isQualification) {
    return [...whatuniPrFilters];
  } else if (process.env.PROJECT === "Whatuni" && !isQualification) {
    return [...whatuniFilters];
  } else if (process.env.PROJECT === "Pgs" && isQualification) {
    return [...pgsPrFilters];
  } else {
    return [...pgsFilters];
  }
};

const extractUrlAndCookieValues = (
  searchParams: URLSearchParams,
  key: string,
  value: string,
  crossSubject?: boolean
): KeyValueObject => {
  const paramsObject = Object.fromEntries(searchParams.entries());
  const cookieObject: KeyValueObject = JSON.parse(
    getDecodedCookie("filter_param") || "{}"
  );
  const mergedObject = mergeTwoObjects(paramsObject, cookieObject);
  if (crossSubject) {
    if (process.env.PROJECT === "Whatuni") {
      delete mergedObject?.subject;
    } else {
      delete mergedObject?.course;
    }
  }
  if (mergedObject[key]) {
    let valuesSet = new Set(mergedObject[key].split(","));
    if (valuesSet.has(value)) {
      valuesSet.delete(value);
    } else if (key === "subject" || key === "location") {
      valuesSet.add(value);
    } else {
      valuesSet = new Set(`${value}`.split(","));
    }
    mergedObject[key] = Array.from(valuesSet).join(",");
    if (!mergedObject[key]) delete mergedObject[key];
  } else {
    mergedObject[key] = value;
  }
  return mergedObject;
};

const getDecodedCookie = (name: string) => {
  if (typeof document === "undefined") return null;
  const cookie = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith(name + "="));
  return cookie ? cookie.split("=")[1].trim() || null : null;
};

const mergeTwoObjects = (
  paramsObject: KeyValueObject,
  cookieObject: KeyValueObject = {}
): KeyValueObject => {
  return {
    ...paramsObject,
    ...Object.fromEntries(
      Object.entries(cookieObject).map(([k, v]) => [
        k,
        paramsObject[k]
          ? Array.from(
              new Set([...paramsObject[k].split(","), ...v.split(",")])
            ).join(",")
          : v,
      ])
    ),
  };
};

const isSingleSelection = (searchParams: URLSearchParams): boolean => {
  const entriesArray = Array.from(searchParams.entries());
  for (const [key, value] of entriesArray) {
    const decodedValue = decodeURIComponent(value);
    if (
      decodedValue.includes(",") ||
      decodedValue.includes("+") ||
      decodedValue.includes(" ")
    ) {
      return false;
    }
  }
  return true;
};

const locationMilesArray = [
  { miles: "5 miles" },
  { miles: "10 miles" },
  { miles: "25 miles" },
  { miles: "50 miles" },
];
const getParentSubject = (
  searchParams: any,
  jsondata: any,
  subjectTextKey?: any
) => {
  if (searchParams) {
    const sub =
      searchParams?.get("subject") || searchParams?.get("course") || "";
    const arr = sub?.split(",");
    const parents: any = arr?.map((selectedSub: string) => {
      const getParent = jsondata?.subjectFilterList?.map((items: any) => {
        if (selectedSub == items?.subjectTextKey) {
          return items?.parentSubject;
        }
      });
      return getParent?.filter(Boolean);
    });
    return parents?.flat()[0];
  } else {
    if (subjectTextKey) {
      const parent = jsondata?.subjectFilterList
        ?.map((subjects: any) => {
          if (subjects?.subjectTextKey == subjectTextKey) {
            return subjects?.parentSubject;
          }
        })
        ?.filter(Boolean);
      return `${parent}`;
    }
  }
};

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const data = getUserLocationInfo(latitude, longitude);
        console.log({ data });
        return data;
      },
      (error) => {
        console.warn("Location access denied or unavailable", error);
      }
    );
  } else {
    console.warn("Geolocation is not supported by your browser.");
  }
}

export {
  locationMilesArray,
  getUserLocation,
  mergeTwoObjects,
  isSingleSelection,
  getDecodedCookie,
  getFilterPriority,
  getParentSubject,
  extractUrlAndCookieValues,
};

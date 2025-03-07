"use client";
import { getUserLocationInfo } from "@packages/lib/server-actions/server-action";
type KeyValueObject = Record<string, string>;
const getFilterPriority = (isQualification?: boolean) => {
  const whatuniFilters = [
    "subject",
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
    "score",
    "location-type",
    "pageno",
    "russell-group",
    "sort",
  ];
  const pgsFilters = [
    "course",
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
    "score",
    "location_type",
    "page_no",
    "russell_group",
    "sort",
  ];
  const whatuniPrFilters = [
    "university",
    "subject",
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
    "score",
    "location-type",
    "pageno",
    "sort",
  ];
  const pgsPrFilters = [
    "university",
    "course",
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
    "score",
    "location_type",
    "page_no",
    "sort",
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
  const queryString = searchParams?.toString();
  const paramsObject = queryString.split("&").reduce((acc: any, param: any) => {
    const [key, value] = param.split("=");
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
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
  if (mergedObject[key] && key != "location") {
    let valuesSet = new Set(mergedObject[key].split("+"));
    if (valuesSet.has(value)) {
      valuesSet.delete(value);
    } else if (key === "subject" || key === "location") {
      valuesSet.add(value);
    } else {
      valuesSet = new Set(`${value}`.split("+"));
    }
    mergedObject[key] = Array.from(valuesSet).join("+");
    if (!mergedObject[key]) delete mergedObject[key];
  } else if (key == "location") {
    mergedObject[key] = value;
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
              new Set([...paramsObject[k]?.split("+"), ...v?.split("+")])
            ).join("+")
          : v,
      ])
    ),
  };
};

const isSingleSelection = (searchParams: URLSearchParams): boolean => {
  const entriesArray = Array.from(searchParams.entries());
  console.log(entriesArray);
  for (const [key, value] of entriesArray) {
    const decodedValue = decodeURIComponent(value);
    if (decodedValue.includes("+") || decodedValue.includes(" ")) {
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
    const arr = sub?.split(" ");
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
function heirarchicalLocation(regions: any) {
  const regionMap = new Map();
  regions.forEach((region: any) => {
    regionMap.set(region.regionId, { ...region, children: [] });
  });
  const root: any = [];
  regions.forEach((region: any) => {
    if (region.parentRegionId) {
      const parent = regionMap.get(region.parentRegionId);
      if (parent) {
        parent.children.push(regionMap.get(region.regionId));
      }
    } else {
      root.push(regionMap.get(region.regionId));
    }
  });
  return root;
}
export {
  locationMilesArray,
  heirarchicalLocation,
  getUserLocation,
  mergeTwoObjects,
  isSingleSelection,
  getDecodedCookie,
  getFilterPriority,
  getParentSubject,
  extractUrlAndCookieValues,
};

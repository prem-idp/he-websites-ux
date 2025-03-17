"use client";
import { getUserLocationInfo } from "@packages/lib/server-actions/server-action";
type KeyValueObject = Record<string, string>;
const getFilterPriority = (isQualification?: boolean) => {
  const whatuniFilters = [
    "university",
    "subject",
    "qualification",
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
    "russell-group",
    "sort",
    "postcode",
  ];
  const pgsFilters = [
    "university",
    "course",
    "qualification",
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
    "russell_group",
    "sort",
    "postcode",
  ];
  const whatuniPrFilters = [
    "university",
    "subject",
    "qualification",
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
    "sort",
    "postcode",
  ];
  const pgsPrFilters = [
    "university",
    "course",
    "qualification",
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
    "sort",
    "postcode",
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

  const sessionObject: KeyValueObject =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("filter_param") || "{}")
      : {};
  const mergedObject = mergeTwoObjects(paramsObject, sessionObject);
  if (crossSubject) {
    if (process.env.PROJECT === "Whatuni") {
      delete mergedObject?.subject;
    } else {
      delete mergedObject?.course;
    }
  }
  if (mergedObject[key] && key != "region") {
    let valuesSet = new Set(mergedObject[key].split("+"));
    if (valuesSet.has(value)) {
      valuesSet.delete(value);
    } else if (key === "subject") {
      valuesSet.add(value);
    } else {
      valuesSet = new Set(`${value}`.split("+"));
    }
    mergedObject[key] = Array.from(valuesSet).join("+");
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
  sessionObject: KeyValueObject = {}
): KeyValueObject => {
  return {
    ...paramsObject,
    ...Object.fromEntries(
      Object.entries(sessionObject).map(([k, v]) => [
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
  for (const [key, value] of entriesArray) {
    const decodedValue = decodeURIComponent(value);
    if (decodedValue.includes("+") || decodedValue.includes(" ")) {
      return false;
    }
  }
  return true;
};

const locationMilesArray = [
  { miles: "Any distance", distance: "" },
  { miles: "20 miles", distance: "20" },
  { miles: "50 miles", distance: "50" },
  { miles: "100 miles", distance: "100" },
  { miles: "200 miles", distance: "200" },
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

function hierarchicalLocation(regions: any) {
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
      return;
    }
  });
  regions.forEach((region: any) => {
    if (
      region.parentRegionId &&
      !regions.some((r: any) => r.regionId === region.parentRegionId)
    ) {
      root.push(regionMap.get(region.regionId));
    }
  });
  return root;
}

export {
  locationMilesArray,
  hierarchicalLocation,
  getUserLocation,
  mergeTwoObjects,
  isSingleSelection,
  getDecodedCookie,
  getFilterPriority,
  getParentSubject,
  extractUrlAndCookieValues,
};

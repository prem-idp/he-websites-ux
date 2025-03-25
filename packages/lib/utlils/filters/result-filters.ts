"use client";
import { getUserLocationInfo } from "@packages/lib/server-actions/server-action";
import { KeyNames } from "./filterJson";
const keyName = KeyNames();
type KeyValueObject = Record<string, string>;
const getFilterPriority = (isQualification?: boolean) => {
  const whatunifilter = [
    "university",
    "q",
    "subject",
    "qualification",
    "location",
    "study-method",
    "study-mode",
    "year",
    "month",
    "distance",
    "postcode",
    "university-group",
    "score",
    "location-type",
  ];
  const pgsFilter = [
    "university",
    "keyword",
    "course",
    "qualification",
    "location",
    "study_method",
    "study_mode",
    "year",
    "month",
    "distance",
    "postcode",
    "university_group",
    "score",
    "location_type",
  ];
  const whatuniSrFilters = [
    ...whatunifilter,
    "russell-group",
    "sort",
    "postcode",
  ];
  const whatuniPrFilters = [...whatunifilter, "sort", "postcode"];
  const pgsSrFilters = [...pgsFilter, "russell_group", "sort", "postcode"];
  const pgsPrFilters = [...pgsFilter, "sort", "postcode"];
  if (process.env.PROJECT === "Whatuni" && isQualification) {
    return [...whatuniPrFilters];
  } else if (process.env.PROJECT === "Whatuni" && !isQualification) {
    return [...whatuniSrFilters];
  } else if (process.env.PROJECT === "Pgs" && isQualification) {
    return [...pgsPrFilters];
  } else {
    return [...pgsSrFilters];
  }
};

const extractUrlAndSessionValues = (
  searchParams: URLSearchParams,
  key: string,
  value: string,
  crossSubject?: boolean
): KeyValueObject => {
  const queryString = searchParams?.toString();
  const paramsObject = queryString
    ?.split("&")
    ?.reduce((acc: any, param: any) => {
      const [key, value] = param?.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});

  const sessionObject: KeyValueObject =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage?.getItem("filter_param") || "{}")
      : {};
  const mergedObject = mergeTwoObjects(paramsObject, sessionObject);

  if (crossSubject || key == "q") {
    if (typeof mergedObject === "object" && mergedObject !== null) {
      delete mergedObject[keyName?.subject];
    }
  }
  if (mergedObject[key] && key != keyName?.location) {
    let valuesSet = new Set(mergedObject[key]?.split("+"));
    if (valuesSet.has(value)) {
      valuesSet.delete(value);
    } else if (key === keyName?.subject) {
      valuesSet.add(value);
    } else {
      valuesSet = new Set(`${value}`?.split("+"));
    }
    mergedObject[key] = Array.from(valuesSet)?.join("+");
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
    ?.find((row) => row?.startsWith(name + "="));
  return cookie ? cookie.split("=")[1]?.trim() || null : null;
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
            )?.join("+")
          : v,
      ])
    ),
  };
};

const isSingleSelection = (searchParams: URLSearchParams): boolean => {
  const entriesArray = Array.from(searchParams.entries());
  for (const [_, value] of entriesArray) {
    const decodedValue = decodeURIComponent(value);
    if (decodedValue.includes("+") || decodedValue.includes(" ")) {
      return false;
    }
  }
  return true;
};

const locationMilesArray = [
  { miles: "Any distance", distance: "any" },
  { miles: "20 miles", distance: "20" },
  { miles: "50 miles", distance: "50" },
  { miles: "100 miles", distance: "100" },
  { miles: "200 miles", distance: "200" },
];

const uniSortingMockData = [
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
];

const getFilterValue = (key: string, searchParams: URLSearchParams): string => {
  const sessionFilter = JSON.parse(
    sessionStorage.getItem("filter_param") || "{}"
  );
  const searchValue: any = searchParams?.get(key)?.split(" ") || "";
  const sessionValue: any = sessionFilter[key]?.split("+") || "";
  const returnObject: any = [...searchValue, ...sessionValue]?.filter(Boolean);
  return returnObject?.length === 1 ? returnObject?.[0] : returnObject;
};

const getParentSubject = (
  searchParams: any,
  jsondata: any,
  subjectTextKey?: any
) => {
  if (searchParams) {
    const firstSubject = searchParams?.get(keyName?.subject)?.split(" ")?.[0];
    if (firstSubject) {
      return (
        jsondata?.subjectFilterList?.find(
          (item: any) => item?.subjectTextKey === firstSubject
        )?.parentSubject || null
      );
    }
  }
  if (subjectTextKey) {
    return (
      jsondata?.subjectFilterList?.find(
        (item: any) => item?.subjectTextKey === subjectTextKey
      )?.parentSubject || null
    );
  }
  return null;
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

const generatePathName = (
  slug: string,
  key?: string,
  value?: string,
  searchParams?: any,
  isUniversitySelected?: boolean
) => {
  const parts = slug?.split("/")?.filter(Boolean);
  const basePath = `/${parts[0] || ""}`;
  const currentPage = parts[1] || "";
  const currentSubject = searchParams?.get(keyName?.subject)?.split(" ");
  const singleSubject =
    currentSubject?.length == 1 && currentSubject[0] == value;
  if (singleSubject) {
    return basePath;
  }
  if (basePath !== "/pgs") {
    if (key === keyName?.university) {
      if (
        currentPage?.toLocaleLowerCase() === "csearch" &&
        isUniversitySelected
      ) {
        return `${basePath}/search`;
      }
      if (
        currentPage?.toLocaleLowerCase() === "search" &&
        !isUniversitySelected
      ) {
        return `${basePath}/csearch`;
      }
      return `${basePath}/${currentPage || "csearch"}`;
    }
    if (currentPage?.toLocaleLowerCase() === "csearch") {
      return `${basePath}/csearch`;
    }
    return key ? `${basePath}/search` : basePath;
  }
  return slug;
};

function determineLocationType(regions: any, cities: any, searchParams: any) {
  const location = searchParams?.get("location")?.split(" ")[0] || "";
  if (!location) {
    return { type: null, message: "No location parameter provided" };
  }
  const regionMatch = regions?.find(
    (region: any) => region?.regionTextKey === location
  );
  if (regionMatch) {
    return {
      type: "region",
      name: regionMatch?.regionName,
      textKey: regionMatch?.regionTextKey,
    };
  }
  const cityMatch = cities?.find((city: any) => city?.cityTextKey === location);
  if (cityMatch) {
    return {
      type: "city",
      name: cityMatch.cityName,
      textKey: cityMatch.cityTextKey,
    };
  }

  return { type: "unknown", name: location };
}
export {
  locationMilesArray,
  uniSortingMockData,
  getFilterValue,
  generatePathName,
  hierarchicalLocation,
  determineLocationType,
  getUserLocation,
  mergeTwoObjects,
  isSingleSelection,
  getDecodedCookie,
  getFilterPriority,
  getParentSubject,
  extractUrlAndSessionValues,
};

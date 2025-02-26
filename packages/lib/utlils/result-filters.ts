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
    "subject",
    "university",
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
    "course",
    "university",
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
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
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
const filterbodyJson = (inputObject: any, parentQual: string) => {
  return {
    parentQualification: qualCode?.[parentQual],
    childQualification: "",
    searchCategoryCode: ["AA.3"],
    searchSubject:
      inputObject?.subject?.split(" ") || inputObject?.course?.split(" ") || "",
    searchKeyword: inputObject?.q || "",
    jacsCode: inputObject?.jacs || "",
    location: inputObject?.location || "",
    studyMode: inputObject?.study_mode || inputObject["study-mode"] || "",
    studyMethod: inputObject?.study_method || inputObject["study-Method"] || "",
    collegeId: "",
    pageNo: inputObject?.pageno || inputObject?.page_no || "",
    locationType:
      inputObject?.location_type || inputObject["location-type"] || "",
    intakeYear: inputObject?.year || "",
    intakeMonth: inputObject?.month || "",
    sortBy: "",
    userCoordinates: "51.5072,-0.1276",
    distance: "",
    ucasTariffRange: "",
    userRegionArray: "",
    dynamicRandomNumber: "",
    universityGroup: "",
    postCode: "",
  };
};
const qualCode: any = {
  "degree-courses": "M",
  "postgraduate-courses": "L",
  "foundation-degree-courses": "A",
  "access-foundation-courses": "T",
  "hnd-hnc-courses": "N",
};
const locationMilesArray = [
  { miles: "5 miles" },
  { miles: "10 miles" },
  { miles: "25 miles" },
  { miles: "50 miles" },
];
export {
  qualCode,
  locationMilesArray,
  filterbodyJson,
  mergeTwoObjects,
  isSingleSelection,
  getDecodedCookie,
  getFilterPriority,
  extractUrlAndCookieValues,
};

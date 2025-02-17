type KeyValueObject = Record<string, string>;

const getFilterPriority = () => {
  const whatuniFilters = [
    "subject",
    "study-level",
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
    "location-type",
    "pageno",
  ];
  const pgsFilters = [
    "course",
    "study_level",
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
    "location_type",
    "page_no",
  ];
  return process.env.PROJECT === "Whatuni"
    ? [...whatuniFilters]
    : [...pgsFilters];
};

const extractUrlAndCookieValues = (
  searchParams: URLSearchParams,
  key: string,
  value: string
): KeyValueObject => {
  const paramsObject = Object.fromEntries(searchParams.entries());
  const cookieObject: KeyValueObject = JSON.parse(
    getDecodedCookie("filter_param") || "{}"
  );
  const mergedObject = mergeTwoObjects(paramsObject, cookieObject);
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

export {
  extractUrlAndCookieValues,
  mergeTwoObjects,
  getDecodedCookie,
  getFilterPriority,
};

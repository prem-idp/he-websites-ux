const qualCode: any = {
  "degree-courses": "M",
  "postgraduate-courses": "L",
  "foundation-degree-courses": "A",
  "access-foundation-courses": "T",
  "hnd-hnc-courses": "N",
};
const getLocationArray = (
  inputObject: Record<string, any>,
  keyName: Record<string, string>
): string[] => {
  const region = inputObject[keyName?.region] ?? "";
  const city = inputObject[keyName?.city] ?? "";
  const splitValues = (value: string) =>
    value ? (value?.includes("+") ? value?.split("+") : value?.split(" ")) : [];
  return [...splitValues(region), ...splitValues(city)]?.filter(Boolean);
};

const KeyNames = () => {
  const sameNameObject = {
    month: "month",
    year: "year",
    location: "location",
    sort: "sort",
    university: "university",
    postcode: "postcode",
    score: "score",
  };
  if (process.env.PROJECT === "Whatuni") {
    return {
      ...sameNameObject,
      subject: "subject",
      studyMethod: "study-method",
      studyMode: "study-mode",
      distanceFromHome: "distance-from-home",
      universityGroup: "university-group",
      locationType: "location-type",
      pageNumber: "pageno",
      russellGroup: "russell-group",
    };
  } else {
    return {
      ...sameNameObject,
      subject: "course",
      studyMethod: "study_method",
      studyMode: "study_mode",
      distanceFromHome: "distance_from_home",
      universityGroup: "university_group",
      locationType: "location_type",
      pageNumber: "page_no",
      russellGroup: "russell_group",
    };
  }
};
const keyName = KeyNames();
const filterbodyJson = (inputObject: any, parentQual: string) => {
  return {
    parentQualification: qualCode?.[parentQual] || "L",
    childQualification: "",
    searchCategoryCode: "",
    searchSubject: inputObject?.[keyName?.subject]?.includes("+")
      ? inputObject?.[keyName?.subject]?.split("+")
      : inputObject?.[keyName?.subject]?.split(" ") || "",
    searchKeyword: inputObject?.q || "",
    jacsCode: inputObject?.jacs || "",
    location: getLocationArray(inputObject, keyName) || "",
    studyMode: inputObject[keyName?.studyMode] || "",
    studyMethod: inputObject[keyName?.studyMethod] || "",
    collegeName: inputObject[keyName?.university] || "",
    pageNo: inputObject?.[keyName?.pageNumber] || "",
    locationType: inputObject[keyName?.locationType]?.split(" ") || "",
    intakeYear: inputObject[keyName?.year] || "",
    intakeMonth: inputObject?.month?.toUpperCase() || "",
    sortBy: inputObject[keyName?.sort] || "",
    userCoordinates: "",
    distance: inputObject[keyName?.distanceFromHome] || "",
    ucasTariffRange: inputObject[keyName?.score] || "",
    userRegionArray: "",
    dynamicRandomNumber: "",
    universityGroup: inputObject[keyName?.russellGroup]?.split(" ") || "",
    postCode: inputObject[keyName?.postcode] || "",
  };
};
export { filterbodyJson, qualCode, KeyNames };

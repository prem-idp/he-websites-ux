const qualCode: any = {
  "degree-courses": "M",
  "hnd-hnc-courses": "N",
  "foundation-degree-courses": "A",
  "access-foundation-courses": "T",
  "postgraduate-courses": "L",
};
// const getLocationArray = (
//   inputObject: Record<string, any>,
//   keyName: Record<string, string>
// ): string[] => {
//   const region = inputObject[keyName?.region] ?? "";
//   const city = inputObject[keyName?.city] ?? "";
//   const splitValues = (value: string) =>
//     value ? (value?.includes("+") ? value?.split("+") : value?.split(" ")) : [];
//   return [...splitValues(region), ...splitValues(city)]?.filter(Boolean);
// };

const KeyNames = () => {
  const sameNameObject = {
    month: "month",
    qualification: "qualification",
    year: "year",
    location: "location",
    sort: "sort",
    university: "university",
    postcode: "postcode",
    distance: "distance",
    score: "score",
  };
  if (process.env.PROJECT === "Whatuni") {
    return {
      ...sameNameObject,
      subject: "subject",
      keyword: "q",
      studyMethod: "study-method",
      studyMode: "study-mode",
      universityGroup: "university-group",
      locationType: "location-type",
      pageNumber: "pageno",
      russellGroup: "russell-group",
    };
  } else {
    return {
      ...sameNameObject,
      subject: "course",
      keyword: "keyword",
      studyMethod: "study_method",
      studyMode: "study_mode",
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
    childQualification: inputObject?.[keyName?.qualification] || "",
    searchCategoryCode: "",
    searchSubject: inputObject?.[keyName?.subject]?.includes("+")
      ? inputObject?.[keyName?.subject]?.split("+")
      : inputObject?.[keyName?.subject]?.split(" ") || "",
    searchKeyword: inputObject?.[keyName?.keyword] || "",
    jacsCode: inputObject?.jacs || "",
    location: inputObject?.[keyName?.location]?.includes("+")
      ? inputObject?.[keyName?.location]?.split("+")
      : inputObject?.[keyName?.location]?.split(" ") || "",
    studyMode: inputObject[keyName?.studyMode] || "",
    studyMethod: inputObject[keyName?.studyMethod] || "",
    collegeName: inputObject[keyName?.university] || "",
    pageNo: inputObject?.[keyName?.pageNumber] || "",
    locationType: inputObject[keyName?.locationType]?.split(" ") || "",
    intakeYear: inputObject[keyName?.year] || "",
    intakeMonth: inputObject?.month?.toUpperCase() || "",
    sortBy: inputObject[keyName?.sort] || "",
    userCoordinates: "",
    distance:
      inputObject[keyName?.distance] === "any"
        ? ""
        : inputObject[keyName?.distance] || "",
    ucasTariffRange: inputObject[keyName?.score] || "",
    userRegionArray: "",
    dynamicRandomNumber: "",
    universityGroup: inputObject[keyName?.russellGroup]?.split(" ") || "",
    postCode: inputObject[keyName?.postcode]?.replaceAll("+", " ") || "",
  };
};
export { filterbodyJson, qualCode, KeyNames };

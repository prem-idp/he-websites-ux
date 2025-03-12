const qualCode: any = {
  "degree-courses": "M",
  "postgraduate-courses": "L",
  "foundation-degree-courses": "A",
  "access-foundation-courses": "T",
  "hnd-hnc-courses": "N",
};

const KeyNames = () => {
  const sameNameObject = {
    month: "month",
    year: "year",
    region: "region",
    city: "city",
    university: "university",
    postcode: "postcode",
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
    parentQualification: qualCode?.[parentQual] || "M",
    childQualification: "",
    searchCategoryCode: ["AK.", "AA.3", "A"],
    searchSubject: inputObject?.[keyName?.subject]?.split(" ") || "",
    searchKeyword: inputObject?.q || "",
    jacsCode: inputObject?.jacs || "",
    location: [
      ...(inputObject?.region ? inputObject?.region?.split(" ") : []),
      ...(inputObject?.city ? inputObject?.city?.split(" ") : []),
    ],
    studyMode: inputObject[keyName?.studyMode] || "",
    studyMethod: inputObject[keyName?.studyMethod] || "",
    collegeId: "",
    pageNo: inputObject?.[keyName?.pageNumber] || "",
    locationType: inputObject[keyName?.locationType] || "",
    intakeYear: inputObject?.year || "",
    intakeMonth: inputObject?.month?.toUpperCase() || "",
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
export { filterbodyJson, qualCode, KeyNames };

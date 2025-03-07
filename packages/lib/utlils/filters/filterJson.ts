const qualCode: any = {
  "degree-courses": "M",
  "postgraduate-courses": "L",
  "foundation-degree-courses": "A",
  "access-foundation-courses": "T",
  "hnd-hnc-courses": "N",
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
    location: inputObject?.location?.split(" ") || "",
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
export { filterbodyJson, qualCode };

export function getQualCode(qualText: any) {
  let qualCode = "M";
  if ("degree-courses" === qualText) {
    qualCode = "M";
  } else if ("postgraduate-courses" === qualText) {
    qualCode = "L";
  } else if ("foundation-degree-courses" === qualText) {
    qualCode = "A";
  } else if ("access-foundation-courses" === qualText) {
    qualCode = "T";
  } else if ("hnd-hnc-courses" === qualText) {
    qualCode = "N";
  }
  return qualCode;
}

export function getSearchPayload(
  searchParams: any,
  filterCookieParam: any,
  qualification: any,
  dynamicRandomNumber:any,
  userIp :any,
) {
let subjectArray="";
if(searchParams?.subject) 
   subjectArray=searchParams?.subject?.includes(" ") ? searchParams?.subject?.split(" ") :  [searchParams?.subject];
if(searchParams?.course)
  subjectArray= searchParams?.course?.includes(" ") ? searchParams?.course?.split(" ") : [searchParams?.course]
const locationArray = searchParams?.location?.includes(" ")
    ? searchParams?.location?.split(" ")
    : searchParams?.location
      ? [searchParams?.location]
      : ""      
const searchPayload: any = {
    parentQualification: process.env.PROJECT === "Whatuni" ? getQualCode(qualification) : "L",
    childQualification:
        searchParams?.qualification ||
        filterCookieParam?.qualification ||
        "",
    searchCategoryCode: "",
    searchSubject: subjectArray,
    searchKeyword: searchParams?.q || searchParams?.keyword || "",
    jacsCode: "",
    location: locationArray,
    studyMode:
        searchParams?.study_mode || searchParams?.["study-mode"] || filterCookieParam?.["study-mode"] || filterCookieParam?.study_mode,
    studyMethod:
        searchParams?.["study-method"] ||
        filterCookieParam?.["study-method"] ||  searchParams?.study_method ||
        filterCookieParam?.study_method ||
        "",
    collegeId: "",
    pageNo: searchParams?.pageno || searchParams?.page_no || "1",
    locationType:
        searchParams?.["location-type"] ||
        filterCookieParam?.["location-type"] ||
        "",
    intakeYear: searchParams?.year || filterCookieParam?.year || "2025",
    intakeMonth: searchParams?.month || filterCookieParam?.month || "",
    sortBy: searchParams?.sort?.toUpperCase() || filterCookieParam?.sort?.toUpperCase() || "",
    userCoordinates: "",
    distance: searchParams?.distance || filterCookieParam?.distance || "",
    ucasTariffRange: searchParams?.score || filterCookieParam?.score || "",
    userRegionId:userIp,
    dynamicRandomNumber:dynamicRandomNumber,
    universityGroup:
        searchParams?.["russell-group"] ||
        filterCookieParam?.["russell-group"] ||
        "",
}
return searchPayload;
}

export function getSEOSearchPayload(searchParams: any, qualification: string) {
  const subjectArray =
    searchParams?.subject?.split(",") || searchParams?.course?.split(",") || [];
  const locationArray =
    searchParams?.location?.split(",") ||
    searchParams?.location?.split(",") ||
    [];
  const searchPayload: any = {
    parentQualification: getQualCode(qualification),
    childQualification: searchParams?.qualification || undefined,
    searchCategoryCode: undefined,
    searchSubject: subjectArray,
    searchKeyword: searchParams?.q || searchParams?.keyword || undefined,
    jacsCode: undefined,
    location: locationArray,
    studyMode:
      searchParams?.study_mode || searchParams?.["study-mode"] || undefined,
    studyMethod: searchParams?.["study-method"] || undefined,
    collegeId: undefined,
    pageNo: searchParams?.pageno || searchParams?.page_no || undefined,
    locationType: searchParams?.["location-type"] || undefined,
    intakeYear: searchParams?.year || undefined,
    intakeMonth: searchParams?.month || undefined,
    sortBy: searchParams?.sort || undefined,
    userCoordinates: undefined,
    distance: searchParams?.distance || undefined,
    ucasTariffRange: searchParams?.score || undefined,
    universityGroup: searchParams?.["russell-group"] || undefined,
  };
  return searchPayload;
}

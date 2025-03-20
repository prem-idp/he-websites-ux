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
  dynamicRandomNumber: any,
  userIp: any
) {
  const currentYear = new Date().getFullYear();
let subjectArray="";
if(searchParams?.subject)  
   subjectArray=searchParams?.subject?.includes(" ") ? searchParams?.subject?.split(" ") :  [searchParams?.subject];
subjectArray = filterCookieParam?.subject ? subjectArray.concat(filterCookieParam?.subject?.includes("+") ?filterCookieParam?.subject?.split("+") : filterCookieParam?.subject) : subjectArray;
if(searchParams?.course)
  subjectArray= searchParams?.course?.includes(" ") ? searchParams?.course?.split(" ") : [searchParams?.course]
const locationArray = searchParams?.location?.includes(" ")
? searchParams?.location?.split(" ")
: searchParams?.location
  ? [searchParams?.location]
  : "" 
const locationType= searchParams?.["location-type"] || filterCookieParam?.["location-type"]
const russellGroup=searchParams?.["russell-group"] || filterCookieParam?.["russell-group"]
const score = searchParams?.score && !searchParams?.score?.includes(",") || filterCookieParam?.score && !filterCookieParam?.score?.includes(",") ? "0," + (searchParams?.score || filterCookieParam?.score) : searchParams?.score
const searchPayload: any = {
    parentQualification: process.env.PROJECT === "Whatuni" ? getQualCode(qualification) : "L",
    childQualification:
      searchParams?.qualification || filterCookieParam?.qualification || "",
    searchCategoryCode: "",
    searchSubject: subjectArray,
    searchKeyword: searchParams?.q || searchParams?.keyword || "",
    jacsCode: searchParams?.jacs || "",
    location: locationArray,
    studyMode:
        searchParams?.study_mode || searchParams?.["study-mode"] || filterCookieParam?.["study-mode"] || filterCookieParam?.study_mode || "",
    studyMethod:
      searchParams?.["study-method"] ||
      filterCookieParam?.["study-method"] ||
      searchParams?.study_method ||
      filterCookieParam?.study_method ||
      "",
    collegeId: "",
    collegeName:
      searchParams?.["university"] || filterCookieParam?.["university"] || "",
    pageNo: searchParams?.pageno || searchParams?.page_no || "1",
    locationType: locationType ? [locationType] : "",
    intakeYear: searchParams?.year || filterCookieParam?.year || currentYear?.toString(),
    intakeMonth: searchParams?.month?.toUpperCase() || filterCookieParam?.month?.toUpperCase()|| "",
    sortBy: typeof searchParams?.sort === 'string' && searchParams?.sort?.toUpperCase() ||  typeof filterCookieParam?.sort === 'string' &&  filterCookieParam?.sort?.toUpperCase() || "",
    userCoordinates: "",
    distance: searchParams?.distance_from_home || filterCookieParam?.distance_from_home || searchParams?.["distance-from-home"] || filterCookieParam?.["distance-from-home"] || "",
    ucasTariffRange: score || "",
    userRegionId:userIp,
    dynamicRandomNumber:dynamicRandomNumber,
    universityGroup: russellGroup ? [russellGroup] : "",
    postCode: searchParams?.postcode || filterCookieParam?.postcode
}
return searchPayload;
}

export function getSEOSearchPayload(
  searchParams: any,
  qualification: string
) {
  const getQualCode = (qualUrl: string) => {
    switch(qualUrl){
      case "degree-courses":            return "M"
      case "postgraduate-courses":      return "L"
      case "foundation-degree-courses": return "A"
      case "access-foundation-courses": return "T"
      case "hnd-hnc-courses":           return "N"
      default:                          return "";
    }
  }
  const subjectArray = searchParams?.subject?.split(" ") || searchParams?.course?.split(" ") || undefined;
  const locationArray = searchParams?.location?.split(" ") || undefined;
  const searchPayload: any = {
    parentQualification: getQualCode(qualification),
    childQualification: searchParams?.qualification || undefined,
    searchCategoryCode: undefined,
    searchSubject: subjectArray,
    searchKeyword: searchParams?.q || searchParams?.keyword || undefined,
    jacsCode: searchParams?.jacs || undefined,
    location: locationArray,
    studyMode: searchParams?.study_mode || searchParams?.["study-mode"] || undefined,
    studyMethod: searchParams?.["study_mode"] || undefined,
    collegeId: undefined,
    pageNo:  searchParams?.pageno || searchParams?.page_no || undefined,
    locationType: searchParams?.["location-type"] || undefined,
    intakeYear: searchParams?.year || undefined,
    intakeMonth: searchParams?.month  || undefined,
    sortBy: searchParams?.sort || undefined,
    userCoordinates: undefined,
    distance: searchParams?.distance_from_home || searchParams?.["distance-from-home"] || undefined,
    ucasTariffRange: searchParams?.score || undefined,
    universityGroup: searchParams?.["russell-group"] || undefined,
    university: searchParams?.university || undefined,
  };
  return searchPayload;
}


export const getOrdinalFor = (value:any) => {
  const hundredRemainder = value % 100;
  const tenRemainder = value % 10;

  if (hundredRemainder - tenRemainder === 10) {
    return "th";
  }

  switch (tenRemainder) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

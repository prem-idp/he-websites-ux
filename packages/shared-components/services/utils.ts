export function getQualCode(qualText: any) {
  switch(qualText){
    case "degree-courses":            return "M"
    case "postgraduate-courses":      return "L"
    case "foundation-degree-courses": return "A"
    case "access-foundation-courses": return "T"
    case "hnd-hnc-courses":           return "N"
    default:                          return ""
  }
}

export function getSearchPayload(
  searchParams: any,
  filterCookieParam: any,
  qualification: any,
  dynamicRandomNumber: any,
  userRegion: any
) {
  const currentYear = new Date().getFullYear();
  let subjectArray = searchParams?.subject ? searchParams?.subject?.split(" ") : [];
  subjectArray = filterCookieParam?.subject ? subjectArray.concat(filterCookieParam?.subject?.includes("+") ?filterCookieParam?.subject?.split("+") : filterCookieParam?.subject) : subjectArray;

  let locationArray = searchParams?.location ? searchParams?.location?.split(" ") : [];
  locationArray = filterCookieParam?.location ? locationArray.concat(filterCookieParam?.location?.includes("+") ?filterCookieParam?.location?.split("+") : filterCookieParam?.location) : locationArray;

  const locationType = searchParams?.["location-type"] || filterCookieParam?.["location-type"] || undefined;
  const russellGroup = searchParams?.["russell-group"] || filterCookieParam?.["russell-group"] || undefined;
  const score = searchParams?.score && !searchParams?.score?.includes(",") || filterCookieParam?.score && !filterCookieParam?.score?.includes(",") ? "0," + (searchParams?.score || filterCookieParam?.score) : searchParams?.score;
  const searchPayload: any = {
      parentQualification: process.env.PROJECT === "Whatuni" ? getQualCode(qualification) : "L",
      childQualification: searchParams?.qualification || filterCookieParam?.qualification || undefined,
      searchCategoryCode: "",
      searchSubject: subjectArray,
      searchKeyword: searchParams?.q || searchParams?.keyword || "",
      jacsCode: searchParams?.jacs || "",
      location: locationArray,
      studyMode: searchParams?.study_mode || searchParams?.["study-mode"] || filterCookieParam?.["study-mode"] || filterCookieParam?.study_mode || "",
      studyMethod: searchParams?.["study-method"] || filterCookieParam?.["study-method"] || searchParams?.study_method || filterCookieParam?.study_method || "",
      collegeId: "",
      collegeName: searchParams?.["university"] || filterCookieParam?.["university"] || "",
      pageNo: searchParams?.pageno || searchParams?.page_no || "1",
      locationType: locationType ? [locationType] : [],
      intakeYear: searchParams?.year || filterCookieParam?.year || currentYear?.toString(),
      intakeMonth: searchParams?.month?.toUpperCase() || filterCookieParam?.month?.toUpperCase()|| "",
      sortBy: typeof(searchParams?.sort) === 'string' && searchParams?.sort?.toUpperCase() ||  typeof filterCookieParam?.sort === 'string' &&  filterCookieParam?.sort?.toUpperCase() || "",
      userCoordinates: "",
      distance: searchParams?.distance_from_home || filterCookieParam?.distance_from_home || searchParams?.["distance-from-home"] || filterCookieParam?.["distance-from-home"] || "",
      ucasTariffRange: score || "",
      userRegionId:userRegion?.userRegionId || "",
      dynamicRandomNumber:dynamicRandomNumber,
      universityGroup: russellGroup ? [russellGroup] : [],
      postCode: searchParams?.postcode || filterCookieParam?.postcode,
  }
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

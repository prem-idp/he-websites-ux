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

function getSearchPayload(
    searchParams: any,
    filterCookieParam: any,
    qualification: any,
) {
  const subjectArray =
    searchParams?.subject?.split(",") || searchParams?.course?.split(",") || "";
  const locationArray =
    searchParams?.subject?.split(",") || searchParams?.course?.split(",") || "";
  const searchPayload: any = {
    parentQualification: getQualCode(qualification),
    childQualification:
      searchParams?.qualification || filterCookieParam?.["qualification"] || "",
    searchCategoryCode: "",
    searchSubject: subjectArray,
    searchKeyword: searchParams?.q || searchParams?.keyword || "",
    jacsCode: "",
    location: locationArray,
    studyMode: searchParams?.study_mode || searchParams?.["study-mode"] || "",
    studyMethod:
      searchParams?.["study-method"] ||
      filterCookieParam?.["study-method"] ||
      "",
    collegeId: "",
    pageNo:
      searchParams?.pageno ||
      searchParams?.page_no ||
      filterCookieParam?.["pageno"] ||
      filterCookieParam?.["page_no"] ||
      "1",
    locationType:
      searchParams?.["location-type"] ||
      filterCookieParam?.["location-type"] ||
      "",
    intakeYear: searchParams?.year || filterCookieParam?.["year"] || "",
    intakeMonth: searchParams?.month || filterCookieParam?.["month"] || "",
    sortBy: searchParams?.sort || filterCookieParam?.["sort"] || "",
    userCoordinates: "",
    distance: searchParams?.distance || filterCookieParam?.["distance"] || "",
    ucasTariffRange: searchParams?.score || filterCookieParam?.["score"] || "",
    universityGroup:
      searchParams?.["russell-group"] ||
      filterCookieParam?.["russell-group"] ||
      "",
  };
  return searchPayload;
}
export { getSearchPayload }

import { getDecodedCookie } from "@packages/lib/utlils/result-filters";

export function getQualCode(qualText:any) {
  let qualCode = "";
        if ("degree" === qualText) {
            qualCode = "M";
        } else if ("postgraduate"=== qualText) {
            qualCode = "L";
        } else if ("foundation-degree"=== qualText) {
            qualCode = "A";
         
        } else if ("access-foundation"=== qualText) {
            qualCode = "T";
           
        } else if ("hnd-hnc"=== qualText) {
            qualCode = "N";		   
        }
    return qualCode;
}

export function getSearchPayload(searchParams:any,filterCookieParam:any,qualification:any) {   
    let subjectArray = [searchParams?.subject || searchParams?.course || ""]
    const searchPayload: any = {
        parentQualification: getQualCode(qualification),
        childQualification:  searchParams?.qualification || filterCookieParam?.["qualification"] || "",
        searchCategoryCode:"",
        searchSubject: subjectArray,
        searchKeyword: searchParams?.q || searchParams?.keyword || "",
        jacsCode: "",
        location: searchParams?.location || filterCookieParam?.["location"] || "",
        studyMode: searchParams?.study_mode || searchParams?.['study-mode'] || "",
        studyMethod: searchParams?.['study-method'] || filterCookieParam?.["study-method"] || "",
        collegeId: "",
        pageNo: searchParams?.pageno || searchParams?.page_no || "1",
        locationType: searchParams?.['location-type'] || filterCookieParam?.["location-type"] || "",
        intakeYear: searchParams?.year || filterCookieParam?.["year"] || "",
        intakeMonth: searchParams?.month || filterCookieParam?.["month"] || "",
        sortBy: searchParams?.sort || filterCookieParam?.["sort"] || "",
        userCoordinates: "",
        distance: searchParams?.distance || filterCookieParam?.["distance"] || "",
        ucasTariffRange: searchParams?.score || filterCookieParam?.["score"] || "",
        universityGroup: searchParams?.['russell-group'] || filterCookieParam?.["russell-group"] || "",
      };
  return searchPayload;
}


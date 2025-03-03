import { getDecodedCookie } from "./filters/result-filters";
// import { MetaDataProps } from "@whatuni/src/app/(sr-and-pg-pages)/[hero]/search/page";
import { getSearchPayload } from "@packages/shared-components/services/utils";
import { cookies, headers } from "next/headers";
import { graphQlFetchFunction, httpBFFRequest } from "../server-actions/server-action";
import { getMetaDetailsQueryForSRpage } from "../graphQL/search-results";
import { getFiltersInparamReqBody } from "@packages/shared-components/sr-page/SrFilter/filterWrapper";
import { getSrFilter } from "@packages/REST-API/rest-api";

interface MetaDataInterface {
  title: string;
  description: string;
  keyword: string;
  canonical: string;
  indexation: string;
}
interface MetaFilterTypesReplace{
    searchSubject?: string[],
    studylevel?: string,
    studymode?: string,
    location?: string[],
    providerCount?: string,
    courseCount?: string,
}

export async function getSRMetaDetailsFromContentful(searchParams: any) {
  //Initializing and Assigning values
  let filterCookieParam;
  const headersList = await headers();
  const referer = headersList.get("referer");
  const pathnameArray = referer?.split?.("/");
  const cookieStore = await cookies();
  

  if (typeof document !== "undefined") {
    filterCookieParam = JSON.parse(getDecodedCookie("filter_param") || "{}");
  }

  const searchPayLoad = getSearchPayload( searchParams, filterCookieParam, pathnameArray?.[3]?.split?.("-")?.[0]);
  const studylevel = `${process.env.PROJECT}` == "Whatuni" ? searchPayLoad?.parentQualification : searchPayLoad?.childQualification;
  const seoMetaFeildId: string = getSeoMetaFeildId(searchPayLoad);


  //1) bff API hit
  const courseCountReqBody = await getFiltersInparamReqBody(cookieStore);
  const displayNameReqBody = getDisplayNameReqBody(searchPayLoad);
  const courseCountEndPt = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/getCourseCount`;
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/seo/search-display-names`;

  const courseCountResponse = await httpBFFRequest(courseCountEndPt, courseCountReqBody, "POST", `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`, "no-cache");
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, displayNameReqBody, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "default");

  //2) contentful API hit
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  let contentfulMetadata = await graphQlFetchFunction(query);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];

  //
  const metaFiltersOpted: MetaFilterTypesReplace = {
    courseCount: courseCountResponse ?? undefined,
    location:  displayNameResponse?.locationName ?? undefined,
    searchSubject: displayNameResponse?.subjectName ?? undefined,
    studylevel: displayNameResponse?.studyLevel ?? undefined,
    studymode: displayNameResponse?.studyMode ?? undefined,
  }
  
  let actualMetaData: MetaDataInterface = {
    canonical: `${process.env.PROJECT === "Whatuni" ? "https://www.whatuni.com" : "https://www.postgraduatesearch.com/"}`,
    description: contentfulMetadata?.metaDescription ?? "Default description",
    indexation: "noindex, nofollow",
    keyword: "",
    title: contentfulMetadata?.metaTile ?? "Default title",
  } 

  
  //
  setIndexation(actualMetaData, searchParams, searchPayLoad);

  return actualMetaData;
}

function getDisplayNameReqBody(searchPayLoad: any){
  const displayNameReqBody = { 

    "parentQualification": searchPayLoad?.parentQualification ?? "", 

    "childQualification": searchPayLoad?.childQualification ?? "", 

    "searchSubject": searchPayLoad?.searchSubject ?? "", 

    "searchKeyword": searchPayLoad?.searchKeyword ?? "", 

    "jacsCode": searchPayLoad?.jacsCode ?? "", 

    "location": searchPayLoad?.location ?? "", 

    "studyMode": searchPayLoad?.studyMode ?? "",

  }
  return displayNameReqBody;
}

export function replaceSEOPlaceHolder(inputText: any, metaFiltersOpted: MetaFilterTypesReplace) {
  if (inputText?.includes("[Course Count]")) {
    inputText = inputText.replace("[Course Count]", metaFiltersOpted?.courseCount ?? "0")
    } 
    if (inputText?.includes("[Provider Count]")) {
      inputText = inputText.replace("[Provider Count]",metaFiltersOpted?.providerCount ?? "0")
    } 
    if (inputText?.includes("[Region]")) {
      const displayLocation = metaFiltersOpted?.location?.length && metaFiltersOpted?.location?.length > 0  ? metaFiltersOpted.location[0] : "";
      inputText.replace("[Region]",displayLocation)
    } 
    if (inputText?.includes("[LOCATION]")) {
      const displayLocation = metaFiltersOpted?.location?.length && metaFiltersOpted?.location?.length > 0  ? metaFiltersOpted.location[0] : "";
      inputText.replace("[LOCATION]",displayLocation)
    } 
    if (inputText?.includes("[SUBJECT]")) {
      const displaySubject = metaFiltersOpted?.searchSubject?.length && metaFiltersOpted?.searchSubject?.length > 0  ? metaFiltersOpted.searchSubject[0] : "";
      inputText.replace("[SUBJECT]", displaySubject);
    } 
    if (inputText?.includes("[STUDY LEVEL]")) {
      inputText.replace("[STUDY LEVEL]", metaFiltersOpted?.studylevel ?? "")
    } 
    if (inputText?.includes("[STUDY MODE]")) {
      inputText.replace("[STUDY MODE]", metaFiltersOpted?.studymode ?? "")
    } 
    return inputText;
}


function setIndexation(metaData: MetaDataInterface, searchParams: any, searchPayLoad: any){
    if(searchPayLoad?.searchKeyword || searchParams?.length >= 3){
        metaData.indexation = "noindex";
    } else{
        metaData.indexation = "index";
    }
} 

function setCanonical(metaData: any, searchParams: any, searchPayLoad: any){

} 

function getSeoMetaFeildId(searchPayLoad: any) {

    let seoMetaFeildId = "Default";
    const getStudylevelSeoField = (studylevel: string) => {
        if (studylevel == "degree") {
            return "Undergraduate"
        } else if (studylevel == "postgraduate") {
        } else if (studylevel == "access-foundation") {
        } else if (studylevel == "foundation") {
        } else if (studylevel == "hnd-hnc") {
        }
      }

  if (
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    //no filter
  } else if (
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // region only
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length > 1 &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // multiple subjects
  } else if (
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length > 1 &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    // multiple subjects + studymode
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // subject + region
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // subject + studyLevel + region (doubt contradiction)
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length > 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // subject + more regions
  } else if (
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length > 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // more region only
  } else if (
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // only subject atmost atleast one
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // subject + location
  } else if (
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification == "degree" &&
    !searchPayLoad?.studyMode
  ) {
    // only UG studyLevel
  } else if (
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification == "postgraduate" &&
    !searchPayLoad?.studyMode
  ) {
    // only PG studyLevel
  } else if (
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification == "access-founation" &&
    !searchPayLoad?.studyMode
  ) {
    // only access-foundation studyLevel
  } else if (
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification == "foundation" &&
    !searchPayLoad?.studyMode
  ) {
    // only foundation studyLevel
  } else if (
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification == "hnd-hnc" &&
    !searchPayLoad?.studyMode
  ) {
    // only hnd-hnc studyLevel
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.parentQualification == "degree" &&
    !searchPayLoad?.studyMode
  ) {
    //subject + studylevel(UG)
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    //subject + location + studyMode
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 2 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.parentQualification == "degree" &&
    !searchPayLoad?.studyMode
  ) {
    // subject + subject (UG)
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // subject + studyLevel
    if (searchPayLoad?.parentQualification == "degree") {
    } else if (searchPayLoad?.parentQualification == "postgraduate") {
    } else if (searchPayLoad?.parentQualification == "access-foundation") {
    } else if (searchPayLoad?.parentQualification == "foundation") {
    } else if (searchPayLoad?.parentQualification == "hnd-hnc") {
    }
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    // subject + studyLevel + studymode (doubt)
    if (searchPayLoad?.parentQualification == "degree") {
    } else if (searchPayLoad?.parentQualification == "postgraduate") {
    } else if (searchPayLoad?.parentQualification == "access-foundation") {
    } else if (searchPayLoad?.parentQualification == "foundation") {
    } else if (searchPayLoad?.parentQualification == "hnd-hnc") {
    }
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    // subject + studyLevel + studymode + location
    if (searchPayLoad?.parentQualification == "degree") {
    } else if (searchPayLoad?.parentQualification == "postgraduate") {
    } else if (searchPayLoad?.parentQualification == "access-foundation") {
    } else if (searchPayLoad?.parentQualification == "foundation") {
    } else if (searchPayLoad?.parentQualification == "hnd-hnc") {
    }
  } else if (
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    // subject + studyLevel + location
    if (searchPayLoad?.parentQualification == "degree") {
    } else if (searchPayLoad?.parentQualification == "postgraduate") {
    } else if (searchPayLoad?.parentQualification == "access-foundation") {
    } else if (searchPayLoad?.parentQualification == "foundation") {
    } else if (searchPayLoad?.parentQualification == "hnd-hnc") {
    }
  } 

  return "SEO - " + seoMetaFeildId + " - Whatuni";

}

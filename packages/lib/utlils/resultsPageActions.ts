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

export async function getSRMetaDetailsFromContentful(searchParams: any, pathName: string) {
  //Initializing and Assigning values
  let filterCookieParam;
  const headersList = await headers();
  const referer = headersList.get("referer");
  const pathnameArray = referer?.split?.("/");
  const cookieStore = await cookies();
  

  if (typeof document !== "undefined") {
    filterCookieParam = JSON.parse(getDecodedCookie("filter_param") || "{}");
  }

  const searchPayLoad = getSearchPayload( searchParams, filterCookieParam, pathnameArray?.[3]?.split?.("-")?.[0],"");
  const studylevel = `${process.env.PROJECT}` == "Whatuni" ? searchPayLoad?.parentQualification : searchPayLoad?.childQualification;
  const seoMetaFeildId: string = getSeoMetaFeildId(searchPayLoad);
  // console.log("seoMetaFeildId: ", seoMetaFeildId);

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


  // console.log("contentfulMetadata: ", contentfulMetadata)

  //
  const metaFiltersOpted: MetaFilterTypesReplace = {
    courseCount: courseCountResponse ?? undefined,
    location:  displayNameResponse?.locationName ?? undefined,
    searchSubject: displayNameResponse?.subjectName ?? undefined,
    studylevel: displayNameResponse?.studyLevel ?? undefined,
    studymode: displayNameResponse?.studyMode ?? undefined,
  }
  
  let actualMetaData: MetaDataInterface = {
    canonical: getSRCanonical(searchParams, searchPayLoad, pathName), //`${process.env.PROJECT === "Whatuni" ? "https://www.whatuni.com" : "https://www.postgraduatesearch.com/"}`,
    description: replaceSEOPlaceHolder(contentfulMetadata?.metaDescription, metaFiltersOpted) ?? "Default description",
    indexation: getSRIndexation(searchParams, searchPayLoad),
    keyword: "",
    title: replaceSEOPlaceHolder(contentfulMetadata?.metaTile, metaFiltersOpted)?? "Default title",
  } 

  // console.log("actualMetaData: ", actualMetaData);

  return actualMetaData;
}

export function getDisplayNameReqBody(searchPayLoad: any){
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
  if (inputText?.includes("[COURSE COUNT]")) {
    inputText = inputText.replace("[COURSE COUNT]", metaFiltersOpted?.courseCount ?? "0")
    } 
    if (inputText?.includes("[PROVIDER COUNT]")) {
      inputText = inputText.replace("[PROVIDER COUNT]",metaFiltersOpted?.providerCount ?? "0")
    } 
    if (inputText?.includes("[REGION]")) {
      inputText = replaceMultiplePlaceholder("[REGION]", inputText, metaFiltersOpted?.location);
    } 
    if (inputText?.includes("[LOCATION]")) {
      inputText = replaceMultiplePlaceholder("[LOCATION]", inputText, metaFiltersOpted?.location);
    } 
    if (inputText?.includes("[SUBJECT]")) {
      inputText = replaceMultiplePlaceholder("[SUBJECT]", inputText, metaFiltersOpted?.searchSubject);
    } 
    if (inputText?.includes("[STUDY LEVEL]")) {
      inputText.replace("[STUDY LEVEL]", metaFiltersOpted?.studylevel ?? "")
    } 
    if (inputText?.includes("[STUDY MODE]")) {
      inputText.replace("[STUDY MODE]", metaFiltersOpted?.studymode ?? "")
    } 
    return inputText;
}

function replaceMultiplePlaceholder(pattern: string, inputText: string, selectedOptionList: string[] | undefined){
  let index = 0;

  while(inputText?.includes(pattern)){
    const displayText = selectedOptionList?.length && selectedOptionList?.length > 0  ? selectedOptionList[index] : "";
    inputText = inputText.replace(pattern, displayText);
    index++;
  } 
  return inputText;
}


function getSRIndexation(searchParams: any, searchPayLoad: any){
    if(searchPayLoad?.searchKeyword || searchParams?.length >= 3){
        return "noindex, nofollow";
    }

    return "index, follow";
} 

function getSRCanonical(searchParams: any, searchPayLoad: any, pathName: string){
  
  // const reqUrlArr = requestURL?.split("?");
  // let srBaseURL = reqUrlArr && reqUrlArr?.length >= 1 ? reqUrlArr[0] : "";
  // let queryParamString = reqUrlArr && reqUrlArr?.length >= 2 ? reqUrlArr[1] : "";
  // let finalURL = srBaseURL;

  // //sortBy scenario
  // if(queryParamString?.includes("sort=")){
  //     let sortbyAmpersandIndex: number = queryParamString.indexOf("&sort");
  //     sortbyAmpersandIndex = sortbyAmpersandIndex == -1 ? queryParamString.indexOf("sort") : sortbyAmpersandIndex;
  //     let queryAfterSortby = queryParamString.substring(sortbyAmpersandIndex);
  //     let sortbyLastIndex = queryAfterSortby.indexOf("&", 1);
  //     const sortByParam = sortbyLastIndex == -1 ? queryAfterSortby : queryAfterSortby.substring(0, sortbyLastIndex);
  //     queryParamString = queryParamString.replace(sortByParam, "");
  // }

  // if(queryParamString) finalURL = srBaseURL + "?" + queryParamString;
  // else finalURL = srBaseURL;
  
  // return finalURL;

  const canonicalSearchParams = {...searchParams};
  const { sort, ...newObj } = canonicalSearchParams;

  return formSRPageURL(newObj, pathName)
} 

function formSRPageURL(searchParams: any, pathName: string){
  let filterCount: number = 0;
  let formURL = `${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "https://mdev.dev.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "stg" ? "https://mtest.test.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "prd" ? "https://www.whatuni.com" : "http://localhost:3000"}`;
  formURL = formURL + pathName;

  if(filterCount <= 4 && searchParams?.subject) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.subject); filterCount++;}
  if(filterCount <= 4 && searchParams?.qualification) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.qualification); filterCount++;}
  if(filterCount <= 4 && searchParams?.location) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location=" + searchParams?.location); filterCount++;}
  if(filterCount <= 4 && searchParams?.['study-method']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-method=" + searchParams?.['study-method']); filterCount++;}
  if(filterCount <= 4 && searchParams?.['study-mode']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-mode=" + searchParams?.['study-mode']); filterCount++;}
  if(filterCount <= 4 && searchParams?.intakeYear) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intakeYear=" + searchParams?.intakeYear); filterCount++;}
  if(filterCount <= 4 && searchParams?.intakeMonth) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intakeMonth=" + searchParams?.intakeMonth); filterCount++;}
  if(filterCount <= 4 && searchParams?.distance) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("distance=" + searchParams?.distance); filterCount++;}
  if(filterCount <= 4 && searchParams?.universityGroup) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("universityGroup=" + searchParams?.universityGroup); filterCount++;}
  if(filterCount <= 4 && searchParams?.score) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("score=" + searchParams?.score); filterCount++;}
  if(filterCount <= 4 && searchParams?.locationType) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("locationType=" + searchParams?.locationType); filterCount++;}
  if(filterCount <= 4 && searchParams?.pageNo) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("pageNo=" + searchParams?.pageNo); filterCount++;}
  if(filterCount <= 4 && searchParams?.qualification) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.qualification); filterCount++;}

  return formURL;
}


export function getSeoMetaFeildId(searchPayLoad: any) {

  const locationSelected = searchPayLoad?.location?.length <= 0 ? false : (searchPayLoad?.location?.length >= 1 && searchPayLoad?.location?.[0] == "" ? false : true); 
  const subjectSelected = searchPayLoad?.searchSubject?.length <= 0 ? false : (searchPayLoad?.searchSubject?.length >= 1 && searchPayLoad?.searchSubject?.[0] == "" ? false : true);
  const keywordSelected = searchPayLoad?.searchKeyword?.length <= 0 ? false : (searchPayLoad?.searchKeyword?.length >= 1 && searchPayLoad?.searchKeyword?.[0] == "" ? false : true); 
   let seoMetaFeildId = "Default";
   const getStudylevelSeoField = (studylevel: string) => {
      if(`${process.env.PROJECT}` == "PGS"){
        if (studylevel == "M") {return "M";} 
        else if (studylevel == "L") {return "L";}
        else if (studylevel == "T") {return "ACC-Fnd";}
        else if (studylevel == "A") {return "FND";}
        else if (studylevel == "N") {return "hnd-hnc";}
      } else return studylevel; 
  }

  if (  //no filter
    !(subjectSelected || keywordSelected) &&
    !locationSelected &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "No filters"
  } else if ( // region only
    !(subjectSelected || keywordSelected) &&
    locationSelected &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Region only";
  } else if ( // multiple subjects
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length > 1)) &&
    !locationSelected &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Multiple Subjects Only";
  } else if ( // multiple subjects + studymode
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length > 1)) &&
    !locationSelected &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Multiple Subjects and Study Mode"
  } else if ( // subject + region
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length > 1)) &&
    locationSelected &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Subject & Region with No Course Type"
  } else if ( // subject + studyLevel + region (doubt contradiction)
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length > 1)) &&
    locationSelected &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Subject plus Region with Study Level"
  } else if ( // subject + more regions
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    (locationSelected && searchPayLoad?.location?.length > 1) &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "subject + region(2+)"
  } else if ( // more region only
    !(subjectSelected || keywordSelected) &&
    (locationSelected && searchPayLoad?.location?.length > 1) &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Multiple Regions";
  } else if ( // only subject atmost atleast one
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    !locationSelected &&
     searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
        seoMetaFeildId = "subject"
  } else if ( // subject + location
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
        seoMetaFeildId = "subject + location"
  } else if ( // only studyLevel(for each study levels diff text possible)
    !(subjectSelected || keywordSelected) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = `studyLevel(${studyLevelCotentfulCode})`;
  } else if ( //subject + location + studyMode
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "subject + studyMode + location"

  } else if (  // subject + subject (UG)
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 2) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 2)) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.parentQualification == "M" &&
    !searchPayLoad?.studyMode
  ) {
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject(2)" + `studyLevel(${studyLevelCotentfulCode})`;
  } else if ( // subject + studyLevel(for each study levels diff text possible)
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode})`;

  } else if ( // subject + studyLevel + studymode (doubt)
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
      const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
      seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode}) + ` + "studyMode";

  } else if ( // subject + studyLevel + studymode + location
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode}) + ` + "studyMode + " + "location";

  } else if ( // subject + studyLevel + location
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) ||
     (keywordSelected && searchPayLoad?.searchKeyword?.length == 1)) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode}) + ` + "location";
  } 

  return "SEO - " + seoMetaFeildId + ` - ${process.env.PROJECT}`;

}
import { getSEOSearchPayload } from "@packages/shared-components/services/utils";
import { graphQlFetchFunction, httpBFFRequest } from "../server-actions/server-action";
import { getMetaDetailsQueryForSRpage } from "../graphQL/search-results";
import { MetaDataInterface } from "../types/interfaces";
import { getCustomDomain } from "./common-function-server";

interface MetaFilterTypesReplace{
    searchSubject?: string[],
    studylevel?: string,
    studymode?: string,
    location?: string[],
    providerCount?: string,
    courseCount?: string,
}

export async function getSRMetaDetailsFromContentful(searchParams: any, pathName: string, params: any, displayNameBFFEndPt: string, pageType: string) {
  
  //Initializing and Assigning values
  const qualInUrl = params?.hero;
  const searchPayLoad = getSEOSearchPayload(searchParams, qualInUrl);
  const seoMetaFeildId: string = getSeoMetaFeildId(searchPayLoad, pageType);
  console.log("seoMetaFeildId: ", seoMetaFeildId);

  //1) bff API hit
  const displayNameReqBody = getDisplayNameReqBody(searchPayLoad);
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, 
    displayNameReqBody, 
    "POST", 
    `${process.env.NEXT_PUBLIC_X_API_KEY}`, 
    "no-store", 
    0, 
    {});

  // console.log("courseCountResponse: ", courseCountResponse);  
  // console.log("displayNameResponse: ", displayNameResponse);  

  //2) contentful API hit
  const customParams = {cache: "no-cache", next: {revalidate: 300}};
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  let contentfulMetadata = await graphQlFetchFunction(query, false, customParams);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];


  // console.log("contentfulMetadata: ", contentfulMetadata)

  //
  const metaFiltersOpted: MetaFilterTypesReplace = {
    courseCount: displayNameResponse?.courseCount ?? undefined,
    location:  displayNameResponse?.locationName ?? undefined,
    searchSubject: displayNameResponse?.subjectName ?? undefined,
    studylevel: displayNameResponse?.studyLevel ?? undefined,
    studymode: displayNameResponse?.studyMode ?? undefined,
    providerCount: displayNameResponse?.collegeCount ?? undefined,
  }
  
  const metaTitle = replaceSEOPlaceHolder(contentfulMetadata?.metaTile, metaFiltersOpted);
  const metaDesc = replaceSEOPlaceHolder(contentfulMetadata?.metaDescription, metaFiltersOpted);
  const index = getSRIndexation(searchParams, searchPayLoad, Number(displayNameResponse?.collegeCount));
  const canonical = getSRCanonical(searchParams, pathName) ?? (getCustomDomain() + pathName);
  
  let actualMetaData: MetaDataInterface = {
    canonical: canonical,
    description: metaDesc ?? "Default description",
    indexation: index,
    keyword: [],
    title: metaTitle ?? "Default title",
    og_title: metaTitle,
    og_canonical: canonical,
    og_description: metaDesc,
    twitter_url: canonical,
    twitter_titile: metaTitle,
    twitter_description: metaDesc,
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
      inputText = inputText.replace("[STUDY LEVEL]", metaFiltersOpted?.studylevel ?? "")
    }
    if (inputText?.includes("[STUDY MODE]")) {
      inputText = inputText.replace("[STUDY MODE]", metaFiltersOpted?.studymode ?? "");
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


function getSRIndexation(searchParams: any, searchPayLoad: any, providerCount: number){

    let paramCount:number = 0;
    Object.keys(searchParams).forEach((key:string)=>{
      paramCount = paramCount + getselectedCount(searchParams[key]);
    });

    if(searchPayLoad?.searchKeyword ||
      paramCount >= 3 ||
      providerCount <= 3){
        return "noindex, nofollow";
    }

    return "index, follow";
} 

function getSRCanonical(searchParams: any, pathName: string){
  
  const canonicalSearchParams = {...searchParams};
  const { sort, ...newObj } = canonicalSearchParams;

  return formSRPageURL(newObj, pathName)
} 

function getselectedCount(filterValueString: string|undefined) : number{
  if(!filterValueString) return 0;
  const filterValueArr = filterValueString?.trim()?.split(" ");
  return filterValueArr ? filterValueArr?.length : 0 ;
}

function formSRPageURL(searchParams: any, pathName: string){
  let filterCount: number = 0;
  let formURL = `${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "https://mdev.dev.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "stg" ? "https://mtest.test.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "prd" ? "https://www.whatuni.com" : "http://localhost:3000"}`;
  formURL = formURL + pathName;

  if(filterCount < 4 && searchParams?.subject) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.subject); filterCount = filterCount + getselectedCount(searchParams?.subject);}
  if(filterCount < 4 && searchParams?.qualification) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.qualification); filterCount++;}
  if(filterCount < 4 && searchParams?.location) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location=" + searchParams?.location); filterCount = filterCount + getselectedCount(searchParams?.subject);;}
  if(filterCount < 4 && searchParams?.['study-method']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-method=" + searchParams?.['study-method']); filterCount++;}
  if(filterCount < 4 && searchParams?.['study-mode']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-mode=" + searchParams?.['study-mode']); filterCount++;}
  if(filterCount < 4 && searchParams?.['intake-year']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intake-year=" + searchParams?.['intake-year']); filterCount++;}
  if(filterCount < 4 && searchParams?.['intake-month']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intake-month=" + searchParams?.['intake-month']); filterCount = filterCount + getselectedCount(searchParams?.subject);;}
  if(filterCount < 4 && searchParams?.distance) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("distance=" + searchParams?.distance); filterCount++;}
  if(filterCount < 4 && searchParams?.universityGroup) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("universityGroup=" + searchParams?.universityGroup); filterCount++;}
  if(filterCount < 4 && searchParams?.score) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("score=" + searchParams?.score); filterCount++;}
  if(filterCount < 4 && searchParams?.['location-type']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location-type=" + searchParams?.['location-type']); filterCount++;}
  if(filterCount < 4 && searchParams?.sort) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("sort=" + searchParams?.sort); filterCount++;}
  if(filterCount < 5 && searchParams?.pageno) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("pageno=" + searchParams?.pageno); filterCount++;} //if pageno applied then atmost 5 query params can contain

  return formURL;
}


export function getSeoMetaFeildId(searchPayLoad: any, pageType: string) {

  const locationSelected = searchPayLoad?.location?.length <= 0 ? false : (searchPayLoad?.location?.length >= 1 && searchPayLoad?.location?.[0] == "" ? false : true); 
  const subjectSelected = searchPayLoad?.searchSubject?.length <= 0 ? false : (searchPayLoad?.searchSubject?.length >= 1 && searchPayLoad?.searchSubject?.[0] == "" ? false : true);
  const keywordSelected = searchPayLoad?.searchKeyword && searchPayLoad?.searchKeyword?.trim() != "" ? true : false;
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
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
    !locationSelected &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Multiple Subjects Only";
  } else if ( // multiple subjects + studymode
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
    !locationSelected &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Multiple Subjects and Study Mode"
  } else if ( // subject + region
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
    locationSelected &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Subject & Region with No Course Type"
  } else if ( // subject + studyLevel + region (doubt contradiction)
    ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
    locationSelected &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "Subject plus Region with Study Level"
  } else if ( // subject + more regions
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
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
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    !locationSelected &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
        seoMetaFeildId = "subject"
  } else if ( // subject + location
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
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
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    seoMetaFeildId = "subject + studyMode + location"

  } else if (  // subject + subject (UG)
    (subjectSelected && searchPayLoad?.searchSubject?.length == 2) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.parentQualification == "M" &&
    !searchPayLoad?.studyMode
  ) {
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject(2)" + `studyLevel(${studyLevelCotentfulCode})`;
  } else if ( // subject + studyLevel(for each study levels diff text possible)
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode})`;

  } else if ( // subject + studyLevel + studymode (doubt)
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    !locationSelected &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
      const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
      seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode}) + ` + "studyMode";

  } else if ( // subject + studyLevel + studymode + location
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode}) + ` + "studyMode + " + "location";

  } else if ( // subject + studyLevel + location
    ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    (locationSelected && searchPayLoad?.location?.length == 1) &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject + " + `studyLevel(${studyLevelCotentfulCode}) + ` + "location";
  } 

  return `SEO - ${pageType} - ${seoMetaFeildId} - ${process.env.PROJECT}`;

}
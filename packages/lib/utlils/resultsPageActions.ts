import { getSEOSearchPayload } from "@packages/shared-components/services/utils";
import {
  graphQlFetchFunction,
  httpBFFRequest,
} from "../server-actions/server-action";
import { getMetaDetailsQueryForSRpage } from "../graphQL/search-results";
import { MetaDataInterface, MetaFilterTypesReplace } from "../types/interfaces";
import { getCustomDomain } from "./common-function-server";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";

export async function getSearchPageMetaDetailsFromContentful(searchParams: any, qualInUrl: string, pathName: string) {
  
  //Initializing and Assigning values

  const searchPayLoad = getSEOSearchPayload(searchParams, qualInUrl);
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  let metaTitle, metaDesc, index, canonical;

  //1) bff API hit
  const displayNameReqBody = getDisplayNameReqBody(searchPayLoad);
  const displayNameResponse = await httpBFFRequest(
    displayNameBFFEndPt, 
    displayNameReqBody, 
    "POST", 
    `${process.env.NEXT_PUBLIC_X_API_KEY}`, 
    "no-store", 
    0, 
    {}
  );
  console.log("displayNameReqBody: ", displayNameReqBody);
  console.log("displayNameResponse: ", displayNameResponse);
    

  //2) contentful API hit
  const seoMetaFeildId: string  = process.env.PROJECT === "Whatuni" ? getWU_SearchSEOFieldId(searchPayLoad) : getPGS_SearchSEOFieldId(searchPayLoad); 
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  const customParams = {cache: "no-cache", next: {revalidate: 300}};
  let contentfulMetadata = await graphQlFetchFunction(query, false, customParams);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];
  // console.log("query: ", query);
  // console.log("seoMetaFeildId: ", seoMetaFeildId);
  // console.log("contentfulMetadata: ", contentfulMetadata);

  //
  const displayNames = {
    ...displayNameResponse,
    month: searchParams?.month?.toUpperCase(),
    year: searchParams?.year,
  }
  const metaFiltersOpted: MetaFilterTypesReplace = getMetaOptedDisplayNames(displayNames);

  metaTitle = replaceSEOPlaceHolder(contentfulMetadata?.metaTite, metaFiltersOpted);
  metaDesc = replaceSEOPlaceHolder(contentfulMetadata?.metaDescription, metaFiltersOpted);

  if(process.env.PROJECT == "Whatuni"){
    index = getWU_Indexation(searchParams, searchPayLoad, metaFiltersOpted);
    canonical = getWU_Canonical(searchParams, pathName, qualInUrl);
  } else if(process.env.PROJECT == "PGS"){
    index = getPGS_Indexation(searchParams, searchPayLoad, metaFiltersOpted, contentfulMetadata?.robots);
    canonical = getPGS_Canonical(searchParams, pathName, qualInUrl);
  }
  
  let actualMetaData: MetaDataInterface = {
    canonical: canonical ?? (getCustomDomain() + pathName),
    description: metaDesc ?? "Default description",
    indexation: index ?? "",
    keyword: [],
    title: metaTitle ?? "Default title",
    og_title: metaTitle,
    og_canonical: canonical,
    og_description: metaDesc,
    twitter_url: canonical,
    twitter_titile: metaTitle,
    twitter_description: metaDesc,
  };

  return actualMetaData;
}

export function getMetaOptedDisplayNames(displayNameResponse: any): MetaFilterTypesReplace{
  return {
    courseCount: displayNameResponse?.courseCount ?? "",
    location:  displayNameResponse?.locationName ?? "UK",
    searchSubject: displayNameResponse?.subjectName ?? "",
    studylevel: displayNameResponse?.studyLevel ?? "",
    studymode: displayNameResponse?.studyMode ?? "",
    providerCount: displayNameResponse?.collegeCount ?? "",
    university: displayNameResponse?.collegeName ?? "",
    startMonth: displayNameResponse?.month ?? "",
    startYear: displayNameResponse?.year ?? "",
    parentSubjectDisplay: displayNameResponse?.parentSubjectName ?? "",
    parentSubjectUrl: displayNameResponse?.parentSubjectTextKey ?? "",
  }
}

export function getDisplayNameReqBody(searchPayLoad: any){
  const displayNameReqBody = { 

    "parentQualification": searchPayLoad?.parentQualification ?? "",
    "childQualification": searchPayLoad?.childQualification ?? "",
    "searchSubject": searchPayLoad?.searchSubject ?? "",
    "searchKeyword": searchPayLoad?.searchKeyword ?? "",
    "jacsCode": searchPayLoad?.jacsCode ?? "",
    "location": searchPayLoad?.location ?? [],
    "studyMode": searchPayLoad?.studyMode ?? "",
    "collegeName": searchPayLoad?.university ?? "",
    
  }
  return displayNameReqBody;
}

export function replaceSEOPlaceHolder(inputText: string, metaFiltersOpted: MetaFilterTypesReplace) {

    const inputTextUpperCase = inputText?.toUpperCase();
    if(inputTextUpperCase === "NA" || !inputText) return "";

    if (inputTextUpperCase?.includes("[COURSE COUNT]")) {
      inputText = inputText.replace("[COURSE COUNT]", metaFiltersOpted?.courseCount ?? "")
    } 
    if (inputTextUpperCase?.includes("[PROVIDER COUNT]")) {
      inputText = inputText.replace("[PROVIDER COUNT]",metaFiltersOpted?.providerCount ?? "")
    } 
    if (inputTextUpperCase?.includes("[REGION]")) {
      inputText = replaceMultiplePlaceholder("[REGION]", inputText, metaFiltersOpted?.location);
    } 
    if (inputTextUpperCase?.includes("[LOCATION]")) {
      inputText = replaceMultiplePlaceholder("[LOCATION]", inputText, metaFiltersOpted?.location);
    } 
    if (inputTextUpperCase?.includes("[SUBJECT]")) {
      inputText = replaceMultiplePlaceholder("[SUBJECT]", inputText, metaFiltersOpted?.searchSubject);
    } 
    if (inputTextUpperCase?.includes("[STUDY LEVEL]")) {
      inputText = inputText.replace("[STUDY LEVEL]", metaFiltersOpted?.studylevel ?? "")
    }
    if (inputTextUpperCase?.includes("[STUDY MODE]")) {
      inputText = inputText.replace("[STUDY MODE]", metaFiltersOpted?.studymode ?? "");
    }
    if (inputTextUpperCase?.includes("[STUDY METHOD]")) {
      inputText = inputText.replace("[STUDY METHOD]", metaFiltersOpted?.studymode ?? "");
    } 
    if (inputTextUpperCase?.includes("[PROVIDER]")) {
      inputText = inputText.replace("[PROVIDER]", metaFiltersOpted?.university ?? "");
    } 
    if (inputTextUpperCase?.includes("[QUALIFICATION]")) {
      inputText = inputText.replace("[QUALIFICATION]", metaFiltersOpted?.studylevel ?? "");
    } 
    if (inputTextUpperCase?.includes("[COURSE NAME]")) {
      inputText = inputText.replace("[COURSE NAME]", metaFiltersOpted?.courseName ?? "")
    }
    if (inputTextUpperCase?.includes("[UNIVERSITY]")) {
      inputText = inputText.replace("[UNIVERSITY]", metaFiltersOpted?.university ?? "");
    }
    if (inputTextUpperCase?.includes("[MONTH]")) {
      inputText = inputText.replace("[MONTH]", metaFiltersOpted?.startMonth ?? "");
    } 
    if (inputTextUpperCase?.includes("[YEAR]")) {
      inputText = inputText.replace("[YEAR]", metaFiltersOpted?.startYear ?? "");
    } 
    return inputText;
}

function replaceMultiplePlaceholder(pattern: string, inputText: string, selectedOptionList: any | undefined){
  let index = 0;

  while(inputText?.includes(pattern)){
    if (Array.isArray(selectedOptionList)) {
    const displayText = selectedOptionList?.length && selectedOptionList?.length > 0  ? selectedOptionList[index] : "";
    inputText = inputText.replace(pattern, displayText);
    index++;
    } else {
      inputText = inputText.replace(pattern, selectedOptionList); 
    }
  } 
  return inputText;
}

function getWU_Indexation(searchParams: any, searchPayLoad: any, metaFiltersOpted: MetaFilterTypesReplace){

    let multiOptionSelected:boolean = false;
    let noOfFilterSelected = 0;

    Object.keys(searchParams).forEach((key:string)=>{
      if(getselectedCount(searchParams[key]) >= 2){
        multiOptionSelected = true;
      }
      noOfFilterSelected++;
    });

    if(searchPayLoad?.searchKeyword ||                                                        //keyword search
       multiOptionSelected ||                                                                 //multiple options selected in multi-select filter
       (!multiOptionSelected && noOfFilterSelected > 4) ||                                    //url has more than 4 params
       (!searchParams?.university && Number(metaFiltersOpted?.providerCount) <= 3) ||         //total search result count is less than/equal to 3(only SR) also for no result SR
       (searchParams?.university && Number(metaFiltersOpted?.providerCount) < 1)){            //No result PR
        return "noindex, nofollow";
    }

    return "index, follow";
} 

function getWU_Canonical(searchParams: any, pathName: string, qualInUrl: string){

  let multiOptionSelected:boolean = false;
  Object.keys(searchParams).forEach((key:string)=>{
    if(getselectedCount(searchParams[key]) >= 2){
      multiOptionSelected = true;
    }
  });

  const { sort, pageno, ...newObj } = {...searchParams};
  let canonicalUrl;
  if(multiOptionSelected && !searchParams?.university) canonicalUrl = formSRPageURL({}, (qualInUrl && qualInUrl != "" ? `/${qualInUrl}` : pathName))
  else if(multiOptionSelected && searchParams?.university) canonicalUrl = formSRPageURL({university: newObj?.university}, pathName);  
  else canonicalUrl = formSRPageURL(newObj, pathName);

  return canonicalUrl;
} 

function getPGS_Indexation(searchParams: any, searchPayLoad: any, metaFiltersOpted: MetaFilterTypesReplace, contentfulIndex: string){

  let multiOptionSelected:boolean = false;
  let filterCount = 0;

  Object.keys(searchParams).forEach((key:string)=>{
    if(getselectedCount(searchParams[key]) >= 2){
      multiOptionSelected = true;
    }
    filterCount++;
  });

  if(searchPayLoad?.searchKeyword ||                                  //keyword search
     multiOptionSelected ||                                           //multiple options selected in multi-select filter
     (!multiOptionSelected && filterCount >= 3) ||                    //url has more than 2 params
     Number(metaFiltersOpted?.providerCount) <= 3 ||                  //total search result count is less than/equal to 3
     (searchPayLoad?.intakeYear || searchPayLoad?.intakeMonth)){      //started date is selected
      
    contentfulIndex = "noindex, nofollow";
  }

  return contentfulIndex;
} 

function getPGS_Canonical(searchParams: any, pathName: string, qualInUrl: string){

  const { sort, pageno, ...newObj } = {...searchParams};
  let canonicalUrl, multiOptionSelected:boolean = false;
  Object.keys(searchParams).forEach((key:string)=>{
    if(getselectedCount(searchParams[key]) >= 2){
      multiOptionSelected = true;
    }
  });

  if(multiOptionSelected && !searchParams?.university) 
    canonicalUrl = formSRPageURL({}, (qualInUrl && qualInUrl != "" ? `/${qualInUrl}` : pathName))
  else if(multiOptionSelected && searchParams?.university) 
    canonicalUrl = formSRPageURL({university: newObj?.university}, pathName);  
  else 
    canonicalUrl = formSRPageURL(newObj, pathName);

  return canonicalUrl;
} 

function getselectedCount(filterValueString: string|undefined) : number{
  if(!filterValueString) return 0;
  const filterValueArr = filterValueString?.trim()?.split(" ");
  return filterValueArr ? filterValueArr?.length : 0 ;
}

function formSRPageURL(searchParams: any, pathName: string){
  const PROJECT = process.env.PROJECT;
  let filterCount: number = 0;
  let formURL = getCustomDomain();
  formURL = formURL + pathName;

  function formatMultiSelctedOption(inputstring: string){
    return inputstring?.trim()?.replaceAll(" ", "+");
  }

  if(filterCount < 4 && searchParams?.university) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("university=" + searchParams?.university); filterCount++;}
  if(filterCount < 4 && searchParams?.subject) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + formatMultiSelctedOption(searchParams?.subject)); filterCount = filterCount + getselectedCount(searchParams?.subject);}
  if(filterCount < 4 && searchParams?.course) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("course=" + formatMultiSelctedOption(searchParams?.course)); filterCount = filterCount + getselectedCount(searchParams?.course);}
  if(filterCount < 4 && searchParams?.q) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("q=" + searchParams?.q); filterCount++;}
  if(filterCount < 4 && searchParams?.keyword) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("keyword=" + searchParams?.keyword); filterCount++}
  if(filterCount < 4 && searchParams?.qualification) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("qualification=" + searchParams?.qualification); filterCount++;}
  if(filterCount < 4 && searchParams?.location) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location=" + formatMultiSelctedOption(searchParams?.location)); filterCount = filterCount + getselectedCount(searchParams?.location);}
  if(filterCount < 4 && searchParams?.['study-method']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-method=" + searchParams?.['study-method']); filterCount++;}
  if(filterCount < 4 && searchParams?.['study_mode']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study_mode=" + searchParams?.['study_mode']); filterCount++;}
  if(filterCount < 4 && searchParams?.['intake-year']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intake-year=" + searchParams?.['intake-year']); filterCount++;}
  if(filterCount < 4 && searchParams?.['intake-month']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intake-month=" + searchParams?.['intake-month']); filterCount = filterCount + getselectedCount(searchParams?.['intake-month']);}
  if(filterCount < 4 && searchParams?.distance) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + `${PROJECT == "whatuni" ? "distance-from-home=" : "distance_from_home="}${searchParams?.distance}`; filterCount++;}
  if(filterCount < 4 && searchParams?.universityGroup) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("universityGroup=" + searchParams?.universityGroup); filterCount++;}
  if(filterCount < 4 && searchParams?.score) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("score=" + searchParams?.score); filterCount++;}
  if(filterCount < 4 && searchParams?.['location-type']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location-type=" + searchParams?.['location-type']); filterCount++;}
  if(filterCount < 4 && searchParams?.sort) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("sort=" + searchParams?.sort); filterCount++;}
  if(filterCount < 5 && searchParams?.pageno) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + `${PROJECT == "whatuni" ? "pageno=" : "page_no="}${searchParams?.pageno}`; filterCount++;} //if pageno applied then atmost 5 query params can contain

  return formURL;
}

export function getWU_SearchSEOFieldId(searchPayLoad: any){
  const locationSelected = searchPayLoad?.location?.length <= 0 ? false : (searchPayLoad?.location?.length >= 1 && searchPayLoad?.location?.[0] != "" ? true : false); 
  const subjectSelected = searchPayLoad?.searchSubject?.length <= 0 ? false : (searchPayLoad?.searchSubject?.length >= 1 && searchPayLoad?.searchSubject?.[0] != "" ? true : false);
  const keywordSelected = searchPayLoad?.searchKeyword && searchPayLoad?.searchKeyword?.trim() != "" ? true : false;
  const universitySelected = searchPayLoad?.university && searchPayLoad?.university?.trim() != "" ? true : false;

  let seoMetaFeildId = "Default";

  if(!universitySelected){  //SR page SEO's
    if (  //no filter
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `noFilters`
    } else if ( // region only
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `region`;
    } else if ( // multiple subjects
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject(2+)`;
    } else if ( // multiple subjects + studymode
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.parentQualification &&
      searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = 'subject(2+) + studyMode';
    } else if ( // subject + region
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.location?.length == 1 &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + region`
    } else if ( // subject + more regions
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      (locationSelected && searchPayLoad?.region?.length > 1) &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + region(2+)`;
    } else if ( // more region only
      !(subjectSelected || keywordSelected) &&
      (locationSelected && searchPayLoad?.region?.length > 1) &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `region(2+)`;
    } else if ( // only subject atmost atleast one
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
          seoMetaFeildId = `subject`
    } else if ( // subject + location
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      (locationSelected && searchPayLoad?.location?.length == 1) &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
          seoMetaFeildId = `subject + location`
    } else if ( // only studyLevel(for each study levels diff text possible)
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `studyLevel(${searchPayLoad?.parentQualification})`;
    } else if ( //subject + location + studyMode
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      (locationSelected && searchPayLoad?.location?.length == 1) &&
      !searchPayLoad?.parentQualification &&
      searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + studyMode + location`
  
    } else if (  // subject + subject (UG)
      (subjectSelected && searchPayLoad?.searchSubject?.length == 2) &&
      !locationSelected &&
      searchPayLoad?.parentQualification &&
      searchPayLoad?.parentQualification == "M" &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject(2) + studyLevel(${searchPayLoad?.parentQualification})`;
    } else if ( // subject + studyLevel(for each study levels diff text possible)
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + studyLevel(${searchPayLoad?.parentQualification})`;
  
    } else if ( // subject + studyLevel + studymode (doubt)
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.parentQualification &&
      searchPayLoad?.studyMode
    ) {
        seoMetaFeildId = `subject + studyLevel(${searchPayLoad?.parentQualification}) + studyMode`;
  
    } else if ( // subject + studyLevel + studymode + location
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      (locationSelected && searchPayLoad?.location?.length == 1) &&
      searchPayLoad?.parentQualification &&
      searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + studyLevel(${searchPayLoad?.parentQualification}) + studyMode + location`;
  
    } else if ( // subject + studyLevel + location
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      (locationSelected && searchPayLoad?.location?.length == 1) &&
      searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + studyLevel(${searchPayLoad?.parentQualification}) + location`;
    } 
    // else if ( // subject + studyLevel + region (doubt contradiction)
    //   ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
    //   locationSelected &&
    //   searchPayLoad?.parentQualification &&
    //   !searchPayLoad?.studyMode
    // ) {
    //   seoMetaFeildId = `subject + studyLevel + region`;
    // }  

    seoMetaFeildId = `SR - ${seoMetaFeildId}`;
  } else if(universitySelected){  //PR page SEO's
    if (((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) && searchPayLoad?.parentQualification) {
      seoMetaFeildId = `university + subject + studyLevel`;
    } else {
      seoMetaFeildId = `university + studyLevel`;
    }

    seoMetaFeildId = `PR - ${seoMetaFeildId}`
  }

  return `SEO - ${seoMetaFeildId} - Whatuni`;

}

export function getPGS_SearchSEOFieldId(searchPayLoad: any){

  const locationSelected = searchPayLoad?.location?.length <= 0 ? false : (searchPayLoad?.location?.length == 1 && searchPayLoad?.location?.[0] != "" ? true : false); 
  const subjectSelected = searchPayLoad?.searchSubject?.length <= 0 ? false : (searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.searchSubject?.[0] != "" ? true : false);
  const keywordSelected = searchPayLoad?.searchKeyword && searchPayLoad?.searchKeyword?.trim() != "" ? true : false;
  const universitySelected = searchPayLoad?.university && searchPayLoad?.university?.trim() != "" ? true : false;
  const startDateSelected = searchPayLoad?.intakeYear && searchPayLoad?.intakeYear?.trim() != "" && searchPayLoad?.intakeMonth?.trim() != "" ? true : false;
  let seoMetaFeildId = "Default";

  if(!universitySelected){    //SR page SEO's

    if( // subject
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      !startDateSelected
      ) {
          seoMetaFeildId = `subject`;
    } else if( // subject + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + location`;
    } else if( // subject + startDate
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      startDateSelected
    ) {
        seoMetaFeildId =`subject + startDate`;
    } else if( // subject + studyMode
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + courseType`;
    } else if( // subject + qualification
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + qualification`;
    } else if( // subject + qualification + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + qualification + location`;
    } else if( // subject + studyMode + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + courseType + location`;
    } else if( // subject + startDate + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      startDateSelected
    ) {
        seoMetaFeildId = `subject + startDate + location`;
    } else if( // subject + startDate + location + studyMode
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      startDateSelected
    ) {
        seoMetaFeildId = `subject + startDate + location + courseType`;
    } else if( // qualification
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification`;
    } else if( // qualification + location
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification + location`;
    } else if( // qualification + startDate
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMode &&
      startDateSelected
    ) {
        seoMetaFeildId = `qualification + startDate`;
    } else if( // qualification + studyMode
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType`;
    } else if( // qualification + studyMode + location
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType + location`;
    } else if( // qualification + studyMode + startDate
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType + startDate`;
    } else if( // qualification + studyMode + startDate + location
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMode &&
      startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType + startDate + location`;
    }
      seoMetaFeildId = `SR - ${seoMetaFeildId}`
  } else if(universitySelected){  //PR page SEO's
      if( // university alone
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMode &&
        !startDateSelected
        ) {
            seoMetaFeildId = `university`;
      } else if( // university + qualification
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMode &&
        !startDateSelected
      ) {
          seoMetaFeildId = `university + qualification`;
      }  else if( // university + startDate
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMode &&
        startDateSelected
      ) {
          seoMetaFeildId = `university + startDate`;
      }  else if( // university + studyMode
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        searchPayLoad?.studyMode &&
        !startDateSelected
      ) {
          seoMetaFeildId = `university + courseType`;
      }  else if( // university + studyMode + qualification
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        searchPayLoad?.childQualification &&
        searchPayLoad?.studyMode &&
        !startDateSelected
      ) {
          seoMetaFeildId = `university + courseType + qualification`;
      }  else if( // university + studyMode + startDate
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        searchPayLoad?.studyMode &&
        startDateSelected
      ) {
          seoMetaFeildId = `university + courseType + startDate`;
      }  else if( // subject + university
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMode &&
        !startDateSelected
      ) {
          seoMetaFeildId = `subject + university`;
      }  else if( // subject + university + studyMode
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        searchPayLoad?.studyMode &&
        !startDateSelected
      ) {
          seoMetaFeildId = `subject + university + courseType`;
      }  else if( // subject + university + startDate
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMode &&
        startDateSelected
      ) {
          seoMetaFeildId = `subject + university + startDate`;
      }  else if( // subject + university + qualification
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMode &&
        !startDateSelected
      ) {
          seoMetaFeildId = `subject + university + qualification`;
      }
      seoMetaFeildId = `PR - ${seoMetaFeildId}`;
  }

  return `SEO - ${seoMetaFeildId} - PGS`;

}

export function form_PGS_SR_breadcrumb(searchSEOPayload: any, displayNames: any, pathName: string){

  const qualSelected = searchSEOPayload?.childQualification && searchSEOPayload?.childQualification?.trim() !== "";
  const uniSelected = searchSEOPayload?.university && searchSEOPayload?.university?.trim() !== "";
  const subjectSelected = searchSEOPayload?.searchSubject?.length <= 0 ? false : (searchSEOPayload?.searchSubject?.length >= 1 && searchSEOPayload?.searchSubject?.[0] != "" ? true : false);
  const parentSubjectSelected = displayNames?.parentSubjectTextKey?.length <= 0 ? false : (displayNames?.parentSubjectTextKey?.length >= 1 && displayNames?.parentSubjectTextKey?.[0] != "" ? true : false);
  const keywordSelected = searchSEOPayload?.searchKeyword && searchSEOPayload?.searchKeyword?.trim() != "" ? true : false;
  const locationSelectd = searchSEOPayload?.location?.length <= 0 ? false : (searchSEOPayload?.location?.length >= 1 && searchSEOPayload?.location?.[0] != "" ? true : false);
  
  const displaySubject = `${displayNames?.subjectName && displayNames?.subjectName?.length > 0 ? displayNames?.subjectName?.join(", ") : ""}`;
  const displayLocation = `${displayNames?.locationName && displayNames?.locationName?.length > 0 ? displayNames?.locationName?.join(", ") : ""}`;
  const displayParentSubject = `${displayNames?.parentSubjectName && displayNames?.parentSubjectName?.length > 0 ? displayNames?.parentSubjectName[0] : ""}`;
  const displayUniversity = displayNames?.collegeName ?? "";
  const displayStudyMode= displayNames?.studyMode ?? "";

  const urlSubject = searchSEOPayload?.searchSubject && searchSEOPayload?.searchSubject?.length > 0 ? searchSEOPayload?.searchSubject?.join("+") : "";
  const urlKeyword = searchSEOPayload?.searchKeyword ?? "";
  const urlParentSubject = `${displayNames?.parentSubjectTextKey && displayNames?.parentSubjectTextKey?.length > 0 ? displayNames?.parentSubjectTextKey[0] : ""}`;
  const urlLocation = searchSEOPayload?.location && searchSEOPayload?.location?.length > 0 ? searchSEOPayload?.location?.join("+") : undefined;
  const urlUniversity = searchSEOPayload?.univresity ?? "";
  const urlStudyMode= searchSEOPayload?.studyMode?? "";

  let uniBC: any = [], subBC: any = [], qualBC: any = [], locBC: any = [], studyModeBC: any = [];

  if(qualSelected){//qualification
    const urlObj = {
      qualification: searchSEOPayload?.childQualification,
    }
    qualBC = [
      {url: `/${searchSEOPayload?.childQualification}`, label: displayNames?.studyLevel ?? searchSEOPayload?.childQualification},
      {url: formSRPageURL(urlObj, pathName), label: `${displayNames?.studyLevel ?? searchSEOPayload?.childQualification} Search Results`}];
  }
  if(subjectSelected || keywordSelected){//subject
    const urlObj = {
      course: urlSubject || urlKeyword,
      qualification: searchSEOPayload?.childQualification,
    }
    subBC = displaySubject ? [{url: formSRPageURL(urlObj, pathName), label: displaySubject}] : [];
    if(parentSubjectSelected && displayNames?.parentSubjectName?.length > 0 && urlParentSubject?.trim() != urlSubject?.trim()){
      const parentUrlObj = {
      course: urlParentSubject || "",
      qualification: searchSEOPayload?.childQualification,
      }
      subBC = urlParentSubject && displayParentSubject ? [{url: formSRPageURL(parentUrlObj, pathName), label: displayParentSubject}, ...subBC] : subBC;
    }
  }
  if(uniSelected){//university
    const urlObj = {
      course: urlSubject || urlKeyword,
      qualification: searchSEOPayload?.childQualification,
      university: urlUniversity
    }
    uniBC = displayUniversity ? [{url: formSRPageURL(urlObj, pathName), label: displayUniversity ?? urlUniversity}] : [];
  }
  if(locationSelectd){//location
    const urlObj = {
      course: urlSubject || urlKeyword,
      location: urlLocation,
      qualification: searchSEOPayload?.childQualification,
    }
    locBC = displayLocation ? [{url: formSRPageURL(urlObj, pathName), label: displayLocation}] : [];
  }
  if(searchSEOPayload?.studyMode){//studyMode
    const urlObj = {
      course: urlSubject || urlKeyword,
      location: urlLocation,
      university: urlUniversity,
      study_mode: searchSEOPayload?.studyMode,
      qualification: searchSEOPayload?.childQualification,
    }
    studyModeBC =  displayStudyMode ? [{url: formSRPageURL(urlObj, pathName), label: displayStudyMode ?? urlStudyMode}] : [];
  }

  return [ ...qualBC, ...subBC, ...uniBC, ...locBC, ...studyModeBC ];
}

export function get_WU_SR_PR_breadcrumb(searchparams: any, displayNameResponse: any, qualInUrl: string){
  
  const  get_find_a_course_url_label = (qualUrl: string) => {
    switch(qualUrl){
      case "degree-courses":            return ["/degrees/courses/", "Courses"]
      case "postgraduate-courses":      return ["/postgraduate-courses/", "Postgraduate"]
      case "foundation-degree-courses": return ["/foundation-degree-courses/", "Foundation Degree"]
      case "access-foundation-courses": return ["/access-foundation-courses/", "Access Foundation"]
      case "hnd-hnc-courses":           return ["/hnd-hnc-courses/", "HND/HNC"]
      default:                          return ["", ""];
    }
  }
  const formatMultiSelctedDisplaynameSEO = (inputstringArr: string[]): string => {
    if(Array.isArray(inputstringArr)) return inputstringArr?.length > 0 ? inputstringArr.join(", ") : "";
    return "";
  }
  const displaySubject  = displayNameResponse?.subjectName?.length > 0 ? formatMultiSelctedDisplaynameSEO(displayNameResponse?.subjectName) : ""; 
  const displayParentSubject  = displayNameResponse?.parentSubjectName?.length > 0 ? formatMultiSelctedDisplaynameSEO(displayNameResponse?.parentSubjectName) : "";
  const displayUniversity     = displayNameResponse?.collegeName ?? "";
  
  const urlSubject = searchparams?.subject ?? "";
  const urlKeyword = searchparams?.q ?? "";
  const urlParentSubject = displayNameResponse?.parentSubjectTextKey && displayNameResponse?.parentSubjectTextKey?.length > 0 ? displayNameResponse?.parentSubjectTextKey[0] : "";
  const urlUniversity = searchparams?.university ?? "";
  const [qualUrl, qualLabel] = get_find_a_course_url_label(qualInUrl);
  const srPathName = `/${qualInUrl}/search`;
  const prPathName = `/${qualInUrl}/csearch`;

  const breadcrumb_courses = qualUrl && (urlSubject || urlKeyword)? [{url: qualUrl, label: qualLabel}] : [];
  const breadCrumb_subject = qualUrl && displaySubject && urlSubject ? [{url: formSRPageURL({subject: urlSubject}, srPathName), label: `${displaySubject} courses`}] : [];
  const breadcrumb_keyword = qualUrl && displaySubject && urlKeyword ? [{url: formSRPageURL({subject: urlKeyword}, srPathName), label: `${displaySubject} courses`}] : [];
  const breadcrumb_parentSub = qualUrl && displayParentSubject && urlParentSubject && urlParentSubject != urlSubject && urlParentSubject != urlKeyword  ? [{url: formSRPageURL({subject: urlParentSubject}, srPathName), label:`${displayParentSubject} Degrees`}] : [];
  const breadcrumb_university = displayUniversity && urlUniversity ? [{url: formSRPageURL({university: urlUniversity}, prPathName), label: `Courses at ${displayUniversity}`}] : [];
  return [...breadcrumb_courses, ...breadcrumb_parentSub, ...breadCrumb_subject, ...breadcrumb_keyword, ...breadcrumb_university];
}
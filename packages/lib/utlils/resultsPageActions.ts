import { getSEOSearchPayload } from "@packages/shared-components/services/utils";
import { graphQlFetchFunction, httpBFFRequest } from "../server-actions/server-action";
import { getMetaDetailsQueryForSRpage } from "../graphQL/search-results";
import { MetaDataInterface, MetaFilterTypesReplace } from "../types/interfaces";
import { getCustomDomain } from "./common-function-server";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";

export async function getSearchPageMetaDetailsFromContentful(searchParams: any, qualInUrl: string, pathName: string) {
  
  //Initializing and Assigning values
  //const cookieStore = await cookies();
  // const pathName = cookieStore?.get("pathnamecookies")?.value ?? "";
  // const qualInUrl = pathName?.split("/")[1] || "{}";
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
    

  //2) contentful API hit
  const seoMetaFeildId: string  = process.env.PROJECT === "Whatuni" ? getWU_SearchSEOFieldId(searchPayLoad) : getPGS_SearchSEOFieldId(searchPayLoad); 
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  const customParams = {cache: "no-cache", next: {revalidate: 300}};
  let contentfulMetadata = await graphQlFetchFunction(query, false, customParams);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];
  console.log("seoMetaFeildId: ", seoMetaFeildId);
  console.log("contentfulMetadata: ", contentfulMetadata);

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
    canonical = getWU_Canonical(searchParams, pathName, `/${qualInUrl}/`);
  } else if(process.env.PROJECT == "PGS"){
    index = getPGS_Indexation(searchParams, searchPayLoad, metaFiltersOpted, contentfulMetadata?.robots);
    canonical = getPGS_Canonical(searchParams, pathName);
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
  } 

  return actualMetaData;
}

export function getMetaOptedDisplayNames(displayNameResponse: any): MetaFilterTypesReplace{
  return {
    courseCount: displayNameResponse?.courseCount ?? undefined,
    location:  displayNameResponse?.locationName ?? undefined,
    searchSubject: displayNameResponse?.subjectName ?? undefined,
    studylevel: displayNameResponse?.studyLevel ?? undefined,
    studymode: displayNameResponse?.studyMode ?? undefined,
    providerCount: displayNameResponse?.collegeCount ?? undefined,
    university: displayNameResponse?.collegeName ?? undefined,
    startMonth: displayNameResponse?.month ?? undefined,
    startYear: displayNameResponse?.year ?? undefined,
  }
}

export function getDisplayNameReqBody(searchPayLoad: any){
  const displayNameReqBody = { 

    "parentQualification": searchPayLoad?.parentQualification ?? "",
    "childQualification": searchPayLoad?.childQualification ?? "",
    "searchSubject": searchPayLoad?.searchSubject ?? "",
    "searchKeyword": searchPayLoad?.searchKeyword ?? "",
    "jacsCode": searchPayLoad?.jacsCode ?? "",
    "location": searchPayLoad?.region ?? searchPayLoad?.city ?? [],
    "studyMode": searchPayLoad?.studyMode ?? "",
    "collegeName": searchPayLoad?.university ?? "",

  }
  return displayNameReqBody;
}

export function replaceSEOPlaceHolder(inputText: string, metaFiltersOpted: MetaFilterTypesReplace) {

    if(inputText?.toUpperCase() === "NA" || !inputText) return "";

    if (inputText?.includes("[COURSE COUNT]")) {
      inputText = inputText.replace("[COURSE COUNT]", metaFiltersOpted?.courseCount ?? "")
    } 
    if (inputText?.includes("[PROVIDER COUNT]")) {
      inputText = inputText.replace("[PROVIDER COUNT]",metaFiltersOpted?.providerCount ?? "")
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
    if (inputText?.includes("[STUDY METHOD]")) {
      inputText = inputText.replace("[STUDY METHOD]", metaFiltersOpted?.studymode ?? "");
    } 
    if (inputText?.includes("[PROVIDER]")) {
      inputText = inputText.replace("[PROVIDER]", metaFiltersOpted?.university ?? "");
    } 
    if (inputText?.includes("[QUALIFICATION]")) {
      inputText = inputText.replace("[QUALIFICATION]", metaFiltersOpted?.studylevel ?? "");
    } 
    if (inputText?.includes("[MONTH]")) {
      inputText = inputText.replace("[MONTH]", metaFiltersOpted?.startMonth ?? "");
    } 
    if (inputText?.includes("[YEAR]")) {
      inputText = inputText.replace("[YEAR]", metaFiltersOpted?.startYear ?? "");
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

function getWU_Indexation(searchParams: any, searchPayLoad: any, metaFiltersOpted: MetaFilterTypesReplace){

    let multiOptionSelected:boolean = false;
    let noOfFilterSelected = 0;

    Object.keys(searchParams).forEach((key:string)=>{
      if(getselectedCount(searchParams[key]) >= 2){
        multiOptionSelected = true;
      }
      noOfFilterSelected++;
    });

    if(searchPayLoad?.searchKeyword ||                          //keyword search
       multiOptionSelected ||                                   //multiple options selected in multi-select filter
       (!multiOptionSelected && noOfFilterSelected > 4) ||      //url has more than 4 params
       Number(metaFiltersOpted?.providerCount) <= 3){           //total search result count is less than/equal to 3
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

  const { sort, ...newObj } = {...searchParams};
  let canonicalUrl;
  if(multiOptionSelected) canonicalUrl = formSRPageURL({}, (qualInUrl && qualInUrl != "" ? qualInUrl : pathName))
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

  if(searchPayLoad?.searchKeyword ||                          //keyword search
     multiOptionSelected ||                                   //multiple options selected in multi-select filter
     (!multiOptionSelected && filterCount >= 3) ||            //url has more than 2 params
     Number(metaFiltersOpted?.providerCount) <= 3 ||          //total search result count is less than/equal to 3
     (searchPayLoad?.intakeYear || searchPayLoad?.intakeMonth)){     //started date is selected
      
    contentfulIndex = "noindex, nofollow";
  }

  return contentfulIndex;
} 

function getPGS_Canonical(searchParams: any, pathName: string){

  const canonicalSearchParams = {...searchParams};
  const { sort, ...newObj } = canonicalSearchParams;
  let canonicalUrl;

  canonicalUrl = formSRPageURL(newObj, pathName);

  return canonicalUrl;
} 

function getselectedCount(filterValueString: string|undefined) : number{
  if(!filterValueString) return 0;
  const filterValueArr = filterValueString?.trim()?.split(" ");
  return filterValueArr ? filterValueArr?.length : 0 ;
}

function formSRPageURL(searchParams: any, pathName: string){
  let filterCount: number = 0;
  let formURL = getCustomDomain();
  formURL = formURL + pathName;

  if(filterCount < 4 && searchParams?.university) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("university=" + searchParams?.university); filterCount++;}
  if(filterCount < 4 && searchParams?.subject) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.subject); filterCount = filterCount + getselectedCount(searchParams?.subject);}
  if(filterCount < 4 && searchParams?.qualification) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("subject=" + searchParams?.qualification); filterCount++;}
  if(filterCount < 4 && searchParams?.location) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location=" + searchParams?.location); filterCount = filterCount + getselectedCount(searchParams?.location);}
  if(filterCount < 4 && searchParams?.['study-method']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-method=" + searchParams?.['study-method']); filterCount++;}
  if(filterCount < 4 && searchParams?.['study-mode']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("study-mode=" + searchParams?.['study-mode']); filterCount++;}
  if(filterCount < 4 && searchParams?.['intake-year']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intake-year=" + searchParams?.['intake-year']); filterCount++;}
  if(filterCount < 4 && searchParams?.['intake-month']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("intake-month=" + searchParams?.['intake-month']); filterCount = filterCount + getselectedCount(searchParams?.['intake-month']);}
  if(filterCount < 4 && searchParams?.distance) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("distance=" + searchParams?.distance); filterCount++;}
  if(filterCount < 4 && searchParams?.universityGroup) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("universityGroup=" + searchParams?.universityGroup); filterCount++;}
  if(filterCount < 4 && searchParams?.score) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("score=" + searchParams?.score); filterCount++;}
  if(filterCount < 4 && searchParams?.['location-type']) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("location-type=" + searchParams?.['location-type']); filterCount++;}
  if(filterCount < 4 && searchParams?.sort) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("sort=" + searchParams?.sort); filterCount++;}
  if(filterCount < 5 && searchParams?.pageno) {formURL = formURL + (formURL.includes("?") ? "&" : "?") + ("pageno=" + searchParams?.pageno); filterCount++;} //if pageno applied then atmost 5 query params can contain

  return formURL;
}

export function getWU_SearchSEOFieldId(searchPayLoad: any){

  //const locationSelected = searchPayLoad?.location?.length <= 0 ? false : (searchPayLoad?.location?.length >= 1 && searchPayLoad?.location?.[0] != "" ? true : false); 
  const subjectSelected = searchPayLoad?.searchSubject?.length <= 0 ? false : (searchPayLoad?.searchSubject?.length >= 1 && searchPayLoad?.searchSubject?.[0] != "" ? true : false);
  const keywordSelected = searchPayLoad?.searchKeyword && searchPayLoad?.searchKeyword?.trim() != "" ? true : false;
  const universitySelected = searchPayLoad?.university && searchPayLoad?.university?.trim() != "" ? true : false;
  const regionSelected = searchPayLoad?.region?.length <= 0 ? false : (searchPayLoad?.region?.length >= 1 && searchPayLoad?.region?.[0] != "" ? true : false); 
  const citySelected = searchPayLoad?.city?.length <= 0 ? false : (searchPayLoad?.city?.length >= 1 && searchPayLoad?.city?.[0] != "" ? true : false); 
  const locationSelected = regionSelected || citySelected;

  let seoMetaFeildId = "Default";

  console.log("searchPayLoad: ", searchPayLoad);
  console.log("searchPayLoad?.location: ", searchPayLoad?.location);
  console.log(((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected),
  (locationSelected && searchPayLoad?.location?.length == 1),
  searchPayLoad?.parentQualification,
  !searchPayLoad?.studyMode);

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
      regionSelected &&
      !citySelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `region`;
    } else if ( // multiple subjects
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      !regionSelected &&
      !citySelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject(2+)`;
    } else if ( // multiple subjects + studymode
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      !regionSelected &&
      !citySelected &&
      !searchPayLoad?.parentQualification &&
      searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = 'subject(2+) + studyMode';
    } else if ( // subject + region
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      regionSelected &&
      !citySelected &&
      searchPayLoad?.location?.length == 1 &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + region`
    } else if ( // subject + studyLevel + region (doubt contradiction)
      ((subjectSelected && searchPayLoad?.searchSubject?.length > 1) || keywordSelected) &&
      regionSelected &&
      !citySelected &&
      searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + studyLevel + region`;
    } else if ( // subject + more regions
      ((subjectSelected && searchPayLoad?.searchSubject?.length == 1) || keywordSelected) &&
      (regionSelected && searchPayLoad?.region?.length > 1) &&
      !citySelected &&
      !searchPayLoad?.parentQualification &&
      !searchPayLoad?.studyMode
    ) {
      seoMetaFeildId = `subject + region(2+)`;
    } else if ( // more region only
      !(subjectSelected || keywordSelected) &&
      (regionSelected && searchPayLoad?.region?.length > 1) &&
      !citySelected &&
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

    seoMetaFeildId = `SR - ${seoMetaFeildId}`;
  } else if(universitySelected){  //PR page SEO's

    // if(searchPayLoad?.parentQualification != "all"){
    //     if( //  university + no filter
    //       !(subjectSelected || keywordSelected) &&
    //       !locationSelected &&
    //       !searchPayLoad?.studyMode
    //     ){
    //       seoMetaFeildId = `studyLevel(UG/PG)`;
    //     } else if( //  university + subject alone
    //       (subjectSelected || keywordSelected) &&
    //       !locationSelected &&
    //       !searchPayLoad?.studyMode
    //     ){
    //       seoMetaFeildId = `subject + studyLevel(UG/PG)`;
    //     } else if( // university + subject + location
    //       (subjectSelected || keywordSelected) &&
    //       locationSelected &&
    //       !searchPayLoad?.studyMode
    //     ){
    //       seoMetaFeildId = `subject + studyLevel(UG/PG) + location`;
    //     } else if( // university + subject + studymode + location
    //       (subjectSelected || keywordSelected) &&
    //       locationSelected &&
    //       searchPayLoad?.studyMode
    //     ){
    //       seoMetaFeildId = `subject + studyLevel(UG/PG) + studyMode + location`;
    //     } else if( // university + studymode
    //       !(subjectSelected || keywordSelected) &&
    //       !locationSelected &&
    //       searchPayLoad?.studyMode
    //     ){
    //       seoMetaFeildId = `studyLevel(UG/PG) + studyMode`;
    //     }
    // } else if(searchPayLoad?.parentQualification == "all"){
    //   seoMetaFeildId = `studyLevel(all)`;
    // }
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
      !searchPayLoad?.studyMethod &&
      !startDateSelected
      ) {
          seoMetaFeildId = `subject`;
    } else if( // subject + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + location`;
    } else if( // subject + startDate
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      startDateSelected
    ) {
        seoMetaFeildId =`subject + startDate`;
    } else if( // subject + studyMethod
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      !searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + courseType`;
    } else if( // subject + qualification
      (subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + qualification`;
    } else if( // subject + qualification + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + qualification + location`;
    } else if( // subject + studyMethod + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `subject + startDate + location`;
    } else if( // subject + startDate + location
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      startDateSelected
    ) {
        seoMetaFeildId = `subject + startDate + location`;
    } else if( // subject + startDate + location + studyMethod
      (subjectSelected || keywordSelected) &&
      locationSelected &&
      !searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
      startDateSelected
    ) {
        seoMetaFeildId = `subject + startDate + location + courseType`;
    } else if( // qualification
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification`;
    } else if( // qualification + location
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification + location`;
    } else if( // qualification + startDate
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      !searchPayLoad?.studyMethod &&
      startDateSelected
    ) {
        seoMetaFeildId = `qualification + startDate`;
    } else if( // qualification + studyMethod
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType`;
    } else if( // qualification + studyMethod + location
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
      !startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType + location`;
    } else if( // qualification + studyMethod + startDate
      !(subjectSelected || keywordSelected) &&
      !locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
      startDateSelected
    ) {
        seoMetaFeildId = `qualification + courseType + startDate`;
    } else if( // qualification + studyMethod + startDate + location
      !(subjectSelected || keywordSelected) &&
      locationSelected &&
      searchPayLoad?.childQualification &&
      searchPayLoad?.studyMethod &&
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
        !searchPayLoad?.studyMethod &&
        !startDateSelected
        ) {
            seoMetaFeildId = `university`;
      } else if( // university + qualification
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMethod &&
        !startDateSelected
      ) {
          seoMetaFeildId = `university + qualification`;
      }  else if( // university + startDate
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMethod &&
        startDateSelected
      ) {
          seoMetaFeildId = `university + startDate`;
      }  else if( // university + studyMethod
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        searchPayLoad?.studyMethod &&
        !startDateSelected
      ) {
          seoMetaFeildId = `university + courseType`;
      }  else if( // university + studyMethod + qualification
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        searchPayLoad?.childQualification &&
        searchPayLoad?.studyMethod &&
        !startDateSelected
      ) {
          seoMetaFeildId = `university + courseType + qualification`;
      }  else if( // university + studyMethod + startDate
        !(subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        searchPayLoad?.studyMethod &&
        startDateSelected
      ) {
          seoMetaFeildId = `university + courseType + startDate`;
      }  else if( // subject + university
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMethod &&
        !startDateSelected
      ) {
          seoMetaFeildId = `subject + university`;
      }  else if( // subject + university + studyMethod
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        searchPayLoad?.studyMethod &&
        !startDateSelected
      ) {
          seoMetaFeildId = `subject + university + courseType`;
      }  else if( // subject + university + startDate
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        !searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMethod &&
        startDateSelected
      ) {
          seoMetaFeildId = `subject + university + startDate`;
      }  else if( // subject + university + qualification
        (subjectSelected || keywordSelected) &&
        !locationSelected &&
        searchPayLoad?.childQualification &&
        !searchPayLoad?.studyMethod &&
        !startDateSelected
      ) {
          seoMetaFeildId = `subject + university + qualification`;
      } 
      seoMetaFeildId = `PR - ${seoMetaFeildId}`;
  }

  return `SEO - ${seoMetaFeildId} - PGS`;

}
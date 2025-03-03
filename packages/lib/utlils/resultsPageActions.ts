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
      inputText = replaceMultiplePlaceholder("[Region]", inputText, metaFiltersOpted?.location);
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
    inputText.replace(pattern, displayText);
    index++;
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
      if(`${process.env.PROJECT}` == "PGS"){
        if (studylevel == "M") {return "M";} 
        else if (studylevel == "L") {return "L";}
        else if (studylevel == "T") {return "ACC-Fnd";}
        else if (studylevel == "A") {return "FND";}
        else if (studylevel == "N") {return "hnd-hnc";}
      } else return studylevel; 
  }

  if (  //no filter
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // region only
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // multiple subjects
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length > 1 &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // multiple subjects + studymode
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length > 1 &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    
  } else if ( // subject + region
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // subject + studyLevel + region (doubt contradiction)
    searchPayLoad?.searchSubject &&
    searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // subject + more regions
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length > 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // more region only
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length > 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // only subject atmost atleast one
    !searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // subject + location
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
  } else if ( // only studyLevel(for each study levels diff text possible)
    !searchPayLoad?.searchSubject &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = `studyLevel(${studyLevelCotentfulCode})`;
  } else if ( //subject + location + studyMode
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    !searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    
  } else if (  // subject + subject (UG)
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 2 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.parentQualification == "degree" &&
    !searchPayLoad?.studyMode
  ) {
   
  } else if ( // subject + studyLevel(for each study levels diff text possible)
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject" + `studylevel(${studyLevelCotentfulCode})`;

  } else if ( // subject + studyLevel + studymode (doubt)
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    !searchPayLoad?.location &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
      const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
      seoMetaFeildId = "subject" + `studyLevel(${studyLevelCotentfulCode})` + "studyMode";

  } else if ( // subject + studyLevel + studymode + location
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    searchPayLoad?.parentQualification &&
    searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject" + `studyLevel(${studyLevelCotentfulCode})` + "studyMode" + "location";

  } else if ( // subject + studyLevel + location
    searchPayLoad?.searchSubject &&
    searchPayLoad?.searchSubject?.length == 1 &&
    searchPayLoad?.location &&
    searchPayLoad?.location?.length == 1 &&
    searchPayLoad?.parentQualification &&
    !searchPayLoad?.studyMode
  ) {
    
    const studyLevelCotentfulCode = getStudylevelSeoField(searchPayLoad?.parentQualification);
    seoMetaFeildId = "subject" + `studyLevel(${studyLevelCotentfulCode})` + "location";
  } 

  return "SEO - " + seoMetaFeildId + " - Whatuni";

}

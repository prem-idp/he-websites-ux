import { MetaDataProps } from "@whatuni/src/app/(sr-and-pg-pages)/[hero]/search/page";
import { getDecodedCookie } from "./result-filters";
import { getSearchPayload } from "@packages/shared-components/services/utils";
import { headers } from "next/headers";
import { graphQlFetchFunction } from "../server-actions/server-action";
import { getMetaDetailsQueryForSRpage } from "../graphQL/search-results";

interface MetaDataInterface{
    title: string,
    desc: string,
    keyword: string,
    canonical: string,
    indexation: string,
}

export async function getSRMetaDetailsFromContentful(searchParams: any){

    //Initializing and Assigning values
    let filterCookieParam;
    const headersList = await headers();
    const referer = headersList.get("referer");
    const pathnameArray = referer?.split?.("/");

    if (typeof document !== "undefined") {
        filterCookieParam = JSON.parse(
          getDecodedCookie("filter_param") || "{}"
        );
    }
    let searchPayLoad = getSearchPayload(
        searchParams,
          filterCookieParam,
          pathnameArray?.[3]?.split?.("-")?.[0]
    );

    //
    
    //1) bff API hit


    //2) contentful API hit
    const query = getMetaDetailsQueryForSRpage("");
    const metadata = await graphQlFetchFunction(query);
    const actualMetaData = metadata?.pageSeoFieldsCollection?.items[0];

    //
    const studylevel = `${process.env.PROJECT}` == "Whatuni" ? searchPayLoad?.parentQualification : searchPayLoad?.childQualification;
    


    return actualMetaData;
}

function getSeoMetaFeildId(searchPayLoad: any){
    if(!searchPayLoad?.searchSubject && !searchPayLoad?.location && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ //no filter

    } else if(!searchPayLoad?.searchSubject && searchPayLoad?.location && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // region only

    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length > 1 && !searchPayLoad?.location && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // multiple subjects

    } else if(!searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length > 1 && !searchPayLoad?.location && !searchPayLoad?.parentQualification && searchPayLoad?.studyMode){ // multiple subjects + studymode

    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.location && searchPayLoad?.location?.length == 1 && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // subject + region

    } else if(searchPayLoad?.searchSubject && searchPayLoad?.location && searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){  // subject + studyLevel + region (doubt contradiction)

    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.location && searchPayLoad?.location?.length > 1 && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){  // subject + more regions

    } else if(!searchPayLoad?.searchSubject && searchPayLoad?.location && searchPayLoad?.location?.length > 1 && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){  // more region only

    } else if(!searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && !searchPayLoad?.location && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // only subject atmost atleast one

    } else if(searchPayLoad?.searchSubject  && searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.location && searchPayLoad?.location?.length == 1 && !searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // subject + location

    } else if(!searchPayLoad?.searchSubject && !searchPayLoad?.location && searchPayLoad?.parentQualification == "degree" && !searchPayLoad?.studyMode){ // only UG studyLevel

    } else if(!searchPayLoad?.searchSubject && !searchPayLoad?.location && searchPayLoad?.parentQualification == "postgraduate" && !searchPayLoad?.studyMode){ // only PG studyLevel

    } else if(!searchPayLoad?.searchSubject && !searchPayLoad?.location && searchPayLoad?.parentQualification == "access-founation" && !searchPayLoad?.studyMode){ // only access-foundation studyLevel

    } else if(!searchPayLoad?.searchSubject && !searchPayLoad?.location && searchPayLoad?.parentQualification == "foundation" && !searchPayLoad?.studyMode){ // only foundation studyLevel

    } else if(!searchPayLoad?.searchSubject && !searchPayLoad?.location && searchPayLoad?.parentQualification == "hnd-hnc" && !searchPayLoad?.studyMode){ // only hnd-hnc studyLevel

    } else if(searchPayLoad?.searchSubject  && searchPayLoad?.searchSubject?.length == 1 && !searchPayLoad?.location && searchPayLoad?.parentQualification && searchPayLoad?.parentQualification == "degree" && !searchPayLoad?.studyMode){ //subject + studylevel(UG)
        
    } else if(searchPayLoad?.searchSubject  && searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.location && searchPayLoad?.location?.length == 1 && !searchPayLoad?.parentQualification && searchPayLoad?.studyMode){ //subject + location + studyMode
        
    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 2 && !searchPayLoad?.location && searchPayLoad?.parentQualification && searchPayLoad?.parentQualification == "degree" && !searchPayLoad?.studyMode){ // subject + subject (UG)
        
    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && !searchPayLoad?.location && searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // subject + studyLevel
        if(searchPayLoad?.parentQualification == "degree"){

        } else if(searchPayLoad?.parentQualification == "postgraduate"){

        } else if(searchPayLoad?.parentQualification == "access-foundation"){

        } else if(searchPayLoad?.parentQualification == "foundation"){

        } else if(searchPayLoad?.parentQualification == "hnd-hnc"){

        }
    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && !searchPayLoad?.location && searchPayLoad?.parentQualification && searchPayLoad?.studyMode){ // subject + studyLevel + studymode (doubt)
        if(searchPayLoad?.parentQualification == "degree"){

        } else if(searchPayLoad?.parentQualification == "postgraduate"){

        } else if(searchPayLoad?.parentQualification == "access-foundation"){

        } else if(searchPayLoad?.parentQualification == "foundation"){

        } else if(searchPayLoad?.parentQualification == "hnd-hnc"){

        }
    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.location && searchPayLoad?.location?.length == 1 && searchPayLoad?.parentQualification && searchPayLoad?.studyMode){ // subject + studyLevel + studymode + location
        if(searchPayLoad?.parentQualification == "degree"){

        } else if(searchPayLoad?.parentQualification == "postgraduate"){

        } else if(searchPayLoad?.parentQualification == "access-foundation"){

        } else if(searchPayLoad?.parentQualification == "foundation"){

        } else if(searchPayLoad?.parentQualification == "hnd-hnc"){

        }
    } else if(searchPayLoad?.searchSubject && searchPayLoad?.searchSubject?.length == 1 && searchPayLoad?.location && searchPayLoad?.location?.length == 1 && searchPayLoad?.parentQualification && !searchPayLoad?.studyMode){ // subject + studyLevel + location
        if(searchPayLoad?.parentQualification == "degree"){

        } else if(searchPayLoad?.parentQualification == "postgraduate"){

        } else if(searchPayLoad?.parentQualification == "access-foundation"){

        } else if(searchPayLoad?.parentQualification == "foundation"){

        } else if(searchPayLoad?.parentQualification == "hnd-hnc"){

        }
    }

    function getStudylevelSeoField(studylevel: string){
        if(studylevel == "degree"){

        } else if(studylevel == "postgraduate"){

        } else if(studylevel == "access-foundation"){

        } else if(studylevel == "foundation"){

        } else if(studylevel == "hnd-hnc"){

        }
    }
}
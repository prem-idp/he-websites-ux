"use client";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import SearchLabelsSkeleton from "@packages/shared-components/skeleton/search-result/search-labels-skeleton";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {  httpClientRequest} from "@packages/lib/utlils/clientapirequest";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { useSearchParams } from "next/navigation";
import { getSearchPayload } from "@packages/shared-components/services/utils";

const SearchLabelsContent =  ({searchPayLoad}:any) => {
  const router = useRouter();
  const [filterList, setFilterList] = useState<any[]>([]); 
  let searchLabel: any;
    useEffect(() => {
    async function getSearchLabels() {
      
  try {     
    const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
    searchLabel = await httpClientRequest(displayNameBFFEndPt, 
    searchPayLoad, 
    "POST", 
    `${process.env.NEXT_PUBLIC_X_API_KEY}`, 
    "no-cache", 
    0, 
    {});
  } catch (error) {
    console.log("error", error);
  }
  const filters: any[] = [];
  // Add filters only if they exist
   searchLabel?.year ? filters.push({key:'year' , value:searchLabel?.year}) : filters.push({key:'year' , value:"2025"});
  if (searchLabel?.studyLevel) filters.push({key:'study-level' , value:searchLabel?.studyLevel});
  if (searchLabel?.subjectName) {
    if(searchLabel?.subjectName?.length === 1) {
    filters.push({key: process.env.PROJECT === "Whatuni" ? 'subject' :'course' , value:searchLabel?.subjectName?.[0]});
    } else {
      searchLabel?.subjectName?.forEach((value:any, index:any) => {
        filters.push({key: process.env.PROJECT === "Whatuni" ? 'subject' :'course' , value:value});
      });
    }
  }
  if (searchLabel?.studyMode) filters.push({key:process.env.PROJECT === "Whatuni" ? 'study-mode' :'study_mode'  , value:searchLabel?.studyMode});
  if (searchLabel?.studyMethod) filters.push({key:process.env.PROJECT === "Whatuni" ? 'study-method' :'study_method'  , value:searchLabel?.studyMethod});
  if (searchLabel?.locationType) filters.push({key:'location-type'  , value:searchLabel?.locationType});
  if (searchLabel?.universityGroup) filters.push({key:'russell-group'  , value:searchLabel?.universityGroup});
  if(searchLabel?.locationName?.length === 1) {
    filters.push({key:'location' , value:searchLabel?.locationName});
  } else {
    searchLabel?.locationName?.forEach((value:any, index:any) => {
      filters.push({key:'location' , value:value});
    });
  }
  setFilterList(Array.from(new Set(filters)));
         }
getSearchLabels();

}, [searchPayLoad]);

  const openFilterFunction = () => {
    emitter.emit("isfilterOpen", "subject");
  };
  const removeFilter = (filterKey: string,value:any) => {
    const currentParams = new URLSearchParams(window.location.search);  
    const filterCookie = JSON.parse(decodeURIComponent(
      document.cookie.split('filter_param=')[1]?.split(';')[0] || '{}'
    ));  
    // Remove the specific filter from URL params
    if(currentParams.has(filterKey)) {
      if(currentParams.get(filterKey)?.includes(" ") && (filterKey === "subject" || filterKey === "course" || filterKey === "location")) {
        const updatedSubjects = currentParams.get(filterKey)?.split(" ")?.filter(val => val !== (value?.includes(" ") ? value?.replace(" ","-")?.toLowerCase() : value?.toLowerCase()));
        const updatedSubParam = updatedSubjects && updatedSubjects?.length > 0 ? updatedSubjects?.join('+') : undefined;
        updatedSubParam && currentParams.set(filterKey, updatedSubParam || "");
      } else {
        
       currentParams.delete(filterKey); 
      } 
    } 
    // Remove from cookies if needed
    if (document.cookie.includes('filter_param')) {
      if (filterCookie[filterKey]) {
        delete filterCookie[filterKey];
        document.cookie = `filter_param=${encodeURIComponent(JSON.stringify(filterCookie)) || "{}"} ; path=/`;
      }
         // Check if URL has fewer than 4 params
      if (currentParams?.toString()?.split('&')?.length < 4 && !(currentParams.has("subject") && currentParams?.toString()?.split("+").length === 4)) {
      for (const [key] of Object.entries(filterCookie)) {
        if (!currentParams.has(key)) {
          currentParams.set(key, filterCookie[key]);
          delete filterCookie[key];
          document.cookie = `filter_param=${encodeURIComponent(JSON.stringify(filterCookie)) || "{}"} ; path=/`;
          break;
        }
      }
    }
    }
    const updatedUrl = `${window.location.pathname}${
      currentParams.toString() ? `?${decodeURIComponent(currentParams.toString())}` : ''
    }`;
   window.location.href = updatedUrl
  };

  return (
    <>
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[8px] md:px-[20px] xl:px-0 z-[3]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px] uppercase">
            {filterList?.map((items, index) => (
              <li
                className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]"
                key={index + 1}
              >
                {items?.value}
                {index !== 0 && index !== 1 ?
                <svg onClick={()=> removeFilter(items?.key,items?.value)}
                  className="cursor-pointer"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#3460DC"
                    strokeWidth="1.13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> : <></>
}
              </li>
            ))}
            <li
              className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[2px] font-semibold x-small flex items-center gap-[2px]"
              onClick={openFilterFunction}
            >
              <div aria-label="Plus Icon">
                <svg
                  className="cursor-pointer"
                  width="7"
                  height="20"
                  viewBox="0 0 7 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55756 10.508H4.31356V12.788H2.68156V10.508H0.437563V8.96H2.68156V6.668H4.31356V8.96H6.55756V10.508Z"
                    fill="#3460DC"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <SearchLabelsSkeleton/> */}
    </>
  );
};

// Main component with Suspense boundary
const SearchLabels = ({searchPayLoad}:any) => {
  return (
    <Suspense fallback=''>
      <SearchLabelsContent searchPayLoad={searchPayLoad}/>
    </Suspense>
  );
};


export default SearchLabels;

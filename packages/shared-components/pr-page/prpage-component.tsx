"use server";
import React from "react";
import Subscribecomponents from "@packages/shared-components/common-utilities/newsletter-and-subscription/subscribe-newsletter/subscribecomponents";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import ProviderResultsCard from "./provider-results-card/provider-results-card";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import SearchLabels from "@packages/shared-components/sr-page/search-labels/search-labels";
import ContentfulPreviewProvider from "@packages/lib/contentful-preview/ContentfulLivePreviewProvider";
import Paginations from "@packages/shared-components/common-utilities/paginations/paginations";
import PrPageTopSection from "./PrTopSection/Pr-top-section";

const API_URL = "https://api.dev.dom-services.idp-connect.com/dom-search/v1/search/providerResults"; 

const searchPRResults = async(searchparams:any)=> {
 
  const payloads = { 
    "parentQualification": "M", 
    "childQualification": "", 
    "searchCategoryCode": "", 
    "searchSubject": "", 
    "searchKeyword": "", 
    "jacsCode": "", 
    "location": "", 
    "studyMode": "", 
    "studyMethod": "", 
    "collegeId": "466742", 
    "pageNo": "1", 
    "locationType": "", 
    "intakeYear": "", 
    "intakeMonth": "", 
    "sortBy": "", 
    "userCoordinates": "51.5072,-0.1276", 
    "distance": "", 
    "ucasTariffRange": "", 
    "userRegionArray": "", 
    "dynamicRandomNumber": "", 
    "universityGroup": "" 
  } ;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "sitecode":"WU_WEB",
        "Content-Type": "application/json",
        "x-api-key" : `YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc`, // If needed
      },
      body: JSON.stringify(payloads),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Search Results:", data);
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

const transformProviderListData = (data: any) => {
  if (!data || !Array.isArray(data.searchResultsList)) {
    console.error("❌ searchResultsList is missing or not an array", data);
    return [];
  }

  return data.searchResultsList.flatMap((college: any) =>
    Array.isArray(college.bestMatchCoursesList)
      ? college.bestMatchCoursesList.map((course: any) => ({
          title: course.courseTitle || "Unknown Title",
          provideFav: false,
          modulesList: course.modulesInfo || [], // Ensure modulesList is always an array
          tagLocation: college.adminVenue || "Unknown Location",
          points:
            course.minUcasPoints && course.maxUcasPoints
              ? `${course.minUcasPoints}-${course.maxUcasPoints} UCAS points`
              : "UCAS points not available",
        }))
      : [] // Ensure an empty array if bestMatchCoursesList is missing
  );
};


const PrPageComponent = async ({ searchparams }: any) => {

  const data = await searchPRResults(searchparams); // Fetch earach the PR results
  const providerList = transformProviderListData(data); // transform Provider List Data results

  const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Scholarships",
    },
    {
      url: "",
      label: "Search results",
    },
  ];

  
  return (
    <>
      <section className="bg-white hidden lg:block">
        <div className="max-w-container mx-auto pt-[24px] pb-[8px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>
      <PrPageTopSection searchResultlist={data}/>
      <SearchFilterButtons />
      <SearchLabels />
      <ProviderResultsCard searchResultlist={providerList}>
        <Paginations
           totalPages={Math.ceil(data?.totalCourseCount / 10)}
           currentPage={searchparams?.pageNo?? 1}
        />
      </ProviderResultsCard>
      <ContentfulPreviewProvider
        locale="en-GB"
        enableInspectorMode={false}
        enableLiveUpdates={false}
        debugMode={false}
      >
        <Subscribecomponents iscontentPreview={false} />
      </ContentfulPreviewProvider>
    </>
  );
};

export default PrPageComponent;

"use server";
import React from "react";
import { cookies } from "next/headers";
import Subscribecomponents from "@packages/shared-components/common-utilities/newsletter-and-subscription/subscribe-newsletter/subscribecomponents";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import ProviderResultsCard from "./provider-results-card/provider-results-card";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import SearchLabels from "@packages/shared-components/sr-page/search-labels/search-labels";
import ContentfulPreviewProvider from "@packages/lib/contentful-preview/ContentfulLivePreviewProvider";
import Paginations from "@packages/shared-components/common-utilities/paginations/paginations";
import PrPageTopSection from "./PrTopSection/Pr-top-section";
import SrPageNoResults from "../sr-page/no-results/srpage-noresult";
import { headers } from "next/headers";

interface Payload {
  parentQualification: string;
  //collegeId: string;
  pageNo: string; // Changed 'any' to 'string' for consistency
  userCoordinates: string;
  [key: string]: string; // Index signature allows dynamic keys
}

interface SearchParams {
  [key: string]: string | undefined;
}

export async function constructPayload(
  searchparams: SearchParams = {}
): Promise<Payload> {
  //  const cookieStore = await cookies(); // Get cookies in App Router
  //  const cookieMap = Object.fromEntries(cookieStore.getAll().map((c) => [c.name, c.value]));
  const basePayload: Payload = {
    parentQualification: "M",
    pageNo: searchparams?.pageno || "1", // Default to "1" if not in searchparams
    userCoordinates: "51.5072,-0.1276",
  };
  // Start with the base payload
  const payloads: Payload = { ...basePayload };

  // Object.keys(cookieMap).forEach((key) => {
  //   if (cookieMap[key] !== undefined && cookieMap[key] !== null) {
  //     payloads[key] = cookieMap[key];
  //   }
  // });

  Object.keys(searchparams).forEach((key) => {
    if (searchparams[key] !== undefined && searchparams[key] !== null) {
      // If the key is 'university', map it to 'collegeName' in payloads
      if (key === "university") {
        payloads["collegeName"] = searchparams[key];
      }
      if (key === "pageno") payloads["pageNo"] = searchparams[key];
      else {
        payloads[key] = searchparams[key];
      }
    }
  });

  return payloads;
}

const searchPRResults = async (searchparams: any) => {
  const payloads = await constructPayload(searchparams);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/providerResults`, {
      method: "POST",
      headers: {
        "sitecode": `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`,
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`
      },
      body: JSON.stringify(payloads),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data Response " + JSON.stringify(data));
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
  return data.searchResultsList.flatMap(
    (college: any) =>
      Array.isArray(college.bestMatchCoursesList)
        ? college.bestMatchCoursesList.map((course: any) => ({
          collegeId: college?.collegeId,
          collegeName: college?.collegeTextKey,
          courseId: course?.courseId,
          cdpagesurl: `/degrees/${course?.courseTitleTextKey}/${college?.collegeTextKey}/${course?.courseId}/${college?.collegeId}`,
          pageName: "PR",
          title: course?.courseTitle || "Unknown Title",
          provideFav: false,
          subOrderItemid: course?.enquiryDetails?.subOrderItemId,
          sponsoredListingFlag: college?.sponsoredListingFlag,
          manualBoostingFlag: college?.manualBoostingFlag,
          orderItemId: course?.enquiryDetails?.orderItemId,
          modulesList: course?.modulesInfo || [], // Ensure modulesList is always an array
          tagLocation: college?.adminVenue || "Unknown Location",
          points:
            course.minUcasPoints && course.maxUcasPoints
              ? `${course.minUcasPoints}-${course.maxUcasPoints} UCAS points`
              : 0 - 0,
          hasProspectus:
            course.enquiryDetails?.prospectusFlag === "Y" || false,
          hasWebsite: course.enquiryDetails?.websiteFlag === "Y" || false,
          hasEmail: course.enquiryDetails?.emailFlag === "Y" || false,
        }))
        : [] // Ensure an empty array if bestMatchCoursesList is missing
  );
};

const PrPageComponent = async ({ searchparams }: any) => {
  const headersList = await headers();
  const referer = headersList.get("referer");
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
      <PrPageTopSection searchResultlist={data} />
      <SearchFilterButtons />
      <SearchLabels />
      {!providerList.length ? (
        <SrPageNoResults />
      ) : (
        <ProviderResultsCard searchResultlist={providerList}>
          <Paginations
            totalPages={Math.ceil(data?.totalCourseCount / 10)}
            initialPage={searchparams?.pageNo || 1}
            searchParams={{ param: searchparams, currentPage: referer }}
          />
        </ProviderResultsCard>
      )}

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

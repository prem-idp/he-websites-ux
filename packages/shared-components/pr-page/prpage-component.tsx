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
import { getSearchPayload, getQualCode } from "../services/utils";
import { headers } from "next/headers";
import { v4 as uuidv4 } from 'uuid';
import { getCustomDomain } from "@packages/lib/utlils/common-function-server";
import { get_WU_SR_PR_breadcrumb } from "@packages/lib/utlils/resultsPageActions";
import { SRDisplayNameEndPt } from "../services/bffEndpoitConstant";
import { httpBFFRequest } from "@packages/lib/server-actions/server-action";
import SchemaTagLayoutComponent from "../common-utilities/schematag-layout/SchemaTagLayoutComponent";
import SortingFilterGen from "../sr-page/sorting-filter/sortingFilter";
import {
  prSortingFilter,
  wuscaCategories
} from "@packages/shared-components/services/constants";

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

const searchPRResults = async (payloads: any) => {
  try {
    const uuid = uuidv4();
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/providerResults`, {
      method: "POST",
      headers: {
        "sitecode": `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`,
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
        "x-correlation-id": uuid,
        "cache": "no-store"
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

const transformProviderListData = (data: any, pathname: any) => {
  const sitecode = `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`
  const qualCode = getQualCode(pathname);
  if (!data || !Array.isArray(data.searchResultsList)) {
    console.error("❌ searchResultsList is missing or not an array", data);
    return [];
  }
  return data.searchResultsList.flatMap((college: any) =>
    Array.isArray(college.bestMatchCoursesList)
      ? college.bestMatchCoursesList.map((course: any) => {
        // Ensure correct UCAS points formatting
        const points = [course.minUcasPoints, course.maxUcasPoints]
          .filter(Boolean)
          .join("-");

        return {
          collegeId: college?.collegeId,
          collegeName: college?.collegeDisplayName,
          courseId: course?.courseId,
          courseSummary: course?.courseSummary,
          cdpagesurl: `/degrees/${course?.courseTitleTextKey}/${college?.collegeTextKey}/cd/${course?.courseId}/${college?.collegeId}`,
          pageName: "coursesearchresult",
          title: course?.courseTitle || "",
          provideFav: false,
          subOrderItemId: course?.enquiryDetails?.subOrderItemId,
          sponsoredListingFlag: college?.sponsoredListingFlag,
          manualBoostingFlag: college?.manualBoostingFlag,
          orderItemId: course?.enquiryDetails?.orderItemId,
          modulesList: course?.modulesDesc, // Ensure modulesList is always an array
          tagLocation: course?.availabilityDetails?.studyMode || "",
          points: points, // Updated points logic
          hasProspectus: course.enquiryDetails?.prospectusFlag === "Y" || false,
          hasWebsite: course.enquiryDetails?.websiteFlag === "Y" || false,
          hasEmail: course.enquiryDetails?.emailFlag === "Y" || false,
          hasOpendayFlag: college?.openDayDetails?.opendayFlag === "Y" || false,
          siteCode: sitecode,
          qualCode: qualCode,
        };
      })
      : [] // Ensure an empty array if bestMatchCoursesList is missing
  );
};

const PrPageComponent = async ({ searchparams }: any) => {
  const cookieStore = await cookies();
  const headerList = await headers();
  const domain = getCustomDomain();
  const refererURL = headerList.get("referer");
  const filterCookieParam = JSON.parse(cookieStore?.get("filter_param")?.value || "{}");
  const pathname = cookieStore?.get("pathnamecookies")?.value?.split("/")[1]?.trim() || "{}";

  const payloads = await getSearchPayload(
    searchparams,
    refererURL ? filterCookieParam : "",
    pathname,
    cookieStore?.get("dynamic_random_number")?.value || "",
    headerList?.get("x-forwarded-for") || ""
  );
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, payloads, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "no-cache", 0, {});

  const data = await searchPRResults(payloads); // Fetch earach the PR results
  const providerList = transformProviderListData(data, pathname); // transform Provider List Data results
  const breadcrumbJson: any[] = get_WU_SR_PR_breadcrumb(searchparams, displayNameResponse, pathname);
  const breadcrumbData = [
    {
      url: domain,
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    ...breadcrumbJson

  ];
  let schemaData: any[] = [];
  breadcrumbJson?.map((data, index) => {
    const obj: any = {
      '@type': 'ListItem',
      position: (index + 1),
      item: {
        '@id': data?.url?.trim()?.includes("+") ? data?.url?.split("+")?.[0] : data?.url,
        "name": data?.label?.trim()?.includes(",") ? data?.label?.split(",")?.[0]?.trim() : data?.label,
      }
    }
    schemaData.push(obj);
  });

  return (
    <>
      <section className="bg-white hidden lg:block">
        <div className="max-w-container mx-auto pt-[24px] pb-[8px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} disableLast={true} />
          <SchemaTagLayoutComponent schemaType="BreadcrumbList" schemaData={{ "itemListElement": schemaData }} />
        </div>
      </section>
      <PrPageTopSection searchResultlist={data} />
      <SearchFilterButtons />
      <SearchLabels searchPayLoad={payloads} />
      {!providerList.length ? (
        <SrPageNoResults />
      ) : (
        <>
          <ProviderResultsCard searchResultlist={providerList} sortingFilter={
            <SortingFilterGen
              sortParam={{
                param: searchparams,
                filterCookieParam: refererURL ? filterCookieParam : "",
              }}
              filters={{
                "Sort by": prSortingFilter,
              }}
              projectName='${process.env.PROJECT}'
            />
          }>
            <Paginations
              totalPages={Math.ceil(data?.totalCourseCount / 9)}
              initialPage={searchparams?.pageNo || 1}
              searchParams={{ param: searchparams, currentPage: refererURL }}
            />
          </ProviderResultsCard>
        </>
      )
      }

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

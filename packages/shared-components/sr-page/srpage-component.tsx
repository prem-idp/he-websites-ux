"use server";
import React, { Suspense } from "react";
import GradeBanner from "@packages/shared-components/sr-page/grade-banner/grade-banner";
import SrPageNoResults from "@packages/shared-components/sr-page/no-results/srpage-noresult";
import TopSection from "@packages/shared-components/sr-page/top-section/top-section";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import Faqcomponents from "@packages/shared-components/common-utilities/faq/faqcomponents";
import {Paginations} from "@packages/shared-components/common-utilities/paginations/paginations";
import FeaturedVideoSection from "@packages/shared-components/sr-page/featured-video/featured";
import SearchLabels from "@packages/shared-components/sr-page/search-labels/search-labels";
import SrPageResultPod from "@packages/shared-components/sr-page/result-pod/result-section";
import SortingFilter from "@packages/shared-components/sr-page/sorting-filter/sorting";
import ExploreArticles from "@packages/shared-components/sr-page/explore-article/explore-articel";
import Subscribecomponents from "@packages/shared-components/common-utilities/newsletter-and-subscription/subscribe-newsletter/subscribecomponents";
import ContentfulPreviewProvider from "@packages/lib/contentful-preview/ContentfulLivePreviewProvider";
import { cookies, headers } from "next/headers";
import { getSearchPayload, getSEOSearchPayload } from "../services/utils";
import { searchResultsFetchFunction , httpBFFRequest} from "@packages/lib/server-actions/server-action";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";

const SearchResultComponent = async ({ searchparams, params }: any) => {
  const cookieStore = await cookies();
  const headerList = await headers();
  const pathname =cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const filterCookieParam =JSON.parse(cookieStore?.get("filter_param")?.value || "{}");
  let searchResultsData;
  let displayNameResponse;
  try {
    searchResultsData = await searchResultsFetchFunction(
      getSearchPayload(
        searchparams,
        filterCookieParam,
        pathname,
        cookieStore?.get("dynamic_random_number")?.value || "",
        headerList?.get("x-forwarded-for") || ""
      )
    );
      const searchPayLoad =  getSearchPayload(
        searchparams,
        filterCookieParam,
        pathname,
        cookieStore?.get("dynamic_random_number")?.value || "",
        headerList?.get("x-forwarded-for") || ""
      )
    const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;

   displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, 
    searchPayLoad, 
    "POST", 
    `${process.env.NEXT_PUBLIC_X_API_KEY}`, 
    "no-cache", 
    0, 
    {});
    console.log("displaynames", displayNameResponse)
  } catch (error) {
    console.log("error", error);
  }
  return (
    <>
      <TopSection
        searchParam={getSEOSearchPayload(searchparams, params?.hero)}
        params={params}
      />
      {searchResultsData?.searchResultsList?.length > 0  && searchResultsData?.status != 404 ? (
        <Suspense>
          <SearchFilterButtons />
          <SearchLabels searchLabel={displayNameResponse}/>
        </Suspense>
      ) : (
        <></>
      )}

      <section className="p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">       
          {searchResultsData?.searchResultsList?.length > 0 && searchResultsData?.status != 404 ? (           
            <>
               <SortingFilter sortParam={{ param: searchparams,filterCookieParam:filterCookieParam }} />
             {process.env.PROJECT === "Whatuni" && pathname !== "postgraduate-courses" && (!searchparams?.location || !searchparams?.score) ?
              <GradeBanner /> : <></>
             }
              {searchResultsData?.featuredProviderDetails &&
              searchResultsData?.featuredProviderDetails?.collegeId !== 0 ? (
                <FeaturedVideoSection
                  featuredData={searchResultsData?.featuredProviderDetails}
                />
              ) : (
                <></>
              )}
              <SrPageResultPod
                searchResultsData={searchResultsData?.searchResultsList}                
              />
              {searchResultsData?.collegeCount > 10 ? (
                <><Paginations
                  totalPages={Math.ceil(searchResultsData?.collegeCount / 10)}
                  currentPage={searchparams?.pageNo || 1} /><></></>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <SrPageNoResults />
            </>
          )}
        </div>
      </section>
      {searchResultsData?.searchResultsList?.length > 0 && searchResultsData?.status != 404 ? (
        <>
          <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
            <div className="max-w-container mx-auto">
              <div className="h1 pt-[40px]">Explore more about law</div>
              <div className="flex flex-col gap-[40px] md:gap-[80px] py-[40px]">
                <ExploreArticles />
                <ExploreArticles />
                {/* <Explorearticelskeleton/> */}
              </div>
            </div>
          </section>
          <Faqcomponents />
          <ContentfulPreviewProvider
            locale="en-GB"
            enableInspectorMode={false}
            enableLiveUpdates={false}
            debugMode={false}
          >
            <Subscribecomponents iscontentPreview={false} />
          </ContentfulPreviewProvider>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchResultComponent;

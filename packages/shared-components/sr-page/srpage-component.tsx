"use server";
import React, { Suspense } from "react";
import GradeBanner from "@packages/shared-components/sr-page/grade-banner/grade-banner";
import SrPageNoResults from "@packages/shared-components/sr-page/no-results/srpage-noresult";
import TopSection from "@packages/shared-components/sr-page/top-section/top-section";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import Faqcomponents from "@packages/shared-components/common-utilities/faq/faqcomponents";
import Paginations from "@packages/shared-components/common-utilities/paginations/paginations";
import FeaturedVideoSection from "@packages/shared-components/sr-page/featured-video/featured";
import SearchLabels from "@packages/shared-components/sr-page/search-labels/search-labels";
import SrPageResultPod from "@packages/shared-components/sr-page/result-pod/result-section";
import SortingFilter from "@packages/shared-components/sr-page/sorting-filter/sorting";
import ExploreArticles from "@packages/shared-components/sr-page/explore-article/explore-articel";
import Subscribecomponents from "@packages/shared-components/common-utilities/newsletter-and-subscription/subscribe-newsletter/subscribecomponents";
import searchResultsFetchFunction from "@packages/lib/server-actions/server-action";
import ContentfulPreviewProvider from "@packages/lib/contentful-preview/ContentfulLivePreviewProvider";
import { headers } from "next/headers";
import { getQualCode, getSearchPayload } from "../services/utils";
import { getDecodedCookie } from "@packages/lib/utlils/result-filters";

const SearchResultComponent = async ({ searchparams, pathname }: any) => {
  //const userRegion = headerlist?.get('cloudfront-viewer-country-region');
  // const filterCookie = getCookieValue("filter_param");
  //const filterCookieParam = filterCookie ? JSON.parse(filterCookie) : null;
  //console.log("query" + pathname);
  const headersList = await headers();
  const referer = headersList.get("referer");
  const pathnameArray = referer?.split?.("/");
  let searchResultsData;
  let filterCookieParam;
  if (typeof document !== "undefined") {
    const filterCookieParam = JSON.parse(
      getDecodedCookie("filter_param") || "{}"
    );
  }
  try {
    searchResultsData = await searchResultsFetchFunction(
      getSearchPayload(
        searchparams,
        filterCookieParam,
        pathnameArray?.[3]?.split?.("-")?.[0]
      )
    );
    //console.log(
      "After fetching search results" + JSON.stringify(searchResultsData)
    );
  } catch (error) {
    //console.log("error", error);
  }

  return (
    <>
      <TopSection />
      <Suspense>
        <SearchFilterButtons />
        <SearchLabels />
      </Suspense>
      {searchResultsData?.searchResultsList ? (
        <Suspense>
          <SearchFilterButtons />
          <SearchLabels />
        </Suspense>
      ) : (
        <></>
      )}
      <section className="p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">
          {searchResultsData?.searchResultsList ? (
            <>
              <GradeBanner />
              <SortingFilter sortParam={searchparams?.sort} />
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
                <Paginations
                  totalPages={Math.ceil(searchResultsData?.collegeCount / 10)}
                  currentPage={searchparams?.pageNo || 1}
                />
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
      {searchResultsData?.searchResultsList ? (
        <>
          <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
            <div className="max-w-container mx-auto">
              <div className="h1 pt-[40px]">Explore more about law</div>
              <div className="flex flex-col gap-[40px] md:gap-[80px] py-[40px]">
                <ExploreArticles />
                <ExploreArticles />
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

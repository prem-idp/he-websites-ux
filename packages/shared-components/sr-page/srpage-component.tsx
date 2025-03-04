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
import ContentfulPreviewProvider from "@packages/lib/contentful-preview/ContentfulLivePreviewProvider";
import { cookies, headers } from "next/headers";
import { getSearchPayload } from "../services/utils";
import { searchResultsFetchFunction } from "@packages/lib/server-actions/server-action";
import { getDecodedCookie } from "@packages/lib/utlils/filters/result-filters";
const SearchResultComponent = async ({ searchparams }: any) => {
  const cookieStore = await cookies();
  const pathname =
    cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  let searchResultsData;
  const filterCookieParam = cookieStore?.get("filter_param");

  try {
    searchResultsData = await searchResultsFetchFunction(
      getSearchPayload(searchparams, filterCookieParam, pathname)
    );
  } catch (error) {
    console.log("error", error);
  }
  return (
    <>
      <TopSection
        searchParam={getSearchPayload(
          searchparams,
          filterCookieParam,
          pathname
        )}
        searchResultsData={searchResultsData?.searchResultsList}
      />
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
          <SortingFilter sortParam={{ param: searchparams }} />
          {searchResultsData?.searchResultsList ? (
            <>
              {process.env.PROJECT === "Whatuni" &&
              pathname !== "postgraduate-courses" ? (
                <GradeBanner />
              ) : (
                <></>
              )}
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
                subject={searchparams?.subject || searchparams?.course}
              />
              {searchResultsData?.collegeCount > 10 ? (
                // <Paginations
                //   totalPages={Math.ceil(searchResultsData?.collegeCount / 10)}
                //   currentPage={searchparams?.pageNo || 1}
                // />
                <></>
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

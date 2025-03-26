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
import {
  getSearchPayload,
} from "../services/utils";
import {
  searchResultsFetchFunction,
  graphQlFetchFunction
} from "@packages/lib/server-actions/server-action";
import Findacoursecomponents from "@packages/shared-components/course-details/findacourse/findacoursecomponents";
import { FAQsQuery, SRCityGuideQuery, SRSubjectGuideQuery } from "@packages/lib/graphQL/graphql-query";
import FaqClient from "../common-utilities/faq/faq-clientwrap";
import Faqskeleton from "../skeleton/faqskeleton";
const SearchResultComponent = async ({ searchparams, params }: any) => {
  const cookieStore = await cookies();
  const headerList = await headers();
  const refererURL = headerList.get("referer");
  let cityGuideResponse:any;let subjectGuideResponse:any;
  const pathname =
    cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const filterCookieParam = JSON.parse(
    cookieStore?.get("filter_param")?.value || "{}"
  );
  console.log("REGION," , headerList.get("cloudfront-viewer-city"));
  console.log("CITY," , headerList.get("cloudfront-viewer-country-region"));
  let searchResultsData;
  let searchPayLoad = getSearchPayload(
    searchparams,
    refererURL ? filterCookieParam : "",
    pathname,
    cookieStore?.get("dynamic_random_number")?.value || "",
    headerList?.get("x-forwarded-for") || ""
  );
  const paramsAwaited = await params;
  try {
    searchResultsData = await searchResultsFetchFunction(searchPayLoad);
  } catch (error) {
    console.log("error", error);
  }
  if(searchparams?.subject && !searchparams?.subject?.includes(" ")) {subjectGuideResponse = await graphQlFetchFunction(SRSubjectGuideQuery(searchparams?.subject));}
  if(searchparams?.location && !searchparams?.location?.includes(" ")) {cityGuideResponse = await graphQlFetchFunction(SRCityGuideQuery(searchparams?.location
    .split(' ')
    .map((word: string)=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')));}
  //FAQ
   const faqResponse = await graphQlFetchFunction(FAQsQuery("Search Result"));
  
  return (
    <>
      {searchResultsData?.searchResultsList?.length > 0 &&
      searchResultsData?.status != 404 ? (
        <>
          <TopSection
            searchParams={await searchparams}
            params={paramsAwaited}
          />
          <Suspense>
            <SearchFilterButtons frompage="browsemoneypage" />
            <SearchLabels searchPayLoad={searchPayLoad} />
          </Suspense>
        </>
      ) : (
        <></>
      )}

      <section className="px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          {searchResultsData?.searchResultsList?.length > 0 &&
          searchResultsData?.status != 404 ? (
            <>
              {
              pathname !== "postgraduate-courses" &&
              (!searchparams?.location || (!searchparams?.score && process.env.PROJECT === "Whatuni")) ? (
                <GradeBanner />
              ) : (
                <></>
              )}
              <SortingFilter
                sortParam={{
                  param: searchparams,
                  filterCookieParam: refererURL ? filterCookieParam : "",
                }}
              />

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
                qualName={pathname}
              />
              {searchResultsData?.collegeCount > 10 ? (
                <>
                  <Paginations
                    totalPages={Math.ceil(searchResultsData?.collegeCount / 10)}
                    currentPage={searchparams?.pageNo || 1}
                  />
                  <></>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <SrPageNoResults/>
            </>
          )}
        </div>
      </section>
      {searchResultsData?.searchResultsList?.length === 0 && (
        <Findacoursecomponents h1value="Your uni search made easier" subheading={true}/>
      )}
      {searchResultsData?.searchResultsList?.length > 0 &&
      searchResultsData?.status != 404 && (
        <>
        {(subjectGuideResponse?.data?.appPageComponentCollection?.items?.length > 0 || cityGuideResponse?.data?.articleCollection?.items?.length > 0) &&
          <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
            <div className="max-w-container mx-auto">
              <div className="h1 pt-[40px]">Explore more about {searchparams?.subject}</div>
              <div className="flex flex-col gap-[40px] md:gap-[80px] py-[40px]">
              {subjectGuideResponse?.data?.appPageComponentCollection?.items?.length > 0 &&
                <ExploreArticles exploreSectionProps = {{subjectComponentData:subjectGuideResponse?.data?.appPageComponentCollection?.items?.[0]}}/>}
                {cityGuideResponse?.data?.articleCollection?.items?.length > 0 && <ExploreArticles exploreSectionProps = {{cityComponentData:cityGuideResponse?.data?.articleCollection?.items?.[0]}}/>}
                {/* <Explorearticelskeleton/> */}
              </div>
            </div>
          </section>}

          <Suspense fallback={<Faqskeleton />}>
        <div className="faq-container bg-white">
          <div className="max-w-container mx-auto">
            <div className="faq-card-container flex flex-col gap-[32px] px-[16px] py-[40px] md:py-[64px] md:px-[20px] xl:px-[0]">
              <div className="faq-header flex flex-col gap-[4px]">
                <div className="h2 font-bold" id="fqa_heading">
                  FAQs
                </div>
                <p className="font-normal small" id="fqa_subheading">
                {faqResponse?.data?.pageTemplateDynamicPageCollection?.items?.[0]?.pageTitle}
                </p>
              </div>
              <FaqClient jsondata={faqResponse?.data?.pageTemplateDynamicPageCollection?.items?.[0]?.bottomZoneComponentsCollection?.items?.[0]}/>
            </div>
          </div>
        </div>
      </Suspense>

          
          
        </>
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

export default SearchResultComponent;

"use server";
import React from "react";
import GradeBanner from "@packages/shared-components/sr-page/grade-banner/grade-banner";
import Subscribecomponents from "@packages/shared-components/common-utilities/subscribe-newsletter/subscribecomponents";
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
const SearchResult = () => {
  return (
    <>
      <TopSection />
      <SearchFilterButtons />
      <SearchLabels />
      <section className="bg-white p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">
          <GradeBanner />
          <SrPageNoResults />
          <SortingFilter />
          <FeaturedVideoSection />
          <SrPageResultPod />
          <Paginations />
        </div>
      </section>
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="h1 py-[40px]">Explore more about law</div>
          <div className="flex flex-col gap-[40px] md:gap-[80px] lg:pb-[16px]">
            <ExploreArticles />
            <ExploreArticles />
          </div>
        </div>
      </section>
      <Faqcomponents />
      <Subscribecomponents />
    </>
  );
};

export default SearchResult;

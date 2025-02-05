"use server";
import React from "react";
import GradeBanner from "@packages/shared-components/common-utilities/sr-page/grade-banner/grade-banner";
import Subscribecomponents from "@packages/shared-components/common-utilities/subscribe-newsletter/subscribecomponents";
import SrPageNoResults from "@packages/shared-components/common-utilities/sr-page/no-results/srpage-noresult";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import Faqcomponents from "@packages/shared-components/common-utilities/faq/faqcomponents";
import Paginations from "@packages/shared-components/common-utilities/paginations/paginations";
import FeaturedVideoSection from "@packages/shared-components/common-utilities/sr-page/featured-video/featured";
import SearchLabels from "@packages/shared-components/common-utilities/sr-page/search-labels/serach-labels";
import SrPageResultPod from "@packages/shared-components/common-utilities/sr-page/result-pod/result-section";
import SortingFilter from "@packages/shared-components/common-utilities/sr-page/sorting-filter/sorting";
import ExploreArticles from "@packages/shared-components/common-utilities/sr-page/explore-article/explore-articel";
const SearchResult = () => {
  const breadcrumbData = [
    {
      url: "#",
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
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
      <section className="px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
            <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">
              Top Law, Engineering & Architecture subjects for you
            </div>
            <p>000 universities offer 1563 courses</p>
          </div>
        </div>
      </section>
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

import React from "react";
import Explorearticelskeleton from "@packages/shared-components/skeleton/search-result/explore-articel-skeleton";
import FeaturedSkeleton from "@packages/shared-components/skeleton/search-result/featured-skeleton";
import GradeBannerSkeleton from "@packages/shared-components/skeleton/search-result/grade-banner-skeleton";
import ResultSectionSkeleton from "@packages/shared-components/skeleton/search-result/result-section-skeleton";
import TopSectionSkeleton from "@packages/shared-components/skeleton/search-result/top-section-skeleton";
import SearchLabelsSkeleton from "@packages/shared-components/skeleton/search-result/search-labels-skeleton";
import SearchFilterButtonsSkeleton from "@packages/shared-components/skeleton/search-result/search-filter-buttons-skeleton";
const Loading = () => {
  return (
    <>
      <Explorearticelskeleton />
      <FeaturedSkeleton />
      <GradeBannerSkeleton />
      <ResultSectionSkeleton />
      <TopSectionSkeleton />
      <SearchFilterButtonsSkeleton />
      <SearchLabelsSkeleton />
    </>
  );
};

export default Loading;

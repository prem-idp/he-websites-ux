import React from "react";
import HeroSliderComponentSkeleton from "@packages/shared-components/common-utilities/skeleton/heroslidercomponentskeleton";
import Wuscacomponentskeleton from "@packages/shared-components/common-utilities/skeleton/wuscacomponentskeleton";
const HomePageLoadingState = () => {
  return (
    <>
      <HeroSliderComponentSkeleton />
      <Wuscacomponentskeleton />
    </>
  );
};

export default HomePageLoadingState;

import React from "react";
import HeroSliderComponentSkeleton from "../whatuni/loading";
import Wuscacomponentskeleton from "@packages/shared-components/common-utilities/skeleton/wuscacomponentskeleton";
import Discovercardskeleton from "@packages/shared-components/common-utilities/skeleton/discovercardskeleton";
import Testimonialcardskeleton from "@packages/shared-components/common-utilities/skeleton/testimonialcardskeleton";
import Tagcloudcardskeleton from "@packages/shared-components/common-utilities/skeleton/tagcloudcardskeleton";
import Reviewscardskeleton from "@packages/shared-components/common-utilities/skeleton/reviewscardskeleton";
import OurPartnerComponent from "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent";
const loading = () => {
  return (
    <>
      <HeroSliderComponentSkeleton />
      <Wuscacomponentskeleton />
      <Discovercardskeleton />
      <Testimonialcardskeleton />
      <Tagcloudcardskeleton />
      <Reviewscardskeleton />
      <OurPartnerComponent />
    </>
  );
};

export default loading;

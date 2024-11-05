"use server";
import React from "react";
import HeroSliderComponent from "@packages/shared-components/home/hero/heroslidercomponent";
import AdviceComponent from "@packages/shared-components/home/advice/advicecomponents";
import Discovercomponents from "@packages/shared-components/home/discover/discovercomponents";
import ReviewComponent from "@packages/shared-components/home/reviews/reviewscomponents";
import TestimonialComponent from "@packages/shared-components/home/testimonials/testimonialcomponents";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import OurPartnerComponent from "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent";
const page = () => {
  return (
    <>
      <HeroSliderComponent project="pgs" />
      <Wuscascomponents />
      <Discovercomponents />
      <AdviceComponent />
      <TestimonialComponent />
      <ReviewComponent />
      <OurPartnerComponent />
    </>
  );
};

export default page;

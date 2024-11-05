"use server";
import React from "react";
import Herocomponents from "@packages/shared-components/home/hero/herocomponents";
import AdviceComponent from "@packages/shared-components/home/advice/advicecomponents";
import DiscoverComponent from "@packages/shared-components/home/discover/discovercomponents";
import ReviewComponent from "@packages/shared-components/home/reviews/reviewscomponents";
import TestimonialComponent from "@packages/shared-components/home/testimonials/testimonialcomponents";
import TagCloudComponent from "@packages/shared-components/home/tag-cloud/tagcloudcomponents";
import WucasComponent from "@packages/shared-components/home/wuscas/wuscascomponents";
const page = () => {
  return (
    <>
      <Herocomponents project="pgs" />
      <WucasComponent />
      <DiscoverComponent />
      <AdviceComponent />
      <TestimonialComponent />
      <ReviewComponent />
    </>
  );
};

export default page;

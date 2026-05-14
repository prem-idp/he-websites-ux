"use server";
import React from "react";
import HeroSliderComponent from "@packages/shared-components/home/hero/heroslidercomponent";
import AdviceComponent from "@packages/shared-components/home/advice/advicecomponents";
import Discovercomponents from "@packages/shared-components/home/discover/discovercomponents";
import ReviewComponent from "@packages/shared-components/home/reviews/reviewscomponents";
import TestimonialComponent from "@packages/shared-components/home/testimonials/testimonialcomponents";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import OurPartnerComponent from "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent";
import Articlegridcomponents from "@packages/shared-components/home/article-grid/articlegridcomponents";
import Articlegridskeleton from "@packages/shared-components/common-utilities/skeleton/articlegridskeleton";
import ClearingPopup from "@packages/shared-components/common-utilities/popups/clearing";
import { DiscoverCardData } from "@packages/shared-components/common-utilities/slider/discovercard";

const discoverCards: DiscoverCardData[] = [
  {
    label: "courses",
    title: "Looking for courses?",
    href: "",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-white/[.6]",
    image: "/static/assets/images/discover/discover-feature-image1x3x.png",
  },
  {
    label: "universities",
    title: "Pick your perfect uni",
    href: "",
    bgColor: "bg-secondary-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-white/[.6]",
    image: "/static/assets/images/discover/discover-feature-image2x3x.png",
  },
  {
    label: "career",
    title: "Take our careers quiz",
    href: "",
    bgColor: "bg-tertiary-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-white/[.6]",
    image: "/static/assets/images/discover/discover-feature-image3x3x.png",
  },
  {
    label: "Subject guides",
    title: "Find out what to study",
    href: "",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-white/[.6]",
    image: "/static/assets/images/discover/discover-feature-image1x3x.png",
  },
  {
    label: "open days",
    title: "Find an open day",
    href: "",
    bgColor: "bg-secondary-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-positive-light",
    image: "/static/assets/images/discover/discover-feature-image2x3x.png",
  },
  {
    label: "app",
    title: "Download the app",
    href: "",
    bgColor: "bg-tertiary-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-white/[.6]",
    image: "/static/assets/images/discover/discover-feature-image3x3x.png",
  },
];

const page = () => {
  return (
    <>
      <HeroSliderComponent />
      <Wuscascomponents />
      <Discovercomponents cards={discoverCards} />
      <AdviceComponent />
      <Articlegridcomponents />
      <Articlegridskeleton />
      <TestimonialComponent />
      <ReviewComponent />
      <OurPartnerComponent />
      {/* <ClearingPopup /> */}
    </>
  );
};

export default page;

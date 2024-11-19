"use server";
import React from "react";
import HeroSliderComponent from "@packages/shared-components/home/hero/heroslidercomponent";

import AdviceComponent from "@packages/shared-components/home/advice/advicecomponents";
import Discovercomponents from "@packages/shared-components/home/discover/discovercomponents";
import ReviewComponent from "@packages/shared-components/home/reviews/reviewscomponents";
import TestimonialComponent from "@packages/shared-components/home/testimonials/testimonialcomponents";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import OurPartnerComponent from "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent";
import dynamicComponentImports from "@packages/lib/dynamic-imports/imports";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageQuery } from "@packages/lib/graphQL/graphql-query";
import { MultipleCardContainer } from "@packages/lib/types/interfaces";
const page = async () => {
  const jsonData = await graphQlFetchFunction(homePageQuery(process.env.PROJECT));
  const componentList =
    jsonData?.data?.contentData?.items[0]?.bodyContentCollection?.items;
  return (
    <>
      <HeroSliderComponent project="pgs" />
      {componentList.map(
          (childItems: MultipleCardContainer, index: number) => {
            const Component: any = dynamicComponentImports(
              childItems.flagComponentStyle
            );
            return (
              <Component
                key={index}
                heading={childItems?.cardSectionTitle}
                subheading={childItems?.shortDescription}
                internalName={childItems?.internalName}
              />
            );
          }
        )}
    </>
  );
};

export default page;

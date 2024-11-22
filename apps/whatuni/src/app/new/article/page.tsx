"use server";
import Heroslidercomponent from "@packages/shared-components/home/hero/heroslidercomponent";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageQuery } from "@packages/lib/graphQL/graphql-query";
import { SliderBannerCollection } from "@packages/lib/types/interfaces";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import Discovercomponents from "@packages/shared-components/home/discover/discovercomponents";
import Reviewscomponents from "@packages/shared-components/home/reviews/reviewscomponents";
import Tagcloudcomponents from "@packages/shared-components/home/tag-cloud/tagcloudcomponents";
import OurPartnerComponent from "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent";
import Testimonialcomponents from "@packages/shared-components/home/testimonials/testimonialcomponents";
import LocationAccess from "@packages/lib/location-access/request-location";
const Page = async () => {
  const jsonData = await graphQlFetchFunction(homePageQuery);

  const heroSliderData: SliderBannerCollection =
    jsonData?.data?.contentData?.items[0]?.sliderBannerCollection;
  const callToAction = {
    internalName: "Homepage - Reviews CTA - Whatuni",
    primaryCtaLabel: "View more",
    primaryCtaUrl: "/university-course-reviews/",
    primaryCtaTarget: null,
    flagStyle: null,
  };
  return (
    <>
      <Heroslidercomponent data={heroSliderData} />
      <Wuscascomponents
        heading={"UK university rankings 2024 -- decided by students like you!"}
        subheading={
          "The Whatuni Student Choice Awards (WUSCAs) are the largest annual uni awards in the UK voted exclusively by students, ranking unis on the features that they really care about."
        }
      />
      <Discovercomponents />
      <Testimonialcomponents />
      <Tagcloudcomponents heading="Popular university courses" />
      <Reviewscomponents
        heading="Honest reviews from real students"
        subheading="Discover genuine insights from students to help you make the best choice."
      />
      <OurPartnerComponent
        heading="Trusted by over 100 UK universities"
        callToAction={callToAction}
      />
    </>
  );
};

export default Page;

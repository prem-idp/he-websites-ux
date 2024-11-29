"use server";
import dynamicComponentImports from "@packages/lib/dynamic-imports/imports";
import Heroslidercomponent from "@packages/shared-components/home/hero/heroslidercomponent";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageQuery } from "@packages/lib/graphQL/graphql-query";
import {
  MultipleCardContainer,
  SliderBannerCollection,
} from "@packages/lib/types/interfaces";
import TrackSessionId from "@packages/lib/track-session-id/tracksessionid";
const Page = async () => {
  const jsonData = await graphQlFetchFunction(homePageQuery);
  const componentList =
    jsonData?.data?.contentData?.items[0]?.bodyContentCollection?.items;
  const heroSliderData: SliderBannerCollection =
    jsonData?.data?.contentData?.items[0]?.sliderBannerCollection;

  return (
    <>
      <TrackSessionId />
      <Heroslidercomponent data={heroSliderData} />
      <div>
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
                callAction={childItems?.callToAction}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default Page;

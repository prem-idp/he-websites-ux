"use server";
import dynamic from "next/dynamic";
// import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
// import { homePageQuery } from "@packages/lib/graphQL/graphql-query";
import DynamicSkeleton from "@packages/lib/dynamic-imports/skeletons";
const Page = async () => {
  // const jsonData = await graphQlFetchFunction(homePageQuery);
  // console.log(jsonData);
  const data = {
    __typename: "DynamicMediaComponent",
    longDescription: null,
    internalName: "Discover - Courses - Whatuni",
    title: "Courses",
    subTitle: "Looking for courses?",
    shortDescription: null,
    cta: {
      internalName: "Homepage - Courses Discover - Whatuni",
      primaryCtaUrl: "/degrees/courses/",
      secondaryCtaUrl: null,
      primaryCtaLabel: null,
      secondaryCtaLabel: null,
      primaryCtaTarget: null,
      secondaryCtaTarget: null,
      flagStyle: null,
    },
    image: {
      imageTitle: null,
      imgIntName: "Homepage - Courses Discover - Whatuni",
      imgAltText: "courses",
      imgUpload: {
        url: "https://images.ctfassets.net/szez98lehkfm/4NX4x0aesX7abBMiTsUCDY/0b953f5873dfc1d36af1c6334827b240/discover-feature-image1x3x.webp",
        width: 256,
        height: 275,
      },
    },
  };
  const componentList = [
    {
      component: "HeroSliderComponent",
      ssrValue: true,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "home/hero/heroslidercomponent",
    },
    {
      component: "Wuscascomponents",
      ssrValue: false,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "home/wuscas/wuscascomponents",
    },

    {
      component: "Discovercomponents",
      ssrValue: true,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "home/discover/discovercomponents",
    },
    {
      component: "AdviceComponent",
      ssrValue: false,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "home/advice/advicecomponents",
    },
    {
      component: "TestimonialComponent",
      ssrValue: true,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "home/testimonials/testimonialcomponents",
    },
    {
      component: "ReviewComponent",
      ssrValue: false,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "home/reviews/reviewscomponents",
    },

    {
      component: "OurPartnerComponent",
      ssrValue: false,
      loadingComponent: "Please wait while loading",
      data: "",
      path: "common-utilities/our-partners/ourpartnercomponent",
    },
  ];

  const loadComponent = (
    path: string,
    ssrValue: boolean,
    loadingComponent: string
  ) =>
    dynamic(() => import(`@packages/shared-components/${path}`), {
      ssr: ssrValue,
      loading: () => <DynamicSkeleton skeletonName={loadingComponent} />,
    });

  return (
    <>
      <div>
        {componentList.map(({ path, ssrValue, loadingComponent }, index) => {
          const Component = loadComponent(path, ssrValue, loadingComponent);
          return <Component key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default Page;

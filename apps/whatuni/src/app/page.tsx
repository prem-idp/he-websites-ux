"use server";
import dynamic from "next/dynamic";
const Page = async () => {
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
      loading: () => <p>{loadingComponent}</p>,
    });

  return (
    <>
      <div>
        {componentList.map(({ path, ssrValue, loadingComponent }, index) => {
          const Component = loadComponent(path, ssrValue, loadingComponent);
          return <Component key={index} />;
        })}
      </div>
    </>
  );
};

export default Page;

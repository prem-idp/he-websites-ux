import dynamic from "next/dynamic";

const componentMap: any = {
  PageComponentRichText: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/richtextcomponent/richtextcomponent"
        )
    ),

  Breadcrumblayoutcomponent: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent"
        )
    ),
  Articledescription: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/article-description/article-description"
        )
    ),
  Authorprofile: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/author-profile/author-profile"
        )
    ),
  Skiplinkdetails: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/skiplinkdetails/skiplinkdetailscomponent"
        )
    ),
  Advicecourseslidercomponents: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/common-utilities/slider/advicecourseslidercomponents"
        )
    ),
  Pullquote: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/pull-quote/pull-quote"
        )
    ),
  Ctabanner: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/cta-banner/cta-banner"
        )
    ),
  Articleimage: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/article-image/article-image"
        )
    ),
  Articletables: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/article-tables/article-tables"
        )
    ),
  Dontmissout: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/dont-missout/dontmissout"
        )
    ),
  Findoutmore: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/findoutmore/findout-more"
        )
    ),
  Reviewscomponents: () =>
    dynamic(
      () => import("@packages/shared-components/home/reviews/reviewscomponents")
    ),
};

const dynamicComponent = (input: string | null | undefined) => {
  if (!input) return null;
  const loadComponent = componentMap[input];
  return loadComponent();
};

export default dynamicComponent;

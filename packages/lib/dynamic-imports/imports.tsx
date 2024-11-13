import dynamic from "next/dynamic";
import DynamicSkeleton from "./skeletons";
const dynamicComponentImports = (input: string) => {
  if (input === "PageLogo") {
    return dynamic(
      () =>
        import(
          "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent"
        ),
      { loading: () => <DynamicSkeleton skeletonName={input} /> }
    );
  } else if (input === "PageStatPodContainer") {
    return dynamic(
      () => import("@packages/shared-components/home/wuscas/wuscascomponents"),
      { loading: () => <DynamicSkeleton skeletonName={input} /> }
    );
  } else if (input === "DynamicMediaComponent") {
    return dynamic(
      () =>
        import("@packages/shared-components/home/discover/discovercomponents"),
      { loading: () => <DynamicSkeleton skeletonName={input} /> }
    );
  } else if (input === "PageTagCloud") {
    return dynamic(
      () =>
        import("@packages/shared-components/home/tag-cloud/tagcloudcomponents"),
      { loading: () => <DynamicSkeleton skeletonName={input} /> }
    );
  } else if (input === "PageMultimediaTestimonials") {
    return dynamic(
      () =>
        import(
          "@packages/shared-components/home/testimonials/testimonialcomponents"
        ),
      { loading: () => <DynamicSkeleton skeletonName={input} /> }
    );
  } else if (input === "Reviews") {
    return dynamic(
      () =>
        import("@packages/shared-components/home/reviews/reviewscomponents"),
      { loading: () => <DynamicSkeleton skeletonName={input} /> }
    );
  }
};

export default dynamicComponentImports;

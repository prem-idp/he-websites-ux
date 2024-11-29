import React from "react";
interface SkeletonNameInterface {
  skeletonName: string;
}
import PartnerSliderComponentSkeleton from "@packages/shared-components/common-utilities/skeleton/partnerslidercomponentskeleton";
import AdviceCourseCardSkeleton from "@packages/shared-components/common-utilities/skeleton/advicecoursecardskeleton";
import Discovercardskeleton from "@packages/shared-components/common-utilities/skeleton/discovercardskeleton";
import Reviewscardskeleton from "@packages/shared-components/common-utilities/skeleton/reviewscardskeleton";
import Tagcloudcardskeleton from "@packages/shared-components/common-utilities/skeleton/tagcloudcardskeleton";
import Testimonialcardskeleton from "@packages/shared-components/common-utilities/skeleton/testimonialcardskeleton";
import Wuscacomponentskeleton from "@packages/shared-components/common-utilities/skeleton/wuscacomponentskeleton";

const DynamicSkeleton: React.FC<SkeletonNameInterface> = ({ skeletonName }) => {
  // console.log(skeletonName);
  const Skeleton = () => {
    switch (skeletonName) {
      case "AdviceCourseCardSkeleton":
        return <AdviceCourseCardSkeleton />;
      case "DynamicMediaComponent":
        return <Discovercardskeleton />;
      case "PageStatPodContainer":
        return <Wuscacomponentskeleton />;
      case "PageTagCloud":
        return <Tagcloudcardskeleton />;
      case "Reviews":
        return <Reviewscardskeleton />;
      case "PageMultimediaTestimonials":
        return <Testimonialcardskeleton />;
      case "PageLogo":
        return <PartnerSliderComponentSkeleton />;
      default:
        return <p>Loading</p>;
    }
  };
  return <Skeleton />;
};

export default DynamicSkeleton;

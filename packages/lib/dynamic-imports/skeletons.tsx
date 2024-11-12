import React from "react";
interface SkeletonNameInterface {
  skeletonName: string;
}
import AdviceCourseCardSkeleton from "@packages/shared-components/common-utilities/skeleton/advicecoursecardskeleton";
// import Findauniresultsskeleton from "@packages/shared-components/common-utilities/skeleton/findauniresultsskeleton";
import Findsubjectareascardskeleton from "@packages/shared-components/common-utilities/skeleton/findsubjectareascardskeleton";
const DynamicSkeleton: React.FC<SkeletonNameInterface> = ({ skeletonName }) => {
  const Skeleton = () => {
    if (skeletonName === "AdviceCourseCardSkeleton") {
      return <AdviceCourseCardSkeleton />;
    } else {
      return <Findsubjectareascardskeleton />;
    }
  };
  return <Skeleton />;
};

export default DynamicSkeleton;

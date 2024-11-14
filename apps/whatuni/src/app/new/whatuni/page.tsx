import React from "react";
import AdviceCourseCardSkeleton from "@packages/shared-components/common-utilities/skeleton/advicecoursecardskeleton";
import Discovercardskeleton from "@packages/shared-components/common-utilities/skeleton/discovercardskeleton";
import Findauniresultsskeleton from "@packages/shared-components/common-utilities/skeleton/findauniresultsskeleton";
import Findsubjectareascardskeletonfrom from "@packages/shared-components/common-utilities/skeleton/findsubjectareascardskeleton";
import Reviewscardskeleton from "@packages/shared-components/common-utilities/skeleton/reviewscardskeleton";
import Tagcloudcardskeleton from "@packages/shared-components/common-utilities/skeleton/tagcloudcardskeleton";
import Testimonialcardskeleton from "@packages/shared-components/common-utilities/skeleton/testimonialcardskeleton";
import Wuscacomponentskeleton from "@packages/shared-components/common-utilities/skeleton/wuscacomponentskeleton";
const page = () => {
  return (
    <>
      <Wuscacomponentskeleton />
      <Discovercardskeleton />
      <Tagcloudcardskeleton />
      <Testimonialcardskeleton />
      <Reviewscardskeleton />
      <AdviceCourseCardSkeleton />
      <Findauniresultsskeleton />
      <Findsubjectareascardskeletonfrom />
    </>
  );
};

export default page;

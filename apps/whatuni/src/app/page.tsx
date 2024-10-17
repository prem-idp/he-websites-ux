"use server";
import Herocomponents from "@packages/shared-components/home/hero/herocomponents";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import React from "react";
import Discovercomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Testimonialcomponents from "@packages/shared-components/home/testimonials/testimonialcomponents";
import Reviewscomponents from "@packages/shared-components/home/reviews/reviewscomponents";
import { Logoslider } from "@packages/shared-components/common-utilities/our-partners/ourpartnercomponent";
import { logoImgArray } from "@packages/shared-components/services/contents";

const page = () => {
  return (
    <>
      <Herocomponents />
      <Wuscascomponents />
      <Discovercomponents />
      <Advicecomponents />
      <Testimonialcomponents />
      <Reviewscomponents />
      {/* our partner section */}
      <section className="w-full max-w-container mx-auto pt-[32px] lg:pt-[64px] lg:pb-[39px]">
        <h2 className="text-center font-bold md:mb-[25px] px-[16px] xl:px-0">
          Partnered with over 100 universities
        </h2>
        <Logoslider imgSrc={logoImgArray} />
      </section>
    </>
  );
};

export default page;

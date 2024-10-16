"use server";
import Herocomponents from "@packages/shared-components/home/hero/herocomponents";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import Testimonialcomponents from "@packages/shared-components/home/testimonials/testimonialcomponents";
import React from "react";
const page = () => {
  return (
    <>
      <Herocomponents />
      <Wuscascomponents />
      <Testimonialcomponents />
      {/* our partner section */}
      <section className="w-full max-w-container mx-auto pt-[32px] lg:pt-[64px] lg:pb-[39px]">
        <h2 className="text-center font-bold md:mb-[25px] px-[16px] xl:px-0">
          Partnered with over 100 universities
        </h2>
        {/* <Logoslider imgSrc={logoImgArray} /> */}
      </section>
    </>
  );
};

export default page;

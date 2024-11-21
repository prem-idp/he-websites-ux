"use server";
import React, { Suspense } from "react";
import SearchWrapper from "./search-pod/searchwrapper";
import HeroSlider from "./slider-pod/heroSlider";
import { SliderBannerCollection } from "@packages/lib/types/interfaces";
import HeroSliderComponentSkeleton from "@packages/shared-components/common-utilities/skeleton/heroslidercomponentskeleton";
interface PropjectProps {
  data: SliderBannerCollection;
}
const HeroSliderComponent: React.FC<PropjectProps> = ({ data }) => {
  return (
    <Suspense fallback={<HeroSliderComponentSkeleton />}>
      <div
        data-testid="hero-banner-colour"
        className={`${process.env.PROJECT === "Whatuni" ? "bg-blue-200" : "bg-yellow-200"} px-[16px] md:px-[20px] xl2:px-0.5`}
      >
        <div className="max-w-container mx-auto">
          <HeroSlider data={data} />
        </div>
      </div>
      <SearchWrapper />
    </Suspense>
  );
};

export default HeroSliderComponent;

"use server";
import React from "react";
import SearchBox from "./search-pod/searchbox";
import HeroSlider from "./slider-pod/heroSlider";
import { SliderBannerCollection } from "@packages/lib/types/interfaces";
interface PropjectProps {
  project: string;
  data: SliderBannerCollection;
}
const HeroSliderComponent: React.FC<PropjectProps> = ({ project, data }) => {
  return (
    <>
      <div
        className={`${project === "whatuni" ? "bg-blue-200" : "bg-yellow-200"} px-[16px] md:px-[20px] xl2:px-0.5`}
      >
        <div className="max-w-container mx-auto">
          <HeroSlider data={data} />
        </div>
      </div>
      <SearchBox />
    </>
  );
};

export default HeroSliderComponent;

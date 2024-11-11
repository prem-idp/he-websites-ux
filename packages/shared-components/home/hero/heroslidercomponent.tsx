"use server";
import React from "react";
import SearchBox from "./search-pod/searchbox";
import HeroSlider from "./slider-pod/heroSlider";
interface PropjectProps {
  project: string;
}
const HeroSliderComponent: React.FC<PropjectProps> = ({ project }) => {
  return (
    <>
      <div
        className={`${project === "pgs" ? "bg-yellow-400" : "bg-blue-200"} px-[16px] md:px-[20px] xl2:px-01`}
      >
        <div className="max-w-container mx-auto">
          <HeroSlider />
        </div>
      </div>
      <SearchBox />
    </>
  );
};

export default HeroSliderComponent;

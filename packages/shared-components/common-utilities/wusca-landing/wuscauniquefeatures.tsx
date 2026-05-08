import React from "react";
import FeatureCard from "./FeatureCard";

interface FeatureItem {
  title: string;
  description: string;
}

interface WuscaUniqueFeaturesProps {
  heading: string;
  subheading: string;
  features: FeatureItem[];
}

const Wuscauniquefeatures = ({
  heading,
  subheading,
  features,
}: WuscaUniqueFeaturesProps) => {
  return (
    <section className="bg-white pb-[40px] md:pb-[64px] px-[16px] md:px-[20px] xl:px-[0]">
      <div className="max-w-container mx-auto flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-farro font-bold text-heading2 text-grey300">
            {heading}
          </h2>
          <p className="font-inter font-semibold text-para text-grey300">
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px] md:gap-[16px] lg:gap-[20px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wuscauniquefeatures;

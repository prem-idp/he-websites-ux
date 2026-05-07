import React from "react";
import Image from "next/image";

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
    <section className="bg-white pb-[40px] md:pb-[64px] px-[16px] md:px-[20px] xl:px-[112px]">
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

        {/* Feature Cards - Desktop (3 cols) */}
        <div className="hidden lg:grid grid-cols-3 gap-[20px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Feature Cards - Tablet (2 cols) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-[20px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Feature Cards - Mobile (1 col, border-bottom style) */}
        <div className="flex flex-col md:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-[8px] py-[16px] border-b border-grey-200 last:border-b-0"
            >
              <Image
                src="/static/assets/icons/green_tick_icon.svg"
                alt="check"
                width={20}
                height={20}
                className="shrink-0 mt-[2px]"
              />
              <div className="flex flex-col gap-[4px]">
                <p className="font-inter font-semibold text-para text-grey300">
                  {feature.title}
                </p>
                <p className="font-inter font-normal text-para text-grey500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card for Desktop/Tablet
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row items-start gap-[8px] p-[16px] bg-grey-50 border border-grey-200 rounded-[8px]">
      <Image
        src="/static/assets/icons/green_tick_icon.svg"
        alt="check"
        width={20}
        height={20}
        className="shrink-0 mt-[2px]"
      />
      <div className="flex flex-col gap-[4px]">
        <p className="font-inter font-semibold text-para text-grey300">
          {title}
        </p>
        <p className="font-inter font-normal text-para text-grey500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Wuscauniquefeatures;

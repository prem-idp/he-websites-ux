import React from "react";
import Image from "next/image";

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

export default FeatureCard;

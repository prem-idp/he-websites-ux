"use server";
import Discoverslidercomponents from "@packages/shared-components/common-utilities/slider/discoverslidercomponents";
import { DiscoverCardData } from "@packages/shared-components/common-utilities/slider/discovercard";
import React from "react";
import Tagcloudcomponents from "../tag-cloud/tagcloudcomponents";

interface DiscoverProps {
  title?: string;
  subtitle?: string;
  showViewMore?: boolean;
  wuscaLanding?: boolean;
  cards: DiscoverCardData[];
}

const Discovercomponents = ({
  title = "Discover",
  subtitle = "Subheading",
  showViewMore = true,
  wuscaLanding = false,
  cards,
}: DiscoverProps) => {
  return (
    <div className="discover-container bg-white">
      <div className="max-w-container mx-auto">
        <div
          className={`discover-card-container px-[0] ${wuscaLanding ? "pb-[32px]" : "py-[34px] md:py-[64px]"}`}
        >
          <div className="discover-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]">
            <h2 className={`font-bold`}>{title}</h2>
            <p className={`small mt-[8px]`}>{subtitle}</p>
          </div>
          <div className="discover-inner-wrap">
            <Discoverslidercomponents cards={cards} />
            {showViewMore && (
              <div className="flex justify-center mt-[16px] lg:mt-[28px]">
                <a
                  href="#"
                  className="flex items-center w-fit font-semibold para text-primary-400 hover:underline gap-[8px]"
                >
                  View more
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
                      stroke="#3460DC"
                      strokeWidth="1.48148"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
          <Tagcloudcomponents />
        </div>
      </div>
    </div>
  );
};
export default Discovercomponents;

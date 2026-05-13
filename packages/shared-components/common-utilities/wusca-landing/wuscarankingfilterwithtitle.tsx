"use client";
import React from "react";
import Wuscacategoryfiltertabs from "./wuscacategoryfiltertabs";

interface CategoryTab {
  label: string;
  active?: boolean;
  isDropdown?: boolean;
  dropdownOptions?: string[];
}

interface WuscaRankingFilterWithTitleProps {
  categories: CategoryTab[];
  title: string;
  description: string;
  quickLinks?: { label: string; href: string }[];
}

const Wuscarankingfilterwithtitle = ({
  categories,
  title,
  description,
  quickLinks,
}: WuscaRankingFilterWithTitleProps) => {
  return (
    <>
      {/* Sticky Category Filter Tabs */}
      <div className="sticky top-0 z-20 bg-white px-[16px] md:px-[20px] xl:px-[0] py-[24px]">
        <div className="max-w-container mx-auto">
          <Wuscacategoryfiltertabs categories={categories} />
        </div>
      </div>

      {/* Title Section */}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-[0] pb-[24px]">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col justify-center gap-[8px]">
            <h2 className="font-farro font-bold text-heading3 md:text-heading2 text-grey-900">
              {title}
            </h2>
            <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[130px] items-start w-full">
              <p className="font-inter font-normal text-small">{description}</p>
              <div className="flex flex-col gap-[4px] shrink-0 md:w-[390px]">
                <span className="x-small font-bold text-grey-900 uppercase">
                  QUICK LINKS
                </span>
                <a
                  href="#"
                  className="small font-normal text-primary-400 hover:underline"
                >
                  Previous years rankings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wuscarankingfilterwithtitle;

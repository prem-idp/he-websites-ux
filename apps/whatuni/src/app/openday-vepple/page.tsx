"use client";
import React from "react";
import Link from "next/link";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import UniversityRating from "@packages/shared-components/common-utilities/university-rating/university-rating";
import CategroryRanking from "@packages/shared-components/common-utilities/categrory-ranking/categrory-ranking";
import { tabDataOpendays } from "@packages/constants/constants";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import {
  openDaysData,
  AllOpenDaysData,
  AnyEventsOpenDaysData,
  ProviderOpenDaysData,
  OnlineOpenDaysData,
} from "@packages/constants/constants";
import Opendaysrgridcomponents from "@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents";
import ReviewThumbGallerySliderComponents from "@packages/shared-components/common-utilities/slider/reviewthumbgalleryslidercomponents";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import Reviewslidercomponents from "@packages/shared-components/common-utilities/slider/reviewslidercomponents";
import Uniinfocomponents from "@packages/shared-components/course-details/uni-info/uniinfocomponents";
import Unilocationmapcomponents from "@packages/shared-components/common-utilities/uni-location-map/Unilocationmapcomponents";

const OpendayVepple = () => {
  const breadcrumbData = [
    {
      url: "#",
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Open days",
    },
    {
      url: "",
      label: "Search results",
    },
  ];
  const bgColor = "white";
  const bgColor1 = "grey-50";
  return (
    <>
      <section className="px-[16px] md:px-[20px] xl:px-0 md:py-[16px] hidden md:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>
      <HeaderBanner openvepple={false} />
      <TabSwitchButton tabSwitchButtonData={tabDataOpendays} />
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">[Provider name] open days
            </div>
            <p>22 open days available at this university</p>
          </div>
        </div>
      </section>
      <SearchFilterButtons />

      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[10px] md:px-[20px] xl:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px] uppercase">
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              2025 - 2026
            </li>
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
              University of Portsmouth
              <svg className="cursor-pointer" width="16" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L12 4M4 4L12 12" stroke="#3460DC" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </li>
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
              <Link href="" aria-label="Plus Icon">
                <svg
                  className="cursor-pointer"
                  width="7"
                  height="20"
                  viewBox="0 0 7 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55756 10.508H4.31356V12.788H2.68156V10.508H0.437563V8.96H2.68156V6.668H4.31356V8.96H6.55756V10.508Z"
                    fill="#3460DC"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Opendaysrgridcomponents
        {...ProviderOpenDaysData}
        providerOpenDays={true}
        bgColor={bgColor1}
      />

      <Opendaysrgridcomponents
        {...OnlineOpenDaysData}
        onlineOpendays={true}
        anyTimeEvents={true}
        bgColor={bgColor}
      />
      <div className="uni-locationmap-container p-[16px] md:px-[20px] md:py-[40px] xl:px-[0]">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col gap-[16px]">
          <div className='h5 w-full'>How to get to your open day?</div>
              <Unilocationmapcomponents />
          </div>  
        </div>
      </div>      

      <section className="bg-grey-50 md:px-[20px] md:py-[40px] xl:px-[0]">
        <div className="max-w-container mx-auto">
          <ReviewThumbGallerySliderComponents />
        </div>
      </section>

      {/* Reviews  */}
      <section className="bg-white py-[16px] md:py-[40px]">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col gap-[16px] mb-[24px] px-[16px] md:px-[20px] xl:px-0">
            <div className="h5">Reviews</div>
            <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
              <UniversityRating />
              <CategroryRanking />
            </div>
          </div>
          {/* -- */}
            <div className='latest-reviews flex flex-col gap-[16px]'>
              <div className='card-header flex flex-col gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                  <div className='h5 text-grey300'>Latest animation reviews</div>
                  <div className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Art & Design 
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <Reviewslidercomponents />
              <div className='flex justify-center mt-[4px]'>
                <a href='#' className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                  Read all reviews
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div> 
            </div>
            {/* -- */}
        </div>
      </section>
      {/* Reviews END */}
      
     <Advicecomponents bgColor={bgColor} />
     <Subscribecomponents />
    </>
  );
};

export default OpendayVepple;

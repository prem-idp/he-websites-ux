"use client";
import React from "react";
import Link from "next/link";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from '@packages/shared-components/common-utilities/header-banner/header-banner';
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import { tabDataOpendays } from "@packages/constants/constants";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import ContactDetails from "@packages/shared-components/institution-profile/contactdetails";
import { openDaysData, AllOpenDaysData, AnyEventsOpenDaysData, ProviderOpenDaysData, OnlineOpenDaysData } from '@packages/constants/constants';
import Opendaysrgridcomponents from '@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents';

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
  const bgColor="white";
  const bgColor1="grey-50";
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
          <div className="py-[16px]"><div className="h5 mb-[4px]">Top Law, Engineering  Architecture subjects for you</div>
            <p>000 universities offer 1563 courses</p></div>
        </div>
      </section>
      <SearchFilterButtons />
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto"></div>
      </section>
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[10px] md:px-[20px] xl:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px] uppercase">
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              2025 - 2026
            </li>
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              University of Portsmouth
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
       <Opendaysrgridcomponents {...ProviderOpenDaysData} providerOpenDays={true} bgColor={bgColor1} />
      <Opendaysrgridcomponents {...OnlineOpenDaysData} onlineOpendays={true} anyTimeEvents={true} bgColor={bgColor} />
      <div className="max-w-container mx-auto">
        <ContactDetails />
      </div>
    </>
  )
}

export default OpendayVepple
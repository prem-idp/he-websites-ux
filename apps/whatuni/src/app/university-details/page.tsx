"use client";
import React from "react";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";
import PopularSubjectSlider from "@packages/shared-components/common-utilities/popular-subject-slider/popular-subject-slider";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";

const page = () => {
  const skiplinkLabel = [
    {
      key: 1,
      pageName: "Why study here?",
      pageURL: "/why-study-here?",
    },
    {
      key: 2,
      pageName: "University details",
      pageURL: "/university-details",
    },
    {
      key: 3,
      pageName: "University life",
      pageURL: "/university-life",
    },
    {
      key: 4,
      pageName: "Outcomes",
      pageURL: "/outcomes",
    },
  ];
  return (
    <>
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />

      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-[0] py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"University details"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[40px]">
              {/* page start from here      */}
              <h1>Univesity details</h1>
              {/* advertiser */}
              <Advertiser 
                advertiserTitle={"[University name] facilities"}
              />
              {/* advertiser */}
              <Opendaysvirtualadvertcomponents istitleVisible={false} />
              <PopularSubjectSlider />
              <RedirectionButton />
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;

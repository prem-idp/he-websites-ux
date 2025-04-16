"use client";
import React from "react";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import TabSwtichButton from "@packages/shared-components/common-utilities/tab-swtich-button/tab-swtich-button";

const page = () => {
  return (
    <>
      <Interested />
      <HeaderBanner />
      <TabSwtichButton />

      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0] py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent activeLink={"University details"} />
            </div>
            <div className="w-full xl:w-[804px] flex flex-col gap-[40px]">
              {/* page start from here      */}
              <h1>Test univesity life</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;

"use client";

import { useState } from "react";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";
import UniversityCard from "@packages/shared-components/common-utilities/leadform/university-card";
import LeadformSection from "@packages/shared-components/common-utilities/leadform/leadformsection";
import ProspectusList from "@packages/shared-components/common-utilities/leadform/prospectus-list";

const BulkDigitalProspectus = () => {
  const prospectuses = [
    {
      logoSrc: "/static/assets/icons/search-result/kent.png",
      name: "University of Kent",
      type: "Prospectus (download)",
    },
    {
      logoSrc: "/static/assets/images/bradford.png",
      name: "Bradford University",
      type: "Prospectus (download)",
    },
  ];
  return (
    <section className="bg-grey-50 flex-1 py-[24px]">
      <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[40px] items-start justify-center max-w-[1054px] mx-auto lg:px-[16px] xl:px-0">
        <div className="w-full lg:w-[416px] lg:shrink-0 md:w-[598px] md:mx-auto order-2 lg:order-1">
          <ProspectusList
            items={prospectuses}
            onRemove={(index) => console.log("Remove", index)}
          />
        </div>

        <div className="w-full md:w-[598px] md:mx-auto lg:flex-1 lg:w-auto order-1 lg:order-2">
          <LeadformSection
            title="Order your free prospectuses"
            description="To receive your digital prospectus, complete the form below"
            signInHeading="Sign in or create an account"
            pageType="digitalprospectus"
            signInDescription={
              <>
                Get the support you need to choose your uni. Sign up to Whatuni,
                Complete University Guide and Postgraduate Search now. Sign in if
                you have an account. Or{" "}
                <a href="#" className="text-primary-400">
                  Sign in
                </a>
              </>
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-[16px] px-[16px] lg:gap-[24px] mt-[24px] md:mt-[40px] w-full md:w-[598px] md:mx-auto lg:ml-auto lg:mr-[calc((100vw-1054px)/2)]">
        <Logo />
      </div>
    </section>
  );
};

export default BulkDigitalProspectus;

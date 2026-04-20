"use client";
import React, { useState } from "react";
import ProgressStepper from "@packages/shared-components/common-utilities/leadform/progress-stepper";
import ProspectusList from "@packages/shared-components/common-utilities/leadform/prospectus-list";
import LeadformSection from "@packages/shared-components/common-utilities/leadform/leadformsection";
import AddressStep from "@packages/shared-components/common-utilities/leadform/address-step";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";

const steps = [{ label: "Details" }, { label: "Address" }];

const BulkPhysicalProspectusPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const prospectuses = [
    {
      logoSrc: "/static/assets/icons/search-result/kent.png",
      name: "University of Kent",
      type: "Prospectus (by post)",
    },
    {
      logoSrc: "/static/assets/images/bradford.png",
      name: "Bradford University",
      type: "Prospectus (by post)",
    },
  ];

  return (
    <section className="bg-grey-50 flex-1 py-[24px]">
      <ProgressStepper steps={steps} activeStep={activeStep} />
      <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[40px] items-start justify-center max-w-[1054px] mx-auto lg:px-[16px] xl:px-0">
        <div className="w-full lg:w-[416px] lg:shrink-0 md:w-[598px] md:mx-auto order-2 lg:order-1">
          <ProspectusList
            items={prospectuses}
            onRemove={(index) => console.log("Remove", index)}
          />
        </div>

        <div className="w-full md:w-[598px] md:mx-auto lg:flex-1 lg:w-auto order-1 lg:order-2">
          {activeStep === 0 ? (
            <LeadformSection
              title="Get your free prospectuses"
              description="To receive your prospectuses, complete the form below"
              signInHeading="Sign in or create an account"
              pageType="physicalprospectus"
              signInDescription={
                <>
                  Get the support you need to choose your uni. Sign up to
                  Whatuni, Complete University Guide and Postgraduate Search now.
                  Sign in if you have an account. Or{" "}
                  <a href="#" className="text-primary-400">
                    Sign in
                  </a>
                </>
              }
              onSubmit={() => setActiveStep(1)}
            />
          ) : (
            <AddressStep onSubmit={() => setActiveStep(1)} showExtraCheckbox />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[16px] px-[16px] lg:gap-[24px] mt-[24px] md:mt-[40px] w-full md:w-[598px] md:mx-auto lg:ml-auto lg:mr-[calc((100vw-1054px)/2)]">
        <Logo />
      </div>
    </section>
  );
};

export default BulkPhysicalProspectusPage;

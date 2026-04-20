"use client";
import React, { useState } from "react";
import ProgressStepper from "@packages/shared-components/common-utilities/leadform/progress-stepper";
import UniversityCard from "@packages/shared-components/common-utilities/leadform/university-card";
import LeadformSection from "@packages/shared-components/common-utilities/leadform/leadformsection";
import AddressStep from "@packages/shared-components/common-utilities/leadform/address-step";
import RegisterSuccess from "@packages/shared-components/common-utilities/register-new/registersuccess";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";

const steps = [{ label: "Details" }, { label: "Address" }];

const PhysicalProspectusPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-grey-50 flex-1 py-[24px]">
      <ProgressStepper steps={steps} activeStep={activeStep} />
      <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[40px] items-start justify-center max-w-[1054px] mx-auto lg:px-[16px] xl:px-0">
        <div className="w-full lg:w-[416px] lg:shrink-0 md:w-[598px] md:mx-auto order-2 lg:order-1">
          <UniversityCard
            logoSrc="/static/assets/icons/search-result/kent.png"
            name="University of Kent"
            rating="4.6"
            reviewCount="400"
            backgroundImage="/static/assets/images/universityofkent.png"
            maxSlidesPerView={1}
          />
        </div>

        <div className="w-full md:w-[598px] md:mx-auto lg:flex-1 lg:w-auto order-1 lg:order-2">
          {activeStep === 0 ? (
            <LeadformSection
              title="Get your free prospectus"
              description="To receive your printed prospectus, complete the form below"
              signInHeading="Sign in or create an account"
              pageType="physicalprospectus"
              submitLabel="Continue to get prospectus"
              onSubmit={() => setActiveStep(1)}
            />
          ) : (
            <AddressStep onSubmit={() => setActiveStep(1)} />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[16px] px-[16px] lg:gap-[24px] mt-[24px] md:mt-[40px] w-full md:w-[598px] md:mx-auto lg:ml-auto lg:mr-[calc((100vw-1054px)/2)]">
        <Logo />
      </div>
    </section>
  );
};

export default PhysicalProspectusPage;

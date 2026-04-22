"use client";

import { useState } from "react";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";
import UniversityCard from "@packages/shared-components/common-utilities/leadform/university-card";
import LeadformSection from "@packages/shared-components/common-utilities/leadform/leadformsection";
import OpenDayConfirmStep from "@packages/shared-components/common-utilities/leadform/openday-confirm-step";
import ProgressStepper from "@packages/shared-components/common-utilities/leadform/progress-stepper";

const steps = [{ label: "Details" }, { label: "Confirm" }];

const OpenDaysPage = () => {
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
            sliderClassName="leadform-slider"
            autoplay
            hideNavigation
            hideReadMore
            mobileSpaceBetween={16}
          />
        </div>
        <div className="w-full md:w-[598px] md:mx-auto lg:flex-1 lg:w-auto order-1 lg:order-2">
          {activeStep === 0 ? (
            <LeadformSection
              title="Book your open day place at"
              description="University of Bradford"
              signInHeading="Sign in or create an account"
              pageType="opendays"
              onSubmit={() => setActiveStep(1)}
            />
          ) : (
            <OpenDayConfirmStep onSubmit={() => setActiveStep(1)} />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[16px] px-[16px] lg:gap-[24px] mt-[24px] md:mt-[40px] w-full md:w-[598px] md:mx-auto lg:ml-auto lg:mr-[calc((100vw-1054px)/2)]">
        <Logo />
      </div>
    </section>
  );
};

export default OpenDaysPage;

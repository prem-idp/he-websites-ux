"use client";
import React, { useState } from "react";
import Image from "next/image";
import UniversityCard from "@packages/shared-components/common-utilities/leadform/university-card";
import CustomCheckbox from "@packages/shared-components/common-utilities/leadform/custom-checkbox";
import SuccessNotification from "@packages/shared-components/common-utilities/leadform/success-notification";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";

const BookOpenday1Click = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [prospectusOrdered, setProspectusOrdered] = useState(false);

  if (!isOpen) {
    return (
      <section className="bg-grey-50 flex-1 py-[24px] flex items-center justify-center">
        <button
          type="button"
          className="btn btn-primary btn-medium"
          onClick={() => setIsOpen(true)}
        >
          Book Open Day
        </button>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-shadow">
      <div className="bg-white rounded-[8px] shadow-custom-6 max-w-[798px] w-full mx-[16px] max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row">
        {/* Left side - University Card */}
        <div className="w-full lg:w-[375px] shrink-0">
          <UniversityCard
            logoSrc="/static/assets/icons/search-result/kent.png"
            name="University of Kent"
            rating="4.6"
            reviewCount="400"
            backgroundImage="/static/assets/images/universityofkent.png"
            maxSlidesPerView={1}
            sliderClassName="leadform-slider"
            noRoundedRight
          />
          <div className="flex items-center justify-center py-[16px]">
            <Logo />
          </div>
        </div>

        {/* Right side - Book open day form */}
        <div className="flex-1 p-[16px] md:p-[32px] relative">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-[16px] right-[16px] cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <Image
              src="/static/assets/icons/close_white_icon.svg"
              alt=""
              width={24}
              height={24}
              className="custom-filter-icon"
            />
          </button>

          {/* Header */}
          <div className="flex flex-col gap-[8px] text-center mb-[24px]">
            <h1 className="text-heading6 lg:text-heading5 font-farro font-bold">
              Book your place at
            </h1>
            <p className="text-small">
              University of Bradford, Sat 17th August 2026, Undergraduate
            </p>
          </div>

          {/* Get prospectus card */}
          <div className="border border-grey-200 rounded-[8px] p-[16px] flex flex-col gap-[12px] mb-[24px]">
            <div className="flex flex-col gap-[4px]">
              <p className="small font-semibold">
                Get a free [uni] prospectus (optional)
              </p>
              <p className="text-small text-grey-500">
                Find out more about this uni before you head there in person
                with a free prospectus sent straight to you
              </p>
            </div>
            {prospectusOrdered ? (
              <SuccessNotification message="Prospectus ordered" />
            ) : (
              <button
                type="button"
                className="group btn-neutral-outline w-full flex items-center justify-center gap-[6px] small font-semibold"
                onClick={() => setProspectusOrdered(true)}
              >
                <span>+</span> Get prospectus
              </button>
            )}
          </div>

          {/* Stay in the know */}
          <div className="space-y-[8px] mb-[24px]">
            <label className="small font-semibold">Stay in the know</label>
            <CustomCheckbox>
              We&apos;ll send helpful updates and occasionally invite you to share your views.
            </CustomCheckbox>
            <CustomCheckbox>
              Receive newsletters from this uni. Contact the uni directly to update your email preferences.{" "}
              <a href="#" className="text-primary-400">Privacy Policy</a>
            </CustomCheckbox>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="btn btn-primary btn-medium w-full flex items-center justify-center gap-[8px]"
            onClick={() => setIsOpen(false)}
          >
            Book open day
            <Image src="/static/assets/icons/right_white_arrow.svg" width={17} height={14} alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookOpenday1Click;

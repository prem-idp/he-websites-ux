"use client";
import React, { useState } from "react";
import Image from "next/image";
import UniversityCard from "@packages/shared-components/common-utilities/leadform/university-card";
import CustomCheckbox from "@packages/shared-components/common-utilities/leadform/custom-checkbox";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";

const OrderProspectus1Click = () => {
  const [isOpen, setIsOpen] = useState(true);
  const address = {
    name: "Brian Shaw",
    line1: "69, Zoo Lane,",
    line2: "Coventry,",
    country: "England,",
    postcode: "GA1 2LD",
  };

  if (!isOpen) {
    return (
      <section className="bg-grey-50 flex-1 py-[24px] flex items-center justify-center">
        <button
          type="button"
          className="btn btn-primary btn-medium"
          onClick={() => setIsOpen(true)}
        >
          Order Prospectus
        </button>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-shadow-white bg-white">
      <div className="shadow-custom-6 w-full md:w-[798px] md:mx-[16px] bg-white md:rounded-[8px] overflow-y-auto md:overflow-x-hidden md:custom-scrollbar-3 max-h-[100vh] md:max-h-[90vh] flex flex-col md:flex-row">
        {/* Left side - University Card */}
        <div className="w-full h-full md:w-[375px] shrink-0 order-2 bg-grey-50 md:order-1 md:border-r md:border-grey-200">
          <UniversityCard
            logoSrc="/static/assets/icons/search-result/kent.png"
            name="University of Kent"
            rating="4.6"
            reviewCount="400"
            backgroundImage="/static/assets/images/universityofkent.png"
            maxSlidesPerView={1}
            sliderClassName="leadform-1click-slider"
            noRoundedRight
            headingClassName="px-[16px]"
            autoplay
            hideNavigation
            hideReadMore
            mobileSpaceBetween={16}
          />
          <div className="flex items-center justify-center gap-[12px] p-[16px] w-full md:w-[240px] mx-auto">
            <Logo />
          </div>
        </div>

        {/* Right side - Order form */}
        <div className="flex-1 p-[56px_16px] md:p-[72px_40px] relative order-1 md:order-2">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-[8px] right-[12px] cursor-pointer"
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
            <h1 className="text-heading6 md:text-heading5 font-farro font-bold">
              Get a printed prospectus from
            </h1>
            <p className="text-small">University of Kent</p>
          </div>

          {/* Address card */}
          <div className="bg-grey-50 border border-grey-200 rounded-[8px] p-[16px] mb-[24px]">
            <div className="flex flex-col gap-[4px]">
              <p className="small font-semibold">Send prospectus to</p>
              <p className="small">
                <span className="font-semibold">Name</span>: {address.name}
              </p>
              <p className="small font-semibold">Address:</p>
              <p className="small">{address.line1}</p>
              <p className="small">{address.line2}</p>
              <p className="small">{address.country}</p>
              <p className="small">{address.postcode}</p>
              <button
                type="button"
                className="small font-semibold text-primary-400 text-left cursor-pointer mt-[4px]"
              >
                Edit
              </button>
            </div>
          </div>

          {/* Stay in the know */}
          <div className="space-y-[8px] mb-[24px]">
            <label className="small font-semibold">Stay in the know</label>
            <CustomCheckbox>
              We&apos;ll send helpful updates and occasionally invite you to
              share your views.
            </CustomCheckbox>
            <CustomCheckbox>
              Receive newsletters from this uni. Contact the uni directly to
              update your email preferences.{" "}
              <a href="#" className="text-primary-400">
                Privacy Policy
              </a>
            </CustomCheckbox>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="btn btn-primary btn-medium w-full flex items-center justify-center gap-[8px]"
            onClick={() => setIsOpen(false)}
          >
            Order my free prospectus
            <Image
              src="/static/assets/icons/right_white_arrow.svg"
              width={17}
              height={14}
              alt="arrow icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProspectus1Click;

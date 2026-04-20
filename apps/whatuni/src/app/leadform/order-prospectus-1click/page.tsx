"use client";
import React, { useState } from "react";
import Image from "next/image";
import UniversityCard from "@packages/shared-components/common-utilities/leadform/university-card";
import CustomCheckbox from "@packages/shared-components/common-utilities/leadform/custom-checkbox";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";

const OrderProspectus1Click = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [address, setAddress] = useState({
    name: "Brian Shaw",
    line1: "69, Zoo Lane,",
    line2: "Coventry,",
    country: "England,",
    postcode: "GA1 2LD",
  });

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

        {/* Right side - Order form */}
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
              Get a printed prospectus from
            </h1>
            <p className="text-small">University of Kent</p>
          </div>

          {/* Address card */}
          <div className="border border-grey-200 rounded-[8px] p-[16px] mb-[24px]">
            {!isEditing ? (
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
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-[16px]">
                <p className="small font-semibold">Edit address</p>
                <div className="flex flex-col gap-[4px]">
                  <label className="small font-semibold">Address line 1</label>
                  <input type="text" className="input-textbox w-full" value={address.line1} onChange={(e) => setAddress({ ...address, line1: e.target.value })} />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label className="small font-semibold">Address line 2</label>
                  <input type="text" className="input-textbox w-full" value={address.line2} onChange={(e) => setAddress({ ...address, line2: e.target.value })} />
                </div>
                <div className="flex flex-col md:flex-row gap-[16px] md:gap-[8px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="small font-semibold">Town/city</label>
                    <input type="text" className="input-textbox w-full" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} />
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="small font-semibold">Postcode</label>
                    <input type="text" className="input-textbox w-full" value={address.postcode} onChange={(e) => setAddress({ ...address, postcode: e.target.value })} />
                  </div>
                </div>
                <button type="button" className="btn btn-primary btn-small self-start" onClick={() => setIsEditing(false)}>Save</button>
              </div>
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
            Order my free prospectus
            <Image src="/static/assets/icons/right_white_arrow.svg" width={17} height={14} alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProspectus1Click;

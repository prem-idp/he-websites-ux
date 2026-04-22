import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomCheckbox from "./custom-checkbox";
interface LeadFormFeildsProps {
  pageType?:
    | "requestinfo"
    | "opendays"
    | "digitalprospectus"
    | "physicalprospectus";
  onSubmit?: () => void;
  submitLabel?: string;
}

const LeadFormFeilds = ({
  pageType = "requestinfo",
  onSubmit,
  submitLabel,
}: LeadFormFeildsProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [openDayDropdownOpen, setOpenDayDropdownOpen] = useState(false);
  const [selectedOpenDay, setSelectedOpenDay] = useState(
    "Sat 17 Aug 2025 | University of Bradford, Bradford",
  );
  const [selectedStudyType, setSelectedStudyType] = useState(0);

  const openDays = [
    "Sat 17 Aug 2025 | University of Bradford, Bradford",
    "Sat 24 Aug 2025 | University of Bradford, Bradford",
    "Sat 31 Aug 2025 | University of Bradford, Bradford",
    "Sat 7 Sep 2025 | University of Bradford, Bradford",
    "Sat 14 Sep 2025 | University of Bradford, Bradford",
  ];

  const years = ["2024", "2025", "2026", "2027"];
  const study = [
    "Undergraduate (eg: first degree)",
    "Postgraduate (eg: master's)",
  ];
  return (
    <>
      {/* Form Fields */}
      <div className="flex flex-col gap-[24px]">
        {/* Your Enquiry */}
        {pageType === "requestinfo" && (
          <div className="flex flex-col gap-[4px]">
            <label className="text-small font-semibold">
              Your enquiry<span className="text-negative-default">*</span>
            </label>
            <textarea
              className="input-textbox min-h-[83px] md:min-h-[62px] resize-none placeholder-grey500"
              placeholder="Hello, I read about the Law LLB (Hons) offered by University of Bradford on Whatuni.com and would like to request more information about..."
            />
          </div>
        )}

        {/* Open Day Type */}
        {pageType === "opendays" && (
          <div className="bg-grey-50 border border-grey-200 rounded-[8px] p-[16px]">
            <div className="flex flex-col gap-[16px]">
              <label className="small font-semibold">
                What open day type do you want to attend?
              </label>
              <div className="flex flex-row flex-wrap gap-[8px]">
                {study.map((item, index) => (
                  <div
                    className="form_check flex relative"
                    key={`openday-${index}`}
                  >
                    <input
                      defaultChecked={index === 0}
                      type="radio"
                      name="openday-type"
                      className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id={`openday-${item}`}
                      onChange={() => setSelectedStudyType(index)}
                    />
                    <label
                      htmlFor={`openday-${item}`}
                      className="btn btn-primary-outline p-[8px_10px]"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
              {selectedStudyType === 1 ? (
                <div className="bg-white border border-grey-500 rounded-[8px] p-[10px_12px] shadow-custom-2">
                  <p className="small">
                    There are no upcoming undergraduate open days at this
                    university.
                  </p>
                  <Link href="#" className="small text-primary-400">
                    Browse Undergraduate universities
                  </Link>
                </div>
              ) : (
                <div className="relative">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between small font-normal px-[12px] py-[10px] bg-grey-100 border border-grey-500 rounded-[4px] text-left"
                    onClick={() => setOpenDayDropdownOpen(!openDayDropdownOpen)}
                    aria-expanded={openDayDropdownOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{selectedOpenDay}</span>
                    <Image
                      src="/static/assets/icons/arrow_down_black.svg"
                      alt="dropdown arrow"
                      width={20}
                      height={20}
                      className={`transition-transform ${openDayDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDayDropdownOpen && (
                    <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-0 top-[52px] overflow-hidden">
                      <div className="px-[16px] pt-[12px] pb-[8px]">
                        <p className="x-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">
                          Choose Open Day
                        </p>
                      </div>
                      <div className="px-[16px] pb-[8px]">
                        <span className="inline-block x-small font-semibold uppercase text-grey-500 bg-grey-100 rounded-[4px] px-[8px] py-[2px]">
                          Open Days
                        </span>
                      </div>
                      <div className="max-h-[200px] overflow-y-auto custom-scrollbar-2">
                        {openDays.map((day) => (
                          <button
                            key={day}
                            type="button"
                            className="block w-full text-left small px-[16px] py-[12px] hover:bg-blue-50 underline"
                            onClick={() => {
                              setSelectedOpenDay(day);
                              setOpenDayDropdownOpen(false);
                            }}
                            role="option"
                            aria-selected={selectedOpenDay === day}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* First Name & Last Name */}
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[8px]">
          <div className="flex-1 flex flex-col gap-[4px]">
            <label className="text-small font-semibold">
              First name<span className="text-negative-default">*</span>
            </label>
            <input type="text" className="input-textbox" />
            <p className="x-small text-negative-default">
              We still don't know your name. Remind us?
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[4px]">
            <label className="text-small font-semibold">
              Last name<span className="text-negative-default">*</span>
            </label>
            <input type="text" className="input-textbox" />
            <p className="x-small text-negative-default">
              We still don't know your name. Remind us?
            </p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-[4px]">
          <label className="text-small font-semibold">
            Email address
            <span className="text-negative-default">*</span>
          </label>
          <input type="email" className="input-textbox" />
          <p className="x-small text-negative-default">
            Please enter a valid email address
          </p>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <label htmlFor="password" className="small font-semibold">
              Password<span className="text-negative-default">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input-textbox w-full pr-[40px] placeholder-grey500"
                placeholder="Please enter your password"
              />
              <button
                className="absolute inset-y-0 right-[12px] flex items-center text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  src={
                    showPassword
                      ? "/static/assets/icons/show_password_icon.svg"
                      : "/static/assets/icons/hide_password.svg"
                  }
                  alt="Toggle password"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <p className="x-small text-negative-default">
              We still don't know your password. Remind us?
            </p>
          </div>
          <div className="flex justify-center divide-x divide-grey-200 small [&>*]:px-[8px]">
            <div> ABC</div>
            <div> abc</div>
            <div> 123</div>
            <div> !@%</div>
            <div> 8 characters</div>
          </div>
        </div>

        {/* When will you start */}
        {pageType !== "physicalprospectus" && (
          <div className="form_radio flex flex-col gap-[4px]">
            <label className="check-label small font-semibold text-grey300">
              When will you start?
            </label>
            <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
              {years.map((year) => (
                <div className="flex relative" key={year}>
                  <input
                    defaultChecked={year === "2024"}
                    type="radio"
                    name="yoe"
                    className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                    id={year}
                  />
                  <label
                    htmlFor={year}
                    className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                  >
                    {year}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Level */}
        {(pageType === "digitalprospectus" ||
          pageType === "physicalprospectus") && (
          <div className="flex flex-col gap-[8px]">
            <div className="small font-semibold">
              Which level do you want to study at?
              <span className="text-negative-default">*</span>
            </div>
            <div className="flex flex-row flex-wrap gap-[8px]">
              {study.map((item, index) => (
                <div className="form_check flex relative" key={index}>
                  <input
                    defaultChecked={index === 0}
                    type="checkbox"
                    name="study"
                    className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                    id={item}
                  />
                  <label htmlFor={item} className="btn btn-primary-outline">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Postcode */}
        {pageType === "requestinfo" && (
          <div className="form_group flex flex-col gap-[8px] md:flex-row md:gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <label
                htmlFor="postcode"
                className="small font-semibold text-grey300"
              >
                Postcode
              </label>
              <div className="relative w-full md:w-[287px]">
                <input
                  type="text"
                  className="w-full small font-normal px-[12px] py-[10px] pr-[40px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2 placeholder-grey500 focus:border-negative-default [&.error]:border-negative-default"
                  id="postcode"
                  placeholder="Enter postcode"
                />
              </div>
              <p className="x-small text-negative-default">
                Please enter a valid postcode
              </p>
            </div>
            <div className="flex flex-col justify-start gap-[4px]">
              <div className="postalcode hints md:mt-[28px]">
                <Link
                  href=""
                  className="tooltip group/item relative small font-semibold text-primary-400 underline"
                >
                  Why do we need your postcode?
                  <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] shadow-custom-12 mt-[3px] absolute right-[-15px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[60%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']">
                    <span className="font-semibold tooltip-head">
                      Why do we need your postcode?
                    </span>
                    <p className="x-small">
                      We use this information to help assess the reach of our
                      products. This is completely optional.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {pageType !== "opendays" && pageType !== "physicalprospectus" && (
          <>
            <hr className="bg-grey-200" />

            {/* Stay in the know */}
            <div className="space-y-[8px]">
              <label className="small font-semibold">Stay in the know</label>
              <CustomCheckbox>
                We'll send helpful updates and occasionally invite you to share
                your views.
              </CustomCheckbox>
              <CustomCheckbox>
                Receive newsletters from this University of Bradford. Contact
                the uni directly to update your email preferences.{" "}
                <a href="#" className="text-primary-400">
                  privacy notice
                </a>
              </CustomCheckbox>
            </div>
          </>
        )}
      </div>

      <hr className="bg-grey-200" />

      {/* Terms */}
      <p className="text-x-small text-grey-600">
        By continuing, I confirm I'm over 13 and agree to the{" "}
        <a href="#" className="text-primary-400">
          terms and conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-primary-400">
          privacy notice
        </a>
        <span className="text-negative-default">*</span>
      </p>

      {/* Submit Button */}
      <button
        type="button"
        className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
        onClick={onSubmit}
      >
        {submitLabel ||
          (pageType === "opendays"
            ? "Continue booking open day"
            : pageType === "digitalprospectus"
              ? "Sign up and request prospectus"
              : pageType === "physicalprospectus"
                ? "Complete to order your prospectuses"
                : "Request info")}
        <Image
          src="/static/assets/icons/right_white_arrow.svg"
          width={17}
          height={14}
          alt="arrow icon"
        />
      </button>
    </>
  );
};

export default LeadFormFeilds;

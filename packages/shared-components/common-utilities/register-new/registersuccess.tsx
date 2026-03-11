import React from "react";
import Image from "next/image";
import Link from "next/link";
const RegisterSuccess = () => {
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-start bg-positive-light rounded-[6px] px-[16px] py-[16px] gap-[8px] border border-positive-default">
          <svg
            className="mt-[4px]"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L5 11L15 1"
              stroke="#106519"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="small font-semibold text-positive-dark flex w-[calc(100%_-_24px)]">
            You have successfully signed up
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h5>Personalise your information</h5>
          <p className="small font-normal">
            Help us make sure we’re sending useful advice at the right time for
            you.
          </p>
        </div>
        <div className="form_radio flex flex-col gap-[4px]">
          <label className="check-label small font-semibold text-grey300">
            When do you plan to start uni?
          </label>
          <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
            <div className="flex relative">
              <input
                defaultChecked
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2025"
              />
              <label
                htmlFor="2025"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2025
              </label>
            </div>
            <div className="flex relative">
              <input
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2026"
              />
              <label
                htmlFor="2026"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2026
              </label>
            </div>
            <div className="flex relative">
              <input
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2027"
              />
              <label
                htmlFor="2027"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2027
              </label>
            </div>
            <div className="flex relative">
              <input
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2028"
              />
              <label
                htmlFor="2028"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2028
              </label>
            </div>
          </div>
        </div>
        <div className="form_group flex flex-row gap-[8px]">
          <div className="flex flex-col basis-6/12 gap-[4px] error">
            <label
              htmlFor="postcode"
              className="small font-semibold text-grey300"
            >
              Postcode <span className="x-small font-normal">(optional)</span>
            </label>
            <input
              type="text"
              className="w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="postcode"
            />
            <div className="x-small">Used only to understand our audience</div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] bg-grey-50 p-[16px] border border-grey-200 rounded-[4px]">
          <div className="form_radio flex flex-col gap-[8px]">
            <label className="check-label small font-semibold text-grey300">
              What description fits you best?{" "}
              <span className="x-small font-normal">(optional)</span>
            </label>
            <div className="form-radio-group flex flex-col gap-[10px]">
              <div className="flex items-center gap-[12px]">
                <div className="radio_card">
                  <input
                    type="radio"
                    name="descrip"
                    className="form-radio hidden"
                    id="firstdegree"
                  />
                  <label
                    htmlFor="firstdegree"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="firstdegree"
                  className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                >
                  I’m looking for my first degree
                </label>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="radio_card">
                  <input
                    type="radio"
                    name="descrip"
                    className="form-radio hidden"
                    id="postgraduatecourse"
                  />
                  <label
                    htmlFor="postgraduatecourse"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="postgraduatecourse"
                  className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                >
                  I’m looking for a postgraduate course
                </label>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="radio_card">
                  <input
                    type="radio"
                    name="descrip"
                    className="form-radio hidden"
                    id="prospectivestudent"
                  />
                  <label
                    htmlFor="prospectivestudent"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="prospectivestudent"
                  className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                >
                  I’m a parent or guardian of a prospective student
                </label>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="radio_card">
                  <input
                    type="radio"
                    name="descrip"
                    className="form-radio hidden"
                    id="teacher"
                  />
                  <label
                    htmlFor="teacher"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="teacher"
                  className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                >
                  Teacher
                </label>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="radio_card">
                  <input
                    type="radio"
                    name="descrip"
                    className="form-radio hidden"
                    id="advisor"
                  />
                  <label
                    htmlFor="advisor"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="advisor"
                  className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                >
                  Career Advisor
                </label>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="radio_card">
                  <input
                    type="radio"
                    name="descrip"
                    className="form-radio hidden"
                    id="higher education"
                  />
                  <label
                    htmlFor="higher education"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="higher education"
                  className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                >
                  I work in higher education
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
        >
          Continue
          <Image
            src="/static/assets/icons/right_white_arrow.svg"
            width={17}
            height={14}
            alt="arrow icon"
          />
        </button>
      </div>
    </>
  );
};

export default RegisterSuccess;

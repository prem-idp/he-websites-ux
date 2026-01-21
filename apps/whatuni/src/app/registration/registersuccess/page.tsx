"use client";
import React from "react";
import EmailPreferences from "@packages/shared-components/common-utilities/register/emailpreferences";

const RegisterSuccess = () => {
  return (
    <section className="bg-grey-50 pt-[24px] md:py-[64px]">
      <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white">
        <div className="flex flex-col p-[16px] gap-[24px] md:p-[32px]">
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
          <div className="flex flex-col gap-[4px]">
            <h5 className="text-grey300">Thanks :)</h5>
            <p className="small font-normal text-grey300">
              Let us know a bit more about yourself so we can plan some great
              content tailored for you
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px] bg-grey-50 p-[16px] border border-grey-200 rounded-[4px]">
              <div className="form_radio flex flex-col gap-[8px]">
                <label className="check-label small font-semibold text-grey300">
                  What description fits you best?{" "}
                  <span className="x-small font-normal text-grey-700">
                    (optional)
                  </span>
                </label>
                <div className="form-radio-group flex flex-col gap-[10px]">
                  <div className="col flex items-center gap-[12px]">
                    <div className="radio_card">
                      <input
                        type="radio"
                        name="descrip"
                        className="form-radio hidden"
                        id="parents"
                      />
                      <label
                        htmlFor="parents"
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
                      htmlFor="parents"
                      className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                    >
                      Parents
                    </label>
                  </div>
                  <div className="col flex items-center gap-[12px]">
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
                  <div className="col flex items-center gap-[12px]">
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
                  <div className="col flex items-center gap-[12px]">
                    <div className="radio_card">
                      <input
                        type="radio"
                        name="descrip"
                        className="form-radio hidden"
                        id="sector"
                      />
                      <label
                        htmlFor="sector"
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
                      htmlFor="sector"
                      className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]"
                    >
                      Work in the sector
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <EmailPreferences />
            <div className="flex flex-col justify-between items-center gap-[24px]">
              <div className="submit_btn w-full">
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSuccess;

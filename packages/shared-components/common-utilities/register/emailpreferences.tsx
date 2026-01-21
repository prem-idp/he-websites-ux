import React from "react";

const EmailPreferences = () => {
  return (
    <div className="form_check flex flex-col gap-[4px]">
      <label className="check-label small font-semibold text-grey300">
        Stay up to date via email{" "}
        <span className="x-small font-normal text-grey-700">(optional)</span>
      </label>
      <div className="form-check-group flex flex-col gap-[8px]">
        <div className="flex items-start gap-[12px] relative">
          <div className="checkbox_card">
            <input
              type="checkbox"
              className="form-checkbox hidden"
              id="newsletters"
            />
            <label
              htmlFor="newsletters"
              className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]"
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
            htmlFor="newsletters"
            className="check-label small font-semibold w-[calc(100%_-_28px)]"
          >
            <span className="x-small font-semibold text-grey-600">
              Newsletters and uni updates{" "}
              <span className="x-small font-normal text-grey-700">
                (tick to opt in)
              </span>
            </span>
            <p className="x-small font-normal text-grey-600">
              Emails from us and our carefully selected third party providers
              providing you with the latest uni news, tips and guides.
            </p>
          </label>
        </div>
        <div className="flex items-start gap-[12px] relative">
          <div className="checkbox_card">
            <input
              type="checkbox"
              className="form-checkbox hidden"
              id="Surveys"
            />
            <label
              htmlFor="Surveys"
              className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]"
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
            htmlFor="Surveys"
            className="check-label small font-semibold w-[calc(100%_-_28px)]"
          >
            <span className="x-small font-semibold text-grey-600">
              Surveys{" "}
              <span className="x-small font-normal text-grey-700">
                (tick to opt in)
              </span>
            </span>
            <p className="x-small font-normal text-grey-600">
              Have your say on important education issues and the services you
              recieve from us and our partners
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmailPreferences;

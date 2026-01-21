"use client";
import React from "react";
import ToggleComponent from "@packages/shared-components/common-utilities/form-variations/ToggleComponent";

const Unsubscribe = () => {
  return (
    <section className="bg-grey-50 pt-[24px] md:py-[64px]">
      <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white">
        <div className="flex flex-col p-[24px_16px] gap-[24px] md:p-[32px]">
          <h5>Manage your email preferences</h5>
          <div className="small">
            You can make changes to you subscription preferences by swiping the
            on and off buttons
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <div className="small font-semibold">Please choose</div>
              <ToggleComponent
                label="Newsletters and uni updates"
                description="Emails from us and our carefully selected third party providers providing you with the latest uni news, tips and guides."
              />
              <ToggleComponent
                label="Surveys"
                description="Have your say on important education issues and the services you recieve from us and our partners"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
            >
              Save{" "}
              <svg
                className="animate-spin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12C4.5 7.875 7.875 4.5 12 4.5C16.125 4.5 19.5 7.875 19.5 12H22C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22V19.5C7.875 19.5 4.5 16.125 4.5 12Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsubscribe;

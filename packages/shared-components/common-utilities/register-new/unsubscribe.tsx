import React from "react";
import ToggleComponent from "../form-variations/ToggleComponent";
import UnsubscribeAccordion from "./unsubscribe-accordion";

const Unsubscribe = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <h5>Manage your email preferences</h5>
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
          Email preferences updated
        </p>
      </div>
      <div className="small">
        You can make changes to you subscription preferences by swiping the on
        and off buttons
      </div>
      <div className="flex flex-col gap-[16px]">
        <UnsubscribeAccordion title="Whatuni">
          <div className="flex flex-col gap-[8px]">
            <div className="small font-semibold">Please choose</div>
            <ToggleComponent
              label="Newsletters and uni updates"
              description="Emails from us and our carefully selected third party providers providing you with the latest uni news, tips and guides."
            />
            <ToggleComponent
              label="Reminders"
              description="To remind you about upcoming course start dates, your shortlisted courses and any courses you emailed about."
            />
            <ToggleComponent
              label="Surveys"
              description="Have your say on important education issues and the services you recieve from us and our partners"
            />
          </div>
        </UnsubscribeAccordion>
        <UnsubscribeAccordion title="Complete University Guide">
          <p>Content goes here</p>
        </UnsubscribeAccordion>
        <UnsubscribeAccordion title="Postgraduate Search">
          <p>Content goes here</p>
        </UnsubscribeAccordion>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
      >
        Save{" "}
        {/* <svg
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
              </svg> */}
      </button>
    </div>
  );
};

export default Unsubscribe;

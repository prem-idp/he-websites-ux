import UnsubscribeAccordionContent from "./unsubscribe-accordion-content";
import React from "react";

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
      <UnsubscribeAccordionContent />
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

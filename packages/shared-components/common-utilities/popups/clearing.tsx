import Link from "next/link";
import React from "react";

const ClearingPopup = (onClose: any) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-shadow flex items-center justify-center z-50">
        <div className="bg-white shadow-custom-6 w-full md:w-[512px] p-[24px] rounded-[8px] mx-[16px]">
          <div
            onClick={onClose}
            className="flex items-center justify-end mt-[-8px] mr-[-8px]"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-grey-400"
                d="M1 13L13 1M1 1L13 13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="review-modal-container flex flex-col gap-[16px]">
            <div>
              <div className="para-lg font-semibold">
                Clearing 2025 has closed!
              </div>
              <div className="small mt-[4px]">
                Check out the courses available for the next intake year and
                sign up for our newsletters
              </div>
            </div>
            <div className="bg-grey-100 p-[16px] rounded-[8px] flex flex-col gap-[10px]">
              <div className="small font-semibold">
                Register for Clearing updates and more
              </div>
              <button
                type="button"
                className="btn btn-medium btn-primary font-semibold w-fit flex items-center gap-[6px]"
              >
                Register now
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-[8px] small font-semibold">
              <div>Find out everything you need to know about Clearing</div>
              <a
                href="#"
                className="text-primary-400 flex items-center gap-[6px] hover:underline"
              >
                Visit our Clearing Hub
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                    fill="#4664DC"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClearingPopup;

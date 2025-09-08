import Link from "next/link";
import React from "react";

const FavouritesPopup = (onClose: any) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-shadow flex items-center justify-center z-50">
        <div className="bg-white shadow-custom-6 w-full md:w-[375px] p-[24px] rounded-[8px] mx-[16px]">
          <div
            onClick={onClose}
            className="flex items-center justify-end mt-[-8px] mr-[-8px] cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-grey300"
                d="M1 13L13 1M1 1L13 13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="review-modal-container flex flex-col gap-[16px]">
            <div className="heading6 font-farro font-semibold">
              Are you sure?
            </div>
            <div className="small">
              You've recently ordered a prospectus from this uni, do you want to
              continue with this order?
            </div>
            <button
              type="button"
              className="btn btn-medium btn-primary font-semibold w-full flex items-center justify-center gap-[6px]"
            >
              Yes, continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritesPopup;

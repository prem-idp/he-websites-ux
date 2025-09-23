import Link from "next/link";
import React from "react";
import CheckboxComponent from "../form-variations/CheckboxComponent";

const FavouritesPopup = ({ isOpen, onClose, pageTitle, popupData }: any) => {
  if (!isOpen) return null;

  const shortList = Array.from({ length: 20 }, () => ({
    description:
      "Law and Sociologyyyyyyyyyyyyyyy... University of Plymouthhhhhhhhhh...",
  }));

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-shadow flex items-center justify-center z-50">
        <div className="reletive bg-white shadow-custom-6 w-[375px] p-[24px] rounded-[8px] mx-[16px] max-h-screen">
          <button
            aria-label="close-icons"
            onClick={onClose}
            className="flex ml-auto mt-[-8px] mr-[-8px] cursor-pointer"
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
          </button>
          <div className="review-modal-container flex flex-col gap-[16px] mt-[-8px]">
            <div>
              <div className="para-lg font-semibold font-farro">
                {popupData.header}
              </div>
              <div className="small mt-[4px]">{popupData.description}</div>
            </div>
            {popupData.showList && (
              <div className="flex flex-col gap-[16px]">
                <button
                  type="button"
                  className="btn btn-medium btn-primary font-semibold w-full flex items-center justify-center gap-[6px]"
                >
                  Add your new favourite
                </button>
                <div className="overflow-y-auto scrollbar-hidden max-h-[300px]">
                  {shortList.map((item, index) => (
                    <div
                      className="py-[12px] border-t border-neutral200"
                      key={index}
                    >
                      <CheckboxComponent
                        title={""}
                        description={item.description}
                        descriptionStyle={"para"}
                        id={`checkbox-${index}`}
                        key={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!popupData.showList && (
              <button
                type="button"
                className="btn btn-medium btn-primary font-semibold w-full flex items-center justify-center gap-[6px]"
              >
                Yes, continue
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritesPopup;

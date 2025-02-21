import React from "react";

const FeaturedSkeleton = () => {
  return (
    <>
      <div className="bg-neutral-100 rounded-[8px] p-[16px] flex flex-col gap-[24px] my-[20px] md:flex-row lg:p-[24px]">
        <div className="flex flex-col gap-[8px] w-full order-2 lg:order-1">
          <div className="skeleton skeleton-square-img skeleton-text-animated !w-[64px] !h-[64px] p-[4px] !rounded-[4px] bg-white shadow-custom-4 hidden lg:block"></div>
          <div className="skeleton skeleton-text-animated heading !w-[10%]"></div>
          <div className="skeleton skeleton-text-animated large_heading !w-[60%]"></div>
          <div className="skeleton skeleton-text-animated descrip"></div>
          <div className="flex items-center gap-[8px] text-grey-50 small">
            <div className="flex items-center gap-[4px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                  fill="#d4d4d4"
                />
              </svg>
            </div>
            <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
          </div>
          <div className="flex items-center gap-[4px] text-white font-semibold underline">
            <div className="skeleton skeleton-text-animated heading !w-[15%]"></div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                fill="#d4d4d4"
              />
            </svg>
          </div>
        </div>
        <div className="w-full shrink-0 flex self-center  rounded-[8px] overflow-hidden relative order-1 md:w-[310px] md:h-[158px] lg:w-[391px] lg:h-[200px] lg:order-2">
          <div className="bg-neutral-300 w-full relative !rounded-[8px] overflow-hidden flex justify-center"></div>
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer">
            <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[52px] !h-[52px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSkeleton;

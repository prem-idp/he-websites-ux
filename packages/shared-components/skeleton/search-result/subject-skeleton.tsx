import React from "react";

const SubjectSkeleton = () => {
  return (
    <>
      {/* skeleton */}
      <div className="mx-[16px] py-[24px] border-t border-grey-300 md:mx-[32px]">
      <div className="flex flex-col gap-[24px] pt-[24px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-para-lg font-semibold">
            <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
          </div>
          <div className="x-small font-semibold text-black uppercase">
            <div className="skeleton skeleton-text-animated descrip !w-[15%]"></div>
          </div>
          <div className="flex gap-[8px]">
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <div className="text-para-lg font-semibold">
            <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
          </div>
          <div className="x-small font-semibold text-black uppercase">
            <div className="skeleton skeleton-text-animated descrip !w-[15%]"></div>
          </div>
          <div className="flex gap-[8px]">
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-para-lg font-semibold">
            <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
          </div>
          <div className="x-small font-semibold text-black uppercase">
            <div className="skeleton skeleton-text-animated descrip !w-[15%]"></div>
          </div>
          <div className="flex flex-wrap gap-[8px]">
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
            <div className="skeleton skeleton_btn skeleton-text-animated !w-[8%]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <div className="text-para-lg font-semibold">
              <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
            </div>
            <div className="x-small font-semibold text-black uppercase">
              <div className="skeleton skeleton-text-animated descrip !w-[25%]"></div>
            </div>
          </div>
          <div className="bg-white rounded-[22px] p-[11px_12px] border bg-neutral-300 md:p-[9px_12px]">
            <div className="flex item-center gap-[12px] relative">
              <div className="skeleton skeleton-square-img skeleton-text-animated !m-0 !w-[24px] !h-[24px] !rounded-none"></div>

              <input
                type="text"
                className="w-full focus:outline-none small text-black placeholder:text-gray-500"
                aria-label="enter keyword"
              />
            </div>
          </div>
          <div className="relative max-h-[255px] overflow-y-auto custom-scrollbar-2">
            <div className="flex flex-col gap-[12px]">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index + 1}
                  className="flex items-center gap-[4px] text-blue-400 small font-semibold"
                >
                  <div className="skeleton skeleton-text-animated descrip !w-[30%]"></div>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
                      fill="#d4d4d4"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* skeleton */}
    </>
  );
};

export default SubjectSkeleton;

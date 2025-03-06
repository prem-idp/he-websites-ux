import React from 'react'

const GradeBannerSkeleton = () => {
  return (
   <>
<div className="bg-neutral-100 p-[16px] mb-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px] grow">
              <div className="skeleton-text-animated text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <div className="skeleton skeleton-square-img skeleton-text-animated !w-[22px] !h-[22px] !rounded-none"></div>
              </div>
              <div className="flex flex-col gap-[4px] grow">
                <div className="skeleton skeleton-text-animated large_heading !w-[20%]"></div>
                <div className="skeleton skeleton-text-animated !w-[70%]"></div>
              </div>
            </div>
            <div className="skeleton skeleton_btn flex items-center justify-center self-center gap-[8px] btn   px-[20px] py-[10px] w-full lg:w-fit">
              <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[20px] !rounded-none"></div>
              <div className="skeleton skeleton-text-animated descrip"></div>
            </div>
          </div>
   </>
  )
}

export default GradeBannerSkeleton;
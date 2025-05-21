import React from 'react'

const CtaBannerSkeleton = () => {
    return (
        <div className="px-[16px] md:px-[20px] lg:px-0">
            <div
                className={`bg-neutral-100 p-[16px] md:py-[0] gap-[20px] md:gap-[0]  md:px-[20px] rounded-[8px] flex md:flex-row flex-col-reverse justify-between items-center !m-0`}
            >
                <div className="flex flex-col gap-[16px] py-[0] md:py-[24px] !m-0 grow">
                    <div className="text-grey300 flex flex-col gap-[4px]">
                            <div className="skeleton skeleton-text-animated large_heading !w-[30%]"></div>
                            <div className="skeleton skeleton-text-animated descrip !w-[60%]"></div>
                    </div>

                    <div
                        className="flex gap-[6px] items-center skeleton skeleton_btn skeleton-text-animated rtfcustom-link px-[20px] py-[10px] !w-fit !no-underline"
                    >
                        <div className="skeleton skeleton-text-animated descrip"></div>

                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999"
                                stroke="#d4d4d4"
                                strokeWidth="1.67"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <span className="md:min-w-[219px] w-full md:w-auto flex justify-center">
                         <div className="skeleton skeleton-square-img skeleton-text-animated !rounded-[0_50%_0_50%] !w-[120px] !h-[125px]"></div>
                        </span>
            </div>
        </div>
    )
}

export default CtaBannerSkeleton
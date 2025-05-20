import React from 'react'
import PopularCardSkeleton from './popular-card-skeleton'

const PopularSubjectSkeleton = () => {
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                <div className="h5 md:text-heading5 font-bold font-farro">
                    <div className="skeleton skeleton-text-animated large_heading !w-[50%]"></div>
                </div>
                <div className="text-para-lg font-semibold"><div className="skeleton skeleton-text-animated heading !w-[20%]"></div>
                </div>
            </div>
            <PopularCardSkeleton />
            <div className="flex justify-center mt-[4px]">
                <a
                    href="#"
                    className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
                >
                    <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                    <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
                            stroke="#d4d4d4"
                            strokeWidth="1.48148"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default PopularSubjectSkeleton
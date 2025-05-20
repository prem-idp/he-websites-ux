import React from 'react'
import AdvertbannercardSkeleton from './advertbannercard-skeleton'

const OpendaysvirtualadvertSkeleton = ({
    advertData,
    title,
    istitleVisible = true,
    width,
}: any) => {
    return (
        <div className="advert-container">
            <div className="advert-card-container flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                {istitleVisible && (
                    <div className="skeleton skeleton-text-animated page_heading !w-[50%]"></div>
                )}
                <div className="advert-card-inner">
                    <div className="flex flex-col lg:flex-row gap-[16px]">
                        {advertData?.map((item: any, index: number) => (
                            <> <AdvertbannercardSkeleton
                                {...item}
                                keyIndex={index}
                                dataLength={advertData.length}
                            />
                            </>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-[4px]">
                    <a
                        href="#"
                        className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
                    >
                        <div className="skeleton skeleton-text-animated descrip !w-[150px]"></div>
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
        </div>
    )
}

export default OpendaysvirtualadvertSkeleton
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const AdvertbannercardSkeleton = ({
    keyIndex,
    tagline,
    title,
    dataLength,
    description,
    buttonName,
    bannerSrc,
    bgColor,
}: any) => {
    return (
        <>
            <div className={`flex flex-1 ${bgColor} rounded-[8px] overflow-hidden`}>
                <div className="hidden md:flex min-w-[130px] max-w-[130px] !h-[188px] skeleton skeleton-text-animated !m-0 !rounded-[8px_0_0_8px]">
                </div>
                <div className="flex flex-col flex-1 gap-[16px] p-[16px]">
                    <div className="text-grey300 flex flex-col gap-[4px]">
                        <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                        <div className="skeleton skeleton-text-animated page_heading"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>

                    </div>
                    <Link
                        href="#"
                        className={` ${dataLength <= 1 ? "lg:w-fit" : "lg:w-full"} flex gap-[8px] justify-center items-center rtfcustom-link hover:no-underline px-[20px] py-[10px] !no-underline skeleton skeleton_btn skeleton-text-animated`}
                    >
                        <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

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
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AdvertbannercardSkeleton
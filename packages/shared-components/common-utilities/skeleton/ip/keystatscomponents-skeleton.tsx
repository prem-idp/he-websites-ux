import React from 'react'

import KeystaatscardSkeleton from "@packages/shared-components/common-utilities/skeleton/ip/keystaatscard-skeleton";
const KeystatscomponentsSkeleton = ({ keyStatsInnerData }: any) => {

    return (
        <>
            <div className="keystats-container">
                <div className="keystats-inner-card flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                    <div className="skeleton skeleton-text-animated large_heading !w-[30%]"></div>
                    <KeystaatscardSkeleton />
                    {keyStatsInnerData && (
                        <>
                            <div className="keystats-inner-row">
                                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(440px,_1fr))] justify-between gap-[20px] w-full *:text-small *:text-grey300">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <div className="w-full flex flex-col justify-between gap-[4px]">
                                            <div className="*:flex *:flex-col gap-[16px] *:text-grey300 *:small flex items-center justify-between">
                                                <div className="items-start">
                                                    <div className="skeleton skeleton-text-animated page_heading !w-[30%]"></div>
                                                    <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                                                </div>
                                                <div className="items-end">
                                                    <div className="skeleton skeleton-text-animated page_heading !w-[30%]"></div>
                                                    <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                                                </div>
                                            </div>
                                            <div className="skeleton skeleton-text-animated descrip"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default KeystatscomponentsSkeleton
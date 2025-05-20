import React from 'react'

const KeystaatscardSkeleton = () => {
    return (
        <div className="keystats-inner-row flex flex-col md:flex-row gap-[20px]">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    className="course-highlight__option flex flex-1 items-center gap-[16px] bg-neutral-100 p-[16px] rounded-[8px]"
                >
                    <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[48px] !h-[48px]"></div>
                    <div className="flex flex-col gap-[4px] *:text-white grow">
                        <div className="text-x-small font-semibold line-clamp-2 uppercase">
                            <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="h3"><div className="skeleton skeleton-text-animated large_heading !w-[30%]"></div>
                        </div>
                        <div className="text-small font-normal line-clamp-2">
                            <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KeystaatscardSkeleton
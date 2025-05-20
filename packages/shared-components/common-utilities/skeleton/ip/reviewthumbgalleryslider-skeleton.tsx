import React from 'react'
import Image from "next/image";


const ReviewthumbgallerysliderSkeleton = () => {
    const thumbItems = [
        { type: "image", src: "/static/assets/images/course-details/Frame_9350.jpg" },
        { type: "image", src: "/static/assets/images/course-details/Frame_9351.jpg" },
        { type: "video", src: "/static/assets/images/course-details/Frame_9352.jpg" },
        { type: "image", src: "/static/assets/images/course-details/Frame_9353.jpg" },
        { type: "video", src: "/static/assets/images/course-details/Frame_9354.jpg" },
    ];
    return (
        <div className="max-w-lg w-full lg:w-[907px] mx-auto md:px-[20px] lg:px-0">
            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[907px] !h-[581px] !rounded-none"></div>
            <div className='flex gap-[4px] relative'>
                {thumbItems.map((item, index) => (
                    <div>
                        {item.type === "image" ? (
                            <>
                                <div className='bg-neutral-100 !w-[178px] !h-[94px]'></div>
                            </>
                        ) : (
                            <>
                                <button className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer">
                                    <Image alt="video_play_icon" loading="lazy" width="52" height="52" decoding="async" data-nimg="1" src="/static/assets/icons/video_play_icon.svg" /></button>
                                <div className='bg-neutral-100 !w-[178px] !h-[94px]'></div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewthumbgallerysliderSkeleton
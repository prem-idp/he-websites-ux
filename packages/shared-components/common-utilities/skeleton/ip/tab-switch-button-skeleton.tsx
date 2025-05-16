import React from 'react'

const TabSwitchButtonSkeleton = () => {
    return (
        <section className="bg-neutral-100 border-b border-grey-200 overflow-x-auto snap-x snap-mandatory px-[16px] py-[8px] md:px-[20px] xl:px-0 lg:overflow-hidden">
            <div className="max-w-container mx-auto">
                <div className="flex gap-[8px] whitespace-nowrap lg:flex-wrap">
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[80px] !min-w-[108px]"></div>
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[80px] !min-w-[108px]"></div>
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[80px] !min-w-[108px]"></div>
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[80px] !min-w-[108px]"></div>
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[80px] !min-w-[108px]"></div>
                </div>
            </div>
        </section>
    )
}

export default TabSwitchButtonSkeleton
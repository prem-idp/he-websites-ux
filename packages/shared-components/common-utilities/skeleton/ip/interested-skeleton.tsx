import React from 'react'

const InterestedSkeleton = () => {
    return (
        <section className="bg-neutral-100 py-[12px]">
            <div className="text-black small flex item-center justify-center gap-[4px]">
                <div className="skeleton skeleton-text-animated descrip !w-[120px]"></div>
                <div className="relative">
                    <button
                        className="flex items-center gap-[4px] text-primary-500 underline"
                    >
                        <div className="skeleton skeleton-text-animated descrip !w-[90px]"></div>
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 8.5L10 13.5L5 8.5"
                                stroke="#d4d4d4"
                                strokeWidth="1.67"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="skeleton skeleton-text-animated descrip !w-[65px]"></div>
            </div>
        </section>
    )
}

export default InterestedSkeleton
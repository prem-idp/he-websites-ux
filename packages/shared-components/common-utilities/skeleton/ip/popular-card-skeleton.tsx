import React from 'react'

const PopularCardSkeleton = () => {
    return (
        <>

            <div className='flex gap-[8px]'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        className={`bg-neutral-100 flex shrink-0 rounded-[8px] w-[175px] h-[174px] p-[12px]`}
                    >
                        <div className="flex flex-col gap-[32px] justify-between w-full h-full">
                            <div className="small font-semibold text-grey900"><div className="skeleton skeleton-text-animated descrip"></div>
                                <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                            </div>
                            <div
                                className={`bg-neutral-200 size-[48px] rounded-[0_24px_0_24px] flex items-center justify-center self-end`}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                                        fill="#d4d4d4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default PopularCardSkeleton
import React from 'react'
import { degreeSubjectData, degreeSubjectTab } from "@packages/constants/constants";

const DegreeSubjectSkeleton = () => {
    return (
        <section className='bg-white px-[16px] py-[40px] md:px-[20px] md:py-[64px] xl:px-[0]'>
            <div className='max-w-container mx-auto'>
                <div className='flex flex-col gap-[24px] lg:gap-[32px]'>
                    <div>
                        <div className='text-heading3 font-farro font-bold md:text-heading2 mb-[4px]'>
                            <div className="skeleton skeleton-text-animated large_heading !w-[30%]"></div>
                        </div>
                        <div className="flex gap-[8px] whitespace-nowrap lg:flex-wrap">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div className="skeleton skeleton_btn skeleton-text-animated !w-[60px] !min-w-[40px]"></div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                        {degreeSubjectData.map((item, index) => (
                            <div className='flex flex-col border border-grey-200 rounded-[8px] overflow-hidden md:flex-row' key={index}>
                                <div className='bg-neutral-100 md:w-[232px] lg:w-[392px] shrink-0'>
                                    <div className="skeleton skeleton-square-img skeleton-text-animated !w-[392px] !h-[220px] !rounded-none !m-0"></div>
                                </div>
                                <div className='flex flex-col gap-[16px] border-l border-grey-200 p-[16px] md:p-[24px] grow'>
                                    <div className='text-heading6 font-farro font-bold'>
                                        <div className="skeleton skeleton-text-animated page_heading"></div></div>
                                    <div className="relative small">
                                        <div className="inline text-grey300 line-clamp-2 break-words">
                                            <div className="skeleton skeleton-text-animated descrip"></div>
                                            <div className="skeleton skeleton-text-animated descrip"></div>
                                        </div>
                                    </div>
                                    <div className='text-grey500 x-small'>
                                        <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
                                    </div>                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[8px] w-full'>
                                        {item.subjectIncludes?.map((subitem, index) => (
                                            <li key={index}>
                                                <div className='w-full flex item-center justify-between gap-[4px] p-[12px_16px] border border-grey-200 rounded-[4px] bg-white transition-all'>
                                                    <span className='font-semibold small gap-[4px] md:line-clamp-1'>
                                                        <div className="skeleton skeleton-text-animated descrip !w-[200px]"></div>
                                                    </span>
                                                    <span className='w-[24px] self-center'>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 7L15 12L10 17" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className='btn btn-primary-outlineskeleton skeleton_btn skeleton-text-animated flex items-center justify-center gap-[6px] small'>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                                                fill="#d4d4d4"
                                            />
                                        </svg>
                                        <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DegreeSubjectSkeleton
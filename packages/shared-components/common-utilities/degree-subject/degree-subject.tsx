import React from 'react'
import { degreeSubjectData, degreeSubjectTab, subjectIncludes } from "@packages/constants/constants";
import Paginations from '../paginations/paginations';
import Image from 'next/image';
import Link from 'next/link';

const DegreeSubject = () => {
    return (
        <section className='bg-white px-[16px] py-[40px] md:px-[20px] md:py-[64px] xl:px-[0]'>
            <div className='max-w-container mx-auto'>
                <div className='flex flex-col gap-[24px] lg:gap-[32px]'>
                    <div>
                        <div className='text-heading3 font-farro font-bold md:text-heading2 mb-[4px]'>Degree subject areas</div>
                        <div className="flex gap-[8px] whitespace-nowrap lg:flex-wrap">
                            {degreeSubjectTab.map((item, index) => (
                                <a href="#" className={`btn btn-black-outline ${item.isActive ? "bg-grey300 text-white" : ""}`} key={index}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                    {degreeSubjectData.map((item, index) => (
                        <div className='flex flex-col border border-grey-200 rounded-[8px] md:flex-row' key={index}>
                            <div className='bg-blue-50 md:w-[232px] lg:w-[392px] shrink-0'>
                                <Image src={item.src} alt='Degree Subject' width={392} height={220} className='rounded-[8px_8px_0_0] w-[343px] h-[193px] md:w-[232px] md:h-[130px] lg:w-[392px] lg:h-[220px] md:rounded-[8px_0_0_0]' />
                            </div>
                            <div className='flex flex-col gap-[16px] border-l border-grey-200 p-[24px]'>
                                <div className='text-heading6 font-farro font-bold'>{item.title}</div>
                                <div className="relative small"><div className="inline text-grey300 line-clamp-2 break-words">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar sem eget gravida. Nam molestie dignissim ante vitae ultricies. Vestibulum purus ero. Lorem ipsum dolor sit amet, consectetur
                                    <div className="inline">
                                        <span>... </span>
                                        <span className="text-blue-400 cursor-pointer font-semibold hover:underline">Read subject guide</span>
                                    </div>
                                </div>
                                </div>
                                <div className='text-grey500 x-small'>SUBJECT INCLUDES</div>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[8px] w-full'>
                                    {item.subjectIncludes?.map((subitem, index) => (
                                        <li key={index}>
                                            <Link href='' title='' className='w-full flex item-center justify-between gap-[4px] p-[12px_16px] border border-grey-200 hover:border-primary-400 rounded-[4px] bg-white hover:bg-primary-50 transition-all'>
                                                <span className='font-semibold small gap-[4px] md:line-clamp-1'>
                                                    {subitem.title}
                                                </span>
                                                <span className='w-[24px] self-center'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 7L15 12L10 17" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <button className='btn btn-primary-outline flex items-center justify-center gap-[6px] group small'>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary-400 group-hover:text-white"     >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    View more
                                </button>
                            </div>
                        </div>
                    ))}
                    </div>
                    <Paginations removeSpace/>
                </div>
            </div>
        </section>
    )
}

export default DegreeSubject
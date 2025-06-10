import React from 'react'
import { popularDegree  } from "@packages/constants/constants";
import Link from 'next/link';

const PopularDegree = () => {
    return (
        <section className='bg-grey-50 px-[16px] py-[40px] md:px-[20px] md:py-[64px] xl:px-[0]'>
            <div className='max-w-container mx-auto'>
                <div className='flex flex-col gap-[32px]'>
                    <div className='text-heading3 font-farro font-bold md:text-heading2'>Popular degree subjects</div>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px] w-full'>
                        {popularDegree.map((item, index) => (
                            <li key={index}>
                                <Link href='' title='' className='w-full flex item-center justify-between gap-[4px] p-[12px_16px] border border-grey-200 hover:border-primary-400 rounded-[4px] bg-white hover:bg-primary-50 transition-all'>
                                    <span className='font-semibold small gap-[4px] md:line-clamp-1'>
                                        {item.title}
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
                </div>
            </div>
        </section>
    )
}

export default PopularDegree
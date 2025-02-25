import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Courses { name: string, url: string }

const Similarcoursecard = ({ similarCourses }: { similarCourses: Courses[] }) => {
    return (
        <div className='articlelink-card flex flex-col gap-[24px]'>
            <div className='flex flex-col gap-[8px]'>
                {/* <div className='para-lg font-semibold'>Subheading</div> */}
                <ul className='grid grid-cols-1 lg:grid-cols-3 gap-[8px] w-full'>
                    {similarCourses.map((course) => <li>
                        <Link href={course?.url} title='' className='w-full flex item-center justify-between gap-[4px] p-[12px_16px] border border-grey-200 hover:border-primary-400 rounded-[4px] bg-white hover:bg-primary-50 transition-all'>
                            <span className='font-semibold small gap-[4px] md:line-clamp-1'>
                                {course?.name}
                            </span>
                            <span className='w-[24px] self-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Similarcoursecard;
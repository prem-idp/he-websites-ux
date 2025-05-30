import Link from 'next/link'
import React from 'react'

const Articlesnippetcomponents = () => {
    return (
        <div className='articlesnippet-container bg-white'>
            <div className="max-w-container mx-auto">
                <div className='articlesnippet-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px] md:py-[64px]'>
                    <div className='h5'>What will you study?
                    </div>
                    <div className='flex flex-col gap-[24px] w-full lg:w-[calc(100%_-_289px)]'>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex flex-col gap-[24px]'>
                                <div> <p className='para font-normal'>
                                    With loads of unis and undergraduate courses in the UK, finding your perfect course can be a hassle. Luckily, we've got plenty of ways to help you in your search to find a university course.
                                </p>
                                    <ul className="list-disc flex flex-col gap-[16px] pl-[26px] line-clamp-1">
                                        <li>Know what sort of course you want? Pop it into the search bar up there and check out all the unis across the count...</li>
                                    </ul>
                                </div>
                            </div>
                            <button className='w-fit small font-semibold text-primary-400 hover:underline cursor-pointer'>+ Read more</button>
                        </div>
                        <button type='button' className='btn btn-primary-outline group flex items-center justify-center gap-[8px] w-fit'>
                            Label
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className='group-hover:stroke-white'
                                    d="M12.2797 4.55566L17.7241 10.0001M17.7241 10.0001L12.2797 15.4446M17.7241 10.0001L3.72412 10.0001" stroke="#4664dc" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articlesnippetcomponents
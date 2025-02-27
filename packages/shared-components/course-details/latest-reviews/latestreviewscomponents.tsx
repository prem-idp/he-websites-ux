'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Reviewscomponents from '@/app/home/reviews/reviewscomponents'
// import Reviewslidercomponents from '@/app/components/slider/reviewslidercomponents'
import Reviewscomponents from '@packages/shared-components/common-utilities/slider/reviews/reviewscomponents'
import Reviewslidercomponents from '@packages/shared-components/common-utilities/slider/reviewslidercomponents'

import { useState } from 'react'
import Subjectmodalcomponents from '@packages/shared-components/course-details/Modal/subjectmodalcomponents';
const Latestreviewscomponents = () => {

  const [subjectmodal,setSubjectmodal]=useState(false);

  return (
    <>
    {subjectmodal && <Subjectmodalcomponents/>}
      <div className='latest-reviews-container'> 
        <div className="max-w-container mx-auto">
            <div className='latest-reviews-card-container flex flex-col lg:flex-row justify-between gap-[20px] py-[40px]'>
                <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>Latest reviews</div>
                <div className='flex flex-col gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>
                  <div className='px-[16px] md:px-[20px] xl:px-[0]'>
                    <div className='card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>                  
                      <div className='card-header flex flex-col gap-[8px]'>
                        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                          <div className='h5 text-grey300'>How animation students rated:</div>
                          <div className='relative group flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer pb-[10px] mb-[-10px]'>University Rating 
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {/* -- */}
                             <div className='hidden z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left:0 md:right-0 top-[32px] w-[326px] md:w-[342px] group-hover:block'>
                              <div className='w-fit px-[8px] py-[4px] x-small text-grey-500 bg-grey-100 font-bold rounded-[4px] m-[16px]'>RATING TYPE</div>
                                <ul className='max-h-[280px] overflow-y-auto custom-scrollbar-2 overflow-hidden'>
                                    <li>
                                      <Link
                                        href="#"
                                        className="block small text-grey300 font-normal px-[16px] py-[12px] underline  hover:underline"
                                      >
                                        University rating
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="block small text-grey300  font-normal px-[16px] py-[12px]  hover:underline"
                                        href="#"
                                      >
                                        X rating
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                        href="#"
                                      >
                                        X rating
                                      </Link>
                                    </li> 
                                    <li>
                                      <Link
                                        className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                        href="#"
                                      >
                                        X rating
                                      </Link>
                                    </li> 
                                    <li>
                                      <Link
                                        className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                        href="#"
                                      >
                                        X rating
                                      </Link>
                                    </li> 
                                </ul>
                              </div>                            
                            {/* -- */}     
                          </div>
                        </div>
                        <div className='rating-pod flex items-center gap-[8px]'>
                          <div className='rating-card flex items-center gap-[4px]'>
                                <span className='reviewLink para text-grey300'>Overall rating</span>
                                <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                <span className='font-normal small text-grey300'>4.6</span>
                            </div>            
                        </div>
                      </div>
                      {/* -- */}
                      <div className='w-full flex flex-col gap-[8px]'>
                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                          <div className='w-fit md:w-[56px] order-1 md:order-none small text-grey300'>5 stars</div>                      
                          <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[90%]"></div>
                          </div>
                          <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>100%</div> 
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                          <div className='w-fit md:w-[56px] order-1 md:order-none small text-grey300'>4 stars</div>                      
                          <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[20%]"></div>
                          </div>
                          <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>20%</div> 
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                          <div className='w-fit md:w-[56px] order-1 md:order-none small text-grey300'>3 stars</div>                      
                          <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[7%]"></div>
                          </div>
                          <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>70%</div> 
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                          <div className='w-fit md:w-[56px] order-1 md:order-none small text-grey300'>2 stars</div>                      
                          <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[2%]"></div>
                          </div>
                          <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>2%</div> 
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                          <div className='w-fit md:w-[56px] order-1 md:order-none small text-grey300'>1 stars</div>                      
                          <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[1%]"></div>
                          </div>
                          <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>1%</div> 
                        </div>                      
                      </div>
                    </div>
                  </div>  
                  {/* -- */}
                  <div className='latest-reviews flex flex-col gap-[16px]'>
                    <div className='card-header flex flex-col gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                        <div className='h5 text-grey300'>Latest animation reviews</div>
                        <div onClick={()=>setSubjectmodal((prev)=>!prev)} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Art & Design 
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Reviewslidercomponents />
                    <div className='flex justify-center mt-[4px]'>
                      <a href='#' className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                        Read all reviews
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div> 
                  </div>
                  {/* -- */}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Latestreviewscomponents
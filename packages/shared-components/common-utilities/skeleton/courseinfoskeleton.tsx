import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reviewslidercomponents from '../slider/reviewslidercomponents'
import Reviewsliderskeleton from './reviewsliderskeleton'

const Courseinfoskeleton = () => {
  return (
    <div className='courseinfo-container' id="skiplink1"> 
        <div className="max-w-container mx-auto">
            <div className='courseinfo-card-container flex flex-col lg:flex-row justify-between gap-[20px] pb-[40px]'>
                <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'><div className="skeleton skeleton-text-animated large_heading !w-[200px]"></div></div>
                <div className='flex flex-col gap-[20px] w-full flex-1'>
                    <div className='flex flex-col items-start gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                        <div className='flex flex-col w-full gap-[4px]'>
                            <div className="skeleton skeleton-text-animated descrip !w-full"></div>
                            <div className="skeleton skeleton-text-animated descrip !w-full"></div>
                            <div className="skeleton skeleton-text-animated descrip !w-full"></div>
                        </div>
                        <div className='small font-semibold'>
                            <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                        </div>
                    </div>
                    {/* Keystats */}
                    <div className='px-[16px] md:px-[20px] xl:px-[0]'>
                      {/* keystats skeleton */}
                      <div className='keystats-container bg-grey-100 p-[24px] md:p-[32px] flex flex-col gap-[32px] rounded-[8px]'>
                            <div className='keystats-inner-row flex flex-col gap-[8px]'>
                                <div className='keystats-inner-header flex flex-col md:flex-row items-start md:items-center justify-between  gap-[16px] md:gap-[8px]'>
                                     <div className="skeleton skeleton-text-animated large_heading !w-[20%]"></div>
                                    <div className='flex items-center gap-[8px]'>
                                        <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div> 
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#fff" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='keystats-body grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
                                    <div className="course-highlight__option flex items-start gap-[8px]">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4444 9.6626H29M29 9.6626V21.2182M29 9.6626L17.4444 21.2182L11.6667 15.4404L3 24.107" stroke="#d4d4d4" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="flex flex-col flex-1 gap-[4px]">
                                        <div className="skeleton skeleton-text-animated page_heading !w-[60%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
                                    </div>
                                    </div>
                                    <div className="course-highlight__option flex items-start gap-[8px]">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.8575 21.7418C26.462 21.3462 25.9582 21.0766 25.4096 20.9669L22.0269 20.2903C20.1732 19.9196 18.2489 20.1773 16.5581 21.0227L16.1084 21.2475C14.4176 22.093 12.4933 22.3507 10.6396 21.9799L7.90268 21.4325C6.97365 21.2467 6.01323 21.5375 5.3433 22.2075M10.666 5.55029H22.0005L20.5837 6.9671V14.2942C20.5837 15.0457 20.8822 15.7665 21.4136 16.2979L28.4976 23.3819C30.2827 25.167 29.0184 28.2192 26.494 28.2192H6.17254C3.64806 28.2192 2.3838 25.167 4.16888 23.3819L11.2529 16.2979C11.7843 15.7665 12.0828 15.0457 12.0828 14.2942V6.9671L10.666 5.55029Z" stroke="#d4d4d4" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="flex flex-col flex-1 gap-[4px]">
                                        <div className="skeleton skeleton-text-animated page_heading !w-[60%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
                                    </div>
                                    </div>
                                    <div className="course-highlight__option flex items-start gap-[8px]">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3332 26.9959V18.3292C12.3332 16.7337 11.0398 15.4403 9.44428 15.4403H6.55539C4.9599 15.4403 3.6665 16.7337 3.6665 18.3292V26.9959C3.6665 28.5914 4.9599 29.8848 6.55539 29.8848H9.44428C11.0398 29.8848 12.3332 28.5914 12.3332 26.9959ZM12.3332 26.9959V12.5514C12.3332 10.9559 13.6266 9.66254 15.2221 9.66254H18.1109C19.7064 9.66254 20.9998 10.9559 20.9998 12.5514V26.9959M12.3332 26.9959C12.3332 28.5914 13.6266 29.8848 15.2221 29.8848H18.1109C19.7064 29.8848 20.9998 28.5914 20.9998 26.9959M20.9998 26.9959V6.77365C20.9998 5.17817 22.2932 3.88477 23.8887 3.88477H26.7776C28.3731 3.88477 29.6665 5.17817 29.6665 6.77365V26.9959C29.6665 28.5914 28.3731 29.8848 26.7776 29.8848H23.8887C22.2932 29.8848 20.9998 28.5914 20.9998 26.9959Z" stroke="#d4d4d4" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="flex flex-col flex-1 gap-[4px]">
                                        <div className="skeleton skeleton-text-animated page_heading !w-[60%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='keystats-inner-row flex flex-col gap-[8px]'>
                                <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
                                <div className="skeleton skeleton-text-animated large_heading !w-[20%]"></div>
                                    <div className='flex flex-col md:flex-row justify-between gap-[16px] w-full *:text-small *:text-white'>
                                    <div className='w-full flex flex-col justify-between gap-[4px]'>
                                        <div className='flex items-center justify-between'>
                                        <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[10%]"></div>
                                        </div>
                                        <div className=" progess-bar bg-grey-200 rounded-[8px] h-[8px] overflow-hidden">
                                            <div className="progess-bar__line transition-all duration-[3s] bg-grey-300 h-[8px] w-[80%]"></div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col justify-between gap-[4px]'>
                                        <div className='flex items-center justify-between'>
                                        <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[10%]"></div>
                                        </div>
                                        <div className=" progess-bar bg-grey-200 rounded-[8px] h-[8px] overflow-hidden">
                                            <div className="progess-bar__line transition-all duration-[3s] bg-grey-300 h-[8px] w-[80%]"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='keystats-inner-row flex flex-col gap-[8px]'>
                                <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
                                <div className="skeleton skeleton-text-animated large_heading !w-[20%]"></div>
                                </div>
                                <div className='keystats-body grid grid-cols-1 md:grid-cols-2 gap-[16px]'>
                                    <div className="course-highlight__option flex items-start">
                                    <div className="flex flex-col flex-1 gap-[4px]">
                                        <div className="skeleton skeleton-text-animated heading !w-[70%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[40%]"></div>
                                    </div>
                                    </div>
                                    <div className="course-highlight__option flex items-start">
                                    <div className="flex flex-col gap-[4px] flex-1">
                                        <div className="skeleton skeleton-text-animated heading !w-[60%]"></div>
                                        <div className="skeleton skeleton-text-animated descrip !w-[40%]"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skeleton skeleton-text-animated heading !w-[30%]"></div>
                            </div>
                      {/* keystats skeleton */}
                    </div>
                    {/* -- */}
                    <div className='latest-reviews flex flex-col gap-[16px] mt-[8px] '>
                      {/* <div className='card-header flex flex-col gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                        <div className='h5'><div className="skeleton skeleton-text-animated large_heading !w-[200px]"></div></div>
                        </div>
                      </div> */}
                      {/* review section */}
                      <div className="reviews-container bg-neutral-50">
                        <Reviewsliderskeleton />
                       </div>
                       {/* review section */}
                  {/* -- */}                    
                </div>

            </div>
        </div>
      </div>
    </div>  
  )
}

export default Courseinfoskeleton
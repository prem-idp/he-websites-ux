'use client'

import React from 'react'
import Keystatscomponents from '../keystats/keystatscomponents'
// import Reviewslidercomponents from '@/app/components/slider/reviewslidercomponents'
import Reviewslidercomponents from '@packages/shared-components/common-utilities/slider/reviewslidercomponents'
const Courseinfocomponents = () => {
  return (
    <>
      <div className='courseinfo-container'> 
        <div className="max-w-container mx-auto">
            <div className='courseinfo-card-container flex flex-col lg:flex-row justify-between gap-[20px] pb-[40px]'>
                <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>Course info</div>
                <div className='flex flex-col gap-[20px] w-full lg:w-[calc(100%_-_309px)]'>
                    <div className='flex flex-col items-start gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                        <div className='rtf-innerstyle flex flec-col gap-[16px]'>
                          <p className='para font-normal line-clamp-3'>Our LLB Law degree will give you the opportunity to study the foundational areas of law, alongside other key areas of law, giving a broader understanding of the subject.Through your studies, you will develop an in-depth understanding of law, Legal Process, Contract, Criminal, Tort, Employment Law and Business Law.You will enhance your ability to engage in critical academic study and research by way of legal research and a dissertation, helping you to develop the professional and reflective ...</p>                        
                        </div>
                        <div className='small font-semibold text-primary-400 hover:underline cursor-pointer'>+ Read more</div>
                    </div>
                    {/* Keystats */}
                    <div className='px-[16px] md:px-[20px] xl:px-[0]'>
                      <Keystatscomponents />
                    </div>
                    {/* -- */}
                    <div className='latest-reviews flex flex-col gap-[16px] mt-[8px] '>
                      <div className='card-header flex flex-col gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                          <div className='h5 text-black'>What students say</div>
                        </div>
                      </div>
                      {/* <Reviewslidercomponents onOpenReviewModal={onOpenReviewModal} /> */}
                      <div className='flex justify-center mt-[4px]'>
                      <a href='#' className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                        View more
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

export default Courseinfocomponents
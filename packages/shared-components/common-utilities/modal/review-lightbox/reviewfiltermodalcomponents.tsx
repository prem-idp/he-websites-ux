"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { AnimatePresence, motion } from "motion/react"
import Paginations from '../../paginations/paginations';
import Noreviewmatchcomponents from '@/app/course-details/no-reviews-match/noreviewmatchcomponents';

const Reviewfiltermodalcomponents = ({ isOpen, onClose, onOpenReviewGalleryModal }:any) => {
  return (
    <>
        <div onClick={onClose} className={`${isOpen ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[7]`}>
        </div>
        <div className={`${isOpen ? "translate-x-0 opacity-[1]" : "translate-x-full opacity-0"} transition-all duration-300 modal modal-container shadow-custom-6 w-full lg:w-[789px] fixed top-0 right-0 z-[8]`}>                         
            <div className='modal-box p-[16px_18px_16px_16px]  md:p-[20px_16px_20px_20px] lg:p-[32px_8px_24px_32px]  bg-white relative z-0 right-0 md:top-[44px] lg:top-0 h-[100vh]'>
                <div onClick={onClose} className='modal_close w-[44px] h-[44px] md:bg-primary-400 md:hover:bg-primary-500 flex items-center justify-center absolute top-0 md:top-[-44px] lg:top-0 right-0 lg:right-auto left-auto lg:left-[-44px] z-[1] cursor-pointer'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='stroke-grey-600 md:stroke-white' d="M1 13L13 1M1 1L13 13"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='review-modal-container flex flex-col gap-[16px]'>                    
                    <div className='review-modal-card flex flex-col gap-[16px] md:gap-[24px] pr-[16px] custom-scrollbar-2 overflow-y-auto h-[calc(100vh-64px)] md:h-[calc(100vh-108px)] lg:h-[calc(100vh-64px)]'>
                        <div className='card-header flex flex-col gap-[4px] md:gap-[8px]'>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-[4px]'>
                                <span className='h5 text-grey300'>Student reviews: business</span>
                                <Link href="" className='small text-primary-400 underline hover:text-primary-500 hidden md:block'>Write a review</Link>
                            </div>
                            <p className='para font-semibold text-grey300'>University of Portsmouth</p>
                            <Link href="" className='small text-primary-400 underline hover:text-primary-400 md:hidden'>Write a review</Link>
                            <div className="tooltip w-fit group/item text-grey300 small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                            Real student experiences
                            <div className="tooltip-wrap flex-col w-[324px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] shadow-custom-12 mt-[8px] absolute top-[17px]  left-0 z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[25%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']">
                            <span className="font-semibold tooltip-head">
                            Why do we need your dummy text?
                            </span>
                            <p className="x-small">
                            We collect reviews from students online and at uni campuses to upload later. Come say hi if you see us!
                            </p>
                        </div>
                    </div>
                            
                        </div>
                        <div className='review-card flex flex-col pb-[24px] border-b border-b-grey-300'>
                            <div className='review-search flex flex-col gap-[16px] md:gap-[24px]'>
                                <div className="bg-white rounded-[26px] p-[10px_12px] border border-grey-300 hover:border-primary-500">
                                    <div className="flex item-center gap-[12px]">
                                        <Image alt="Search icon" loading="lazy" width="20" height="20" src="/assets/icons/search-result/search-black.svg" />
                                        <input type="text" className="w-full focus:outline-none small text-black placeholder:text-grey300" aria-label="Find reviews about..." placeholder="Find reviews about..." />
                                    </div>
                                </div>
                                <div className='flex gap-[8px] w-[full] md:w-[408px]'>
                                        <button type='button' className='flex  flex-1 group items-center justify-between gap-[8px] x-small font-semibold text-grey300 cursor-pointer border border-grey300 rounded-[20px] p-[8px_16px] relative'>Business 
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#333333" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            {/* -- */}
                                            <div className='hidden z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left:0 md:right-0 top-[35px] w-full group-hover:block'>
                                                <ul className='w-full max-h-[280px] overflow-y-auto custom-scrollbar-2 overflow-hidden'>
                                                    <li>
                                                        <Link
                                                            className="block small text-grey300  font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#"
                                                        >
                                                            Business XX
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#">
                                                            Business level XXX
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link
                                                            className="block small text-grey300  font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#"
                                                        >
                                                            Business XXX
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#">
                                                            Business level XX
                                                        </Link>
                                                        </li>  
                                                    </ul>
                                            </div>                            
                                            {/* -- */}  
                                        </button>
                                        <button type="button" className='flex flex-1 group items-center justify-between gap-[8px] x-small font-semibold text-grey300 cursor-pointer border border-grey300 rounded-[20px] p-[8px_16px] relative'>More Recent 
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#333333" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            {/* -- */}
                                            <div className='hidden z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left:0 md:right-0 top-[35px] w-full group-hover:block'>
                                                <ul className='w-full max-h-[280px] overflow-y-auto custom-scrollbar-2 overflow-hidden'>
                                                    <li>
                                                        <Link
                                                            className="block small text-grey300  font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#"
                                                        >
                                                            Business XXX
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#">
                                                            Business level XXX
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link
                                                            className="block small text-grey300  font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#"
                                                        >
                                                            Business XX
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                                                            href="#">
                                                            Business level XXXX
                                                        </Link>
                                                        </li>  
                                                    </ul>
                                            </div>                            
                                            {/* -- */}  
                                        </button>
                                </div>
                            </div>
                        </div>    
                        <div className='review-card pb-[24px] border-b border-b-grey-300'> 
                            <div className='rating-card flex  flex-col md:flex-row gap-[32px]'>
                                <div className='flex flex-col gap-[16px] flex-1'>
                                    <div className='card-header flex flex-col gap-[8px]'>
                                        <div className='flex items-start md:items-center justify-between gap-[8px]'>
                                            <div className='para-lg font-semibold text-grey300 '>Filter overall ratings</div>
                                            <div className='flex items-center gap-[8px] x-small font-normal text-grey300 hover:underline cursor-pointer'>Overall ratings 
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#333333" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- */}
                                    <div className='w-full flex flex-col gap-[10px]'>
                                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                                            <div className='form_check w-fit flex gap-[10px] order-1 md:order-none'>
                                                <div className="checkbox_card">
                                                    <input type="checkbox" className="form-checkbox hidden" id="rating5" />
                                                    <label htmlFor="rating5" className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-[2px] border-grey300"
                                                    >
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                                            fill="white"
                                                            stroke="white"
                                                            strokeWidth="0.666667"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        </svg>
                                                    </label>
                                                </div>
                                                <label className='x-small text-grey300' htmlFor="rating5">5 stars</label>
                                            </div>                      
                                            <div className="progess-bar flex flex-1 items-center order-3 md:order-none w-full bg-grey-100 rounded-[5px] h-[10px]">
                                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[5px] h-[10px] w-[90%]"></div>
                                            </div>
                                            <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>100%</div> 
                                        </div>
                                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                                        <div className='form_check w-fit flex gap-[10px] order-1 md:order-none'>
                                                <div className="checkbox_card">
                                                    <input type="checkbox" className="form-checkbox hidden" id="rating4" />
                                                    <label htmlFor="rating4" className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-[2px] border-grey300"
                                                    >
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                                            fill="white"
                                                            stroke="white"
                                                            strokeWidth="0.666667"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        </svg>
                                                    </label>
                                                </div>
                                                <label className='x-small text-grey300' htmlFor="rating4">4 stars</label>
                                            </div>                       
                                            <div className="progess-bar flex flex-1 items-center order-3 md:order-none w-full bg-grey-100 rounded-[5px] h-[10px]">
                                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[5px] h-[10px] w-[50%]"></div>
                                            </div>
                                            <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>50%</div> 
                                        </div>
                                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                                            <div className='form_check w-fit flex gap-[10px] order-1 md:order-none'>
                                                <div className="checkbox_card">
                                                    <input type="checkbox" className="form-checkbox hidden" id="rating3" />
                                                    <label htmlFor="rating3" className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-[2px] border-grey300"
                                                    >
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                                            fill="white"
                                                            stroke="white"
                                                            strokeWidth="0.666667"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        </svg>
                                                    </label>
                                                </div>
                                                <label className='x-small text-grey300' htmlFor="rating3">3 stars</label>
                                            </div>                       
                                            <div className="progess-bar flex flex-1 items-center order-3 md:order-none w-full bg-grey-100 rounded-[5px] h-[10px]">
                                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[5px] h-[10px] w-[70%]"></div>
                                            </div>
                                            <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>70%</div> 
                                        </div>
                                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                                            <div className='form_check w-fit flex gap-[10px] order-1 md:order-none'>
                                                <div className="checkbox_card">
                                                    <input type="checkbox" className="form-checkbox hidden" id="rating2" />
                                                    <label htmlFor="rating2" className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-[2px] border-grey300"
                                                    >
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                                            fill="white"
                                                            stroke="white"
                                                            strokeWidth="0.666667"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        </svg>
                                                    </label>
                                                </div>
                                                <label className='x-small text-grey300' htmlFor="rating2">2 stars</label>
                                            </div>                       
                                            <div className="progess-bar flex flex-1 items-center order-3 md:order-none w-full bg-grey-100 rounded-[5px] h-[10px]">
                                            <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[5px] h-[10px] w-[75%]"></div>
                                            </div>
                                            <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>75%</div> 
                                        </div>
                                        <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                                            <div className='form_check w-fit flex gap-[10px] order-1 md:order-none'>
                                                <div className="checkbox_card">
                                                    <input type="checkbox" className="form-checkbox hidden" id="rating1" />
                                                    <label htmlFor="rating1" className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-[2px] border-grey300"
                                                    >
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                                            fill="white"
                                                            stroke="white"
                                                            strokeWidth="0.666667"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        </svg>
                                                    </label>
                                                </div>
                                                <label className='x-small text-grey300' htmlFor="rating1">1 stars</label>
                                            </div>                       
                                            <div className="progess-bar flex flex-1 items-center order-3 md:order-none w-full bg-grey-100 rounded-[5px] h-[10px]">
                                                <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[5px] h-[10px] w-[75%]"></div>
                                                </div>
                                            <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>75%</div> 
                                        </div>
                                    </div>
                                    {/* -- */}
                                </div>
                                <div className='flex flex-col gap-[16px] flex-1'>
                                    <div className='card-header flex flex-col gap-[8px]'>
                                            <div className='para-lg font-semibold text-grey300'>Category rankings</div>
                                    </div>
                                    <div className='rating-pod flex flex-col gap-[10px]'>
                                        <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink x-small text-grey300">Overall rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                    <div className='flex gap-[4px]'>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                    </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink x-small text-grey300">University rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                    <div className='flex gap-[4px]'>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                    </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink x-small text-grey300">Course rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                    <div className='flex gap-[4px]'>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                    </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink x-small text-grey300">Uni location rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                    <div className='flex gap-[4px]'>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                    </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink x-small text-grey300">Uni Halls rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                    <div className='flex gap-[4px]'>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                        </svg>
                                                    </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -- container loop */}
                        <div className='review-comments-card pb-[24px] border-b border-b-grey-300'> 
                            <div className='review-comments flex flex-col md:flex-row gap-[24px]'>
                                <div className='review-comments__col w-full md:w-[160px]'>
                                    <div className=' flex flex-row md:flex-col gap-[16px] items-center'>
                                        <div className='reviewer__avatar flex items-center justify-center min-w-[80px] w-[80px] h-[80px] bg-primary-200 text-heading4 font-bold text-grey-50 uppercase rounded-[80px]'>jd</div>
                                        <div className='flex flex-col flex-1 *:text-x-small *:text-grey300 *:text-left md:*:text-center'>
                                            <div className='font-semibold'>Joan Doe</div>
                                            <p>Aged 18-24</p>
                                            <p>First gen student</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-comments__col flex-1'>
                                    <div className='flex flex-col flex-1 gap-[24px]'>
                                        <div className='flex flex-col flex-1 *:text-grey300'>
                                            <div className='x-small'>Reviewed: March 2022</div>
                                            <div className='flex flex-col gap-[4px]'>
                                                <div className='para font-semibold'>Business and Management MSc (Hons)</div>
                                                <Link className='small text-primary-400 hover:text-primary-500 hover:underline' href='#'>University of Portsmouth</Link>
                                            </div>
                                        </div>
                                        <div className='review-gallery'>
                                            <ul className='flex gap-[8px]' onClick={onOpenReviewGalleryModal}>
                                            <li className='rounded-[4px] overflow-hidden last:relative cursor-pointer'><Image src="/assets/images/course-details/Frame_9338.jpg" alt="" width={175} height={112} /></li>
                                            <li className='rounded-[4px] overflow-hidden last:relative cursor-pointer'><Image src="/assets/images/course-details/Frame_9355.jpg" alt="" width={175} height={112} /></li>
                                            <li className='rounded-[4px] overflow-hidden last:relative cursor-pointer'>
                                                <Image src="/assets/images/course-details/Frame_9356.jpg" alt="" width={175} height={112} />
                                                <div className='more-gallery flex items-center justify-center small md:para font-semibold text-white underline absolute top-0 right-0 bottom-0 left-0 bg-grey-900/75'>14+ Photos</div>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className='review-body flex flex-col gap-[16px]'>
                                            <div className='flex flex-col gap-[20px]'>
                                                {/* -- loop */}
                                                <div className='flex flex-col gap-[8px]'>
                                                    <div className='category-rank flex items-center gap-[8px]'>
                                                            <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                                            <div className='flex gap-[4px] items-center'>
                                                                <div className='flex gap-[4px]'>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                    </svg>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                    </svg>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                    </svg>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                    </svg>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                    </svg>
                                                                </div>
                                                                <span className='small text-grey300'>(4.6)</span>
                                                            </div>                                             
                                                    </div>
                                                    <p className='small text-grey300 line-clamp-3'>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                                    <ul className=' hidden flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                                            <li>Lecturers and teaching quality 5.0</li>
                                                            <li>Work placements and internships 5.0</li>
                                                            <li>Lecturers and teaching quality 5.0</li>
                                                            <li>Tutor contact time 5.0</li>
                                                            <li>course content 5.0</li>
                                                            <li>Subject facilities 5.0</li>
                                                            <li>Career prospects 1.5</li>
                                                    </ul>
                                                </div>    
                                                {/* -- loop */}
                                                <div className='w-fit underline cursor-pointer'>+ Read more</div>
                                            </div>        
                                            <div className='flex gap-[8px] items-center w-fit small text-grey300  cursor-pointer'>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.66732 15.1667H2.66732C2.3137 15.1667 1.97456 15.0262 1.72451 14.7762C1.47446 14.5261 1.33398 14.187 1.33398 13.8333V9.16668C1.33398 8.81306 1.47446 8.47392 1.72451 8.22387C1.97456 7.97382 2.3137 7.83334 2.66732 7.83334H4.66732M9.33398 6.50001V3.83334C9.33398 3.30291 9.12327 2.7942 8.7482 2.41913C8.37313 2.04406 7.86442 1.83334 7.33398 1.83334L4.66732 7.83334V15.1667H12.1873C12.5089 15.1703 12.8209 15.0576 13.0659 14.8493C13.3109 14.6411 13.4724 14.3513 13.5207 14.0333L14.4407 8.03334C14.4697 7.84225 14.4568 7.64713 14.4029 7.46151C14.349 7.27589 14.2554 7.10421 14.1286 6.95835C14.0017 6.8125 13.8447 6.69596 13.6684 6.61682C13.492 6.53768 13.3006 6.49782 13.1073 6.50001H9.33398Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span className='small text-grey300 underline'>6</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -- container loop */}
                        {/* -- container loop */}
                        <div className='review-comments-card pb-[24px] border-b border-b-grey-300'> 
                            <div className='review-comments flex flex-col md:flex-row gap-[24px]'>
                                <div className='review-comments__col w-full md:w-[160px]'>
                                    <div className=' flex flex-row md:flex-col gap-[16px] items-center'>
                                        <div className='reviewer__avatar flex items-center justify-center min-w-[80px] w-[80px] h-[80px] bg-primary-200 text-heading4 font-bold text-grey-50 uppercase rounded-[80px]'>jd</div>
                                        <div className='flex flex-col flex-1 *:text-x-small *:text-grey300 *:text-left md:*:text-center'>
                                            <div className='font-semibold'>Joan Doe</div>
                                            <p>Aged 18-24</p>
                                            <p>First gen student</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-comments__col flex-1'>
                                    <div className='flex flex-col flex-1 gap-[24px]'>
                                        <div className='flex flex-col flex-1 *:text-grey300'>
                                            <div className='x-small'>Reviewed: March 2022</div>
                                            <div className='flex flex-col gap-[4px]'>
                                                <div className='para font-semibold'>Business and Management MSc (Hons)</div>
                                                <Link className='small text-primary-400 hover:text-primary-500 hover:underline' href='#'>University of Portsmouth</Link>
                                            </div>
                                        </div>
                                        <div className='review-body flex flex-col gap-[16px]'>
                                            <div className='flex flex-col gap-[20px]'>
                                                {/* -- loop */}
                                                    <div className='flex flex-col gap-[8px]'>
                                                        <div className='category-rank flex items-center gap-[8px]'>
                                                                <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                                                <div className='flex gap-[4px] items-center'>
                                                                    <div className='flex gap-[4px]'>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                    </div>
                                                                    <span className='small text-grey300'>(4.6)</span>
                                                                </div>                                             
                                                        </div>
                                                        <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                                        <p className='small text-grey300 line-clamp-3'>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                                        <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Work placements and internships 5.0</li>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Tutor contact time 5.0</li>
                                                                <li>course content 5.0</li>
                                                                <li>Subject facilities 5.0</li>
                                                                <li>Career prospects 1.5</li>
                                                        </ul>
                                                    </div>    
                                                {/* -- loop */}
                                                {/* -- loop */}
                                                    <div className='flex flex-col gap-[8px]'>
                                                        <div className='category-rank flex items-center gap-[8px]'>
                                                                <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                                                <div className='flex gap-[4px] items-center'>
                                                                    <div className='flex gap-[4px]'>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                    </div>
                                                                    <span className='small text-grey300'>(4.6)</span>
                                                                </div>                                             
                                                        </div>
                                                        <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                                        <p className='small text-grey300 line-clamp-3'>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                                        <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Work placements and internships 5.0</li>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Tutor contact time 5.0</li>
                                                                <li>course content 5.0</li>
                                                                <li>Subject facilities 5.0</li>
                                                                <li>Career prospects 1.5</li>
                                                        </ul>
                                                    </div>    
                                                {/* -- loop */}
                                                {/* -- loop */}
                                                    <div className='flex flex-col gap-[8px]'>
                                                        <div className='category-rank flex items-center gap-[8px]'>
                                                                <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                                                <div className='flex gap-[4px] items-center'>
                                                                    <div className='flex gap-[4px]'>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                    </div>
                                                                    <span className='small text-grey300'>(4.6)</span>
                                                                </div>                                             
                                                        </div>
                                                        <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                                        <p className='small text-grey300 line-clamp-3'>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                                        <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Work placements and internships 5.0</li>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Tutor contact time 5.0</li>
                                                                <li>course content 5.0</li>
                                                                <li>Subject facilities 5.0</li>
                                                                <li>Career prospects 1.5</li>
                                                        </ul>
                                                    </div>    
                                                {/* -- loop */}
                                                {/* -- loop */}
                                                    <div className='flex flex-col gap-[8px]'>
                                                        <div className='category-rank flex items-center gap-[8px]'>
                                                                <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                                                <div className='flex gap-[4px] items-center'>
                                                                    <div className='flex gap-[4px]'>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                                        </svg>
                                                                    </div>
                                                                    <span className='small text-grey300'>(4.6)</span>
                                                                </div>                                             
                                                        </div>
                                                        <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                                        <p className='small text-grey300 line-clamp-3'>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                                        <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Work placements and internships 5.0</li>
                                                                <li>Lecturers and teaching quality 5.0</li>
                                                                <li>Tutor contact time 5.0</li>
                                                                <li>course content 5.0</li>
                                                                <li>Subject facilities 5.0</li>
                                                                <li>Career prospects 1.5</li>
                                                        </ul>
                                                    </div>    
                                                {/* -- loop */}                                                
                                                <div className='w-fit cursor-pointer underline'>- Read less</div>    
                                            </div>        
                                            <div className='flex gap-[8px] items-center w-fit small text-grey300  cursor-pointer'>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.66732 15.1667H2.66732C2.3137 15.1667 1.97456 15.0262 1.72451 14.7762C1.47446 14.5261 1.33398 14.187 1.33398 13.8333V9.16668C1.33398 8.81306 1.47446 8.47392 1.72451 8.22387C1.97456 7.97382 2.3137 7.83334 2.66732 7.83334H4.66732M9.33398 6.50001V3.83334C9.33398 3.30291 9.12327 2.7942 8.7482 2.41913C8.37313 2.04406 7.86442 1.83334 7.33398 1.83334L4.66732 7.83334V15.1667H12.1873C12.5089 15.1703 12.8209 15.0576 13.0659 14.8493C13.3109 14.6411 13.4724 14.3513 13.5207 14.0333L14.4407 8.03334C14.4697 7.84225 14.4568 7.64713 14.4029 7.46151C14.349 7.27589 14.2554 7.10421 14.1286 6.95835C14.0017 6.8125 13.8447 6.69596 13.6684 6.61682C13.492 6.53768 13.3006 6.49782 13.1073 6.50001H9.33398Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span className='small text-grey300 underline'>67</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -- container loop */}
                        {/* -- Pagination  */}
                        <Paginations />
                        {/* -- Pagination  */}
                        {/* <Noreviewmatchcomponents /> */}

                    </div>
                </div>
            </div>
       </div>
   
    </>
  )
}

export default Reviewfiltermodalcomponents;
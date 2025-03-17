"use client";
import React, { ReactElement, useState } from 'react';
import Paginations from '../../paginations/paginations';
import Link from 'next/link';
import Image from 'next/image';
import FiveStarRatings from './common/FiveStarRatings';

const ReviewFiltersComponent: React.FC = (): ReactElement => {
    return (
        <>
            <div className='review-card flex flex-col pb-[24px] border-b border-b-grey-300'>
                <div className='review-search flex flex-col gap-[16px] md:gap-[24px]'>
                    <div className="bg-white rounded-[26px] p-[10px_12px] border border-grey-300 hover:border-primary-500">
                        <div className="flex item-center gap-[12px]">
                            <Image alt="Search icon" loading="lazy" width="20" height="20" src="/static/assets/icons/search-result/search-black.svg" />
                            <input type="text" className="w-full focus:outline-none small text-black placeholder:text-grey300" aria-label="Find reviews about..." placeholder="Find reviews about..." />
                        </div>
                    </div>
                    <div className='flex gap-[8px] w-[full] md:w-[408px]'>
                        <button type='button' className='flex  flex-1 group items-center justify-between gap-[8px] x-small font-semibold text-grey300 cursor-pointer border border-grey300 rounded-[20px] p-[8px_16px] relative'>Business
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#333333" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

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
                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#333333" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
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

                        </button>
                    </div>
                </div>
            </div>

            {/* Star rating filter */}
            <div className='review-card pb-[24px] border-b border-b-grey-300'>
                <div className='rating-card flex  flex-col md:flex-row gap-[32px]'>
                    <div className='flex flex-col gap-[16px] flex-1'>
                        <div className='card-header flex flex-col gap-[8px]'>
                            <div className='flex items-start md:items-center justify-between gap-[8px]'>
                                <div className='para-lg font-semibold text-grey300 '>Filter overall ratings</div>
                                <div className='flex items-center gap-[8px] x-small font-normal text-grey300 hover:underline cursor-pointer'>Overall ratings
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#333333" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-[10px]'>
                            {[1, 2, 3, 4, 5].map((_, idx) => <div key={idx} className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
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
                                    <label className='x-small text-grey300' htmlFor="rating1">{5 - idx} stars</label>
                                </div>
                                <div className="progess-bar flex flex-1 items-center order-3 md:order-none w-full bg-grey-100 rounded-[5px] h-[10px]">
                                    <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[5px] h-[10px] w-[75%]"></div>
                                </div>
                                <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>75%</div>
                            </div>)}

                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px] flex-1'>
                        <div className='card-header flex flex-col gap-[8px]'>
                            <div className='para-lg font-semibold text-grey300'>Category rankings</div>
                        </div>
                        <div className='rating-pod flex flex-col gap-[10px]'>
                            {[1, 2, 3, 4, 5].map((_, idx) => <div key={idx} className='category-rank flex items-center gap-[8px]'>
                                <span className="reviewLink x-small text-grey300">Uni Halls rating</span>
                                <FiveStarRatings />
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            {/* Star rating filter */}
        </>
    )
}

export default ReviewFiltersComponent;
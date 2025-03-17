"use client";
import React, { ReactElement, useState } from 'react';
import Paginations from '../../paginations/paginations';
import Link from 'next/link';
import Image from 'next/image';
import ReviewFiltersComponent from './ReviewFilters';
import FiveStarRatings from './common/FiveStarRatings';
import ReviewPannelHeader from './ReviewPannelHeader';
import DetailedReviewLightBox from './DetailedReviewLightBox';
import CategoryReviewCard from './common/CategoryReviewCard';

const ReviewPannelComponent: React.FC = (): ReactElement => {
    const [opengallery, setOpengallery] = useState<boolean>(false)
    const [isOpen, setIsopen] = useState(true);
    function Handlegallery() {
        setOpengallery((prev) => !prev);
    }
    return (
        <>
            {opengallery && <DetailedReviewLightBox setOpengallery={setOpengallery} />}
            <div onClick={() => setIsopen(false)} className={`${isOpen ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[7]`}>
            </div>
            <div className={`${isOpen ? "translate-x-0 opacity-[1]" : "translate-x-full opacity-0"} transition-all duration-300 modal modal-container shadow-custom-6 w-full lg:w-[789px] fixed top-0 right-0 z-[8]`}>
                <div className='modal-box p-[16px_18px_16px_16px]  md:p-[20px_16px_20px_20px] lg:p-[32px_8px_24px_32px]  bg-white relative z-0 right-0 md:top-[44px] lg:top-0 h-[100vh]'>
                    <div onClick={() => setIsopen(false)} className='modal_close w-[44px] h-[44px] md:bg-primary-400 md:hover:bg-primary-500 flex items-center justify-center absolute top-0 md:top-[-44px] lg:top-0 right-0 lg:right-auto left-auto lg:left-[-44px] z-[1] cursor-pointer'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='stroke-grey-600 md:stroke-white' d="M1 13L13 1M1 1L13 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='review-modal-container flex flex-col gap-[16px]'>
                        <div className='review-modal-card flex flex-col gap-[16px] md:gap-[24px] pr-[16px] custom-scrollbar-2 overflow-y-auto h-[calc(100vh-64px)] md:h-[calc(100vh-108px)] lg:h-[calc(100vh-64px)]'>

                            <ReviewPannelHeader />
                            <ReviewFiltersComponent />

                            {[1, 2].map((_, idx) => <div key={idx} className='review-comments-card pb-[24px] border-b border-b-grey-300'>
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
                                                <ul className='flex gap-[8px]' onClick={() => Handlegallery()}>
                                                    <li className='rounded-[4px] overflow-hidden last:relative cursor-pointer'><Image src="/static/assets/images/course-details/Frame_9338.jpg" alt="" width={175} height={112} /></li>
                                                    <li className='rounded-[4px] overflow-hidden last:relative cursor-pointer'><Image src="/static/assets/images/course-details/Frame_9355.jpg" alt="" width={175} height={112} /></li>
                                                    <li className='rounded-[4px] overflow-hidden last:relative cursor-pointer'>
                                                        <Image src="/static/assets/images/course-details/Frame_9356.jpg" alt="" width={175} height={112} />
                                                        <div className='more-gallery flex items-center justify-center small md:para font-semibold text-white underline absolute top-0 right-0 bottom-0 left-0 bg-grey-900/75'>14+ Photos</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='review-body flex flex-col gap-[16px]'>
                                                <div className='flex flex-col gap-[20px]'>

                                                    {[1, 2].map((_, idx) =>
                                                        <div key={idx}>
                                                            <CategoryReviewCard />
                                                        </div>
                                                    )}

                                                    <div className='w-fit underline cursor-pointer'>+ Read more</div>
                                                </div>
                                                <div className='flex gap-[8px] items-center w-fit small text-grey300  cursor-pointer'>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.66732 15.1667H2.66732C2.3137 15.1667 1.97456 15.0262 1.72451 14.7762C1.47446 14.5261 1.33398 14.187 1.33398 13.8333V9.16668C1.33398 8.81306 1.47446 8.47392 1.72451 8.22387C1.97456 7.97382 2.3137 7.83334 2.66732 7.83334H4.66732M9.33398 6.50001V3.83334C9.33398 3.30291 9.12327 2.7942 8.7482 2.41913C8.37313 2.04406 7.86442 1.83334 7.33398 1.83334L4.66732 7.83334V15.1667H12.1873C12.5089 15.1703 12.8209 15.0576 13.0659 14.8493C13.3109 14.6411 13.4724 14.3513 13.5207 14.0333L14.4407 8.03334C14.4697 7.84225 14.4568 7.64713 14.4029 7.46151C14.349 7.27589 14.2554 7.10421 14.1286 6.95835C14.0017 6.8125 13.8447 6.69596 13.6684 6.61682C13.492 6.53768 13.3006 6.49782 13.1073 6.50001H9.33398Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span className='small text-grey300 underline'>6</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}



                            <Paginations />

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ReviewPannelComponent;
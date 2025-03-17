import React, { ReactElement, useState } from "react";
import Reviewthumbgalleryslidercomponents from "../../slider/reviewthumbgalleryslidercomponents";
import Link from "next/link";
import CategoryReviewCard from "./common/CategoryReviewCard";

const DetailedReviewLightBox: React.FC<any> = ({ setOpengallery }: any): ReactElement => {
    const [isOpen, setIsopen] = useState(true);
    return (
        <>
            <div onClick={() => setOpengallery(false)} className={`${isOpen ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[10]`}>
            </div>
            <div className='modal modal-container fixed top-0 right-0 bottom-0 z-[11]'>
                <div className={`${isOpen ? "translate-y-0 opacity-[1]" : "translate-y-[100px] opacity-0"} transition-all duration-300 modal-box shadow-custom-6 w-full md:w-[720px] lg:w-[987px] p-[0] md:p-[20px] lg:p-[24px] bg-white md:rounded-[8px] fixed top-0 md:top-[60px] left-0 right-0 mx-auto h-[100vh] md:h-[calc(100vh-120px)]`}>
                    <div onClick={() => setOpengallery(false)} className='modal_close flex items-center justify-center absolute top-[24px] right-[16px] lg:right-[20px] z-[1] cursor-pointer'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='stroke-grey-600' d="M1 13L13 1M1 1L13 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='review-modal-container flex flex-col gap-[16px]'>
                        <div className='review-modal-card flex flex-col lg:flex-row gap-[16px] md:gap-[20px] max-md:pr-[0] max-md:h-[calc(100vh-24px)] max-lg:pr-[20px] max-lg:custom-scrollbar-2 max-lg:overflow-y-auto max-lg:h-[calc(100vh-168px)]'>
                            <div className='w-full lg:min-w-[540px] lg:w-[540px]'>
                                <div className='review-gallery pt-[60px] md:pt-[0]'>
                                    <Reviewthumbgalleryslidercomponents />
                                </div>
                            </div>

                            <div className='review-gallery-scroll flex flex-1 px-[16px] md:px-[0] max-md:mr-[16px] max-md:custom-scrollbar-2 max-md:overflow-y-auto max-md:h-[calc(100vh-212px)] lg:custom-scrollbar-2 lg:overflow-y-auto lg:h-[calc(100vh-168px)] lg:pr-[16px]'>
                                <div className='review-comments-card pb-[24px]'>
                                    <div className='review-comments flex flex-col gap-[24px]'>
                                        <div className='review-comments__col w-full'>
                                            <div className='flex items-center gap-[16px]'>
                                                <div className='reviewer__avatar flex items-center justify-center min-w-[80px] w-[80px] h-[80px] bg-primary-200 text-heading4 font-bold text-grey-50 uppercase rounded-[80px]'>jd</div>
                                                <div className='flex flex-col flex-1 *:text-x-small *:text-grey300 *:text-left'>
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
                                                        <div className='para font-semibold'>University of Portsmouth</div>
                                                        <Link className='small text-primary-400 hover:text-primary-500 hover:underline' href='#'>Business and Management MSc (Hons)</Link>
                                                    </div>
                                                </div>
                                                <div className='review-body flex flex-col gap-[16px]'>
                                                    <div className='flex flex-col gap-[20px]'>

                                                        {[1].map((_, idx) =>
                                                            <div key={idx}>
                                                                <CategoryReviewCard />
                                                            </div>
                                                        )}

                                                        {/* <div className='w-fit cursor-pointer underline'>- Read less</div>     */}
                                                    </div>
                                                    <div className='flex gap-[8px] items-center w-fit small text-grey300  cursor-pointer'>
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.66732 15.1667H2.66732C2.3137 15.1667 1.97456 15.0262 1.72451 14.7762C1.47446 14.5261 1.33398 14.187 1.33398 13.8333V9.16668C1.33398 8.81306 1.47446 8.47392 1.72451 8.22387C1.97456 7.97382 2.3137 7.83334 2.66732 7.83334H4.66732M9.33398 6.50001V3.83334C9.33398 3.30291 9.12327 2.7942 8.7482 2.41913C8.37313 2.04406 7.86442 1.83334 7.33398 1.83334L4.66732 7.83334V15.1667H12.1873C12.5089 15.1703 12.8209 15.0576 13.0659 14.8493C13.3109 14.6411 13.4724 14.3513 13.5207 14.0333L14.4407 8.03334C14.4697 7.84225 14.4568 7.64713 14.4029 7.46151C14.349 7.27589 14.2554 7.10421 14.1286 6.95835C14.0017 6.8125 13.8447 6.69596 13.6684 6.61682C13.492 6.53768 13.3006 6.49782 13.1073 6.50001H9.33398Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className='small text-grey300 underline'>67</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailedReviewLightBox;
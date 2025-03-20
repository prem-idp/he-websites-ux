'use client';

import { useState } from "react";
import Reviewslidercomponents from "@packages/shared-components/common-utilities/slider/reviewslidercomponents";
import LeftPannelModal from '@packages/shared-components/course-details/Modal/LeftPannelModal';

interface ReviewComponentProps {
    heading: string,
    toggleModal?: () => void,
    jsonResponse: any;
}

const LatestReviewComponent = ({ heading, jsonResponse }: ReviewComponentProps) => {
    const latestReviews = jsonResponse?.latestReviews?.length ? jsonResponse?.latestReviews?.map((item: any) => item.review) : [];
    console.log(jsonResponse?.latestReviews, latestReviews, "--------------")
    const [selectedReview, setSelectedreview] = useState(latestReviews?.[0])
    const [isOpen, setIsOpen] = useState(false);

    if (!latestReviews?.length)
        return <></>;

    function toggleModal() {
        setIsOpen((prev) => !prev);
    }

    const changeFeesRegion = (item: any) => {
        if (selectedReview?.subjectname === item?.subjectname)
            return
        setSelectedreview(() => item[0]);
    }

    return (
        <>
            {(isOpen) && <LeftPannelModal
                matchKey='subjectname'
                heading='Subjects'
                subHeading='Select a subject'
                itemList={latestReviews}
                selectedItems={[selectedReview]}
                isOpen={isOpen}
                onClose={toggleModal}
                onApply={changeFeesRegion}
            />}
            <div className='latest-reviews flex flex-col gap-[16px]'>
                <div className='card-header flex flex-col gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                        <div className='h5 text-grey300'>{heading}</div>
                        {toggleModal && <div onClick={toggleModal} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Art & Design
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>}
                    </div>
                </div>
                <Reviewslidercomponents
                    reviewData={selectedReview?.reviews}
                    pageName="cd"
                    data-testid="review-slider"
                    data-review-count={jsonResponse}
                    parent_category=""
                    sub_Category=""
                />
                <div className='flex justify-center mt-[4px]'>
                    <a href='#' className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                        Read all reviews
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LatestReviewComponent;
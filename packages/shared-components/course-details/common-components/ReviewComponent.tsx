'use client'

import Reviewslidercomponents from "@packages/shared-components/common-utilities/slider/reviewslidercomponents";
import { useState } from "react";
interface ReviewComponentProps {
    heading: string,
    toggleModal?: () => void,
    jsonResponse: any;

}

const ReviewComponent = ({ heading, jsonResponse }: ReviewComponentProps) => {
    // console.log(jsonResponse, "--------------")

    return (
        <div className='latest-reviews flex flex-col gap-[16px]'>
            <div className='card-header flex flex-col gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                    <div className='h5 text-grey300'>{heading}</div>
                </div>
            </div>
            <Reviewslidercomponents
                reviewData={jsonResponse}
                pageName="cd"
                data-testid="review-slider"
                data-review-count={jsonResponse}
                parent_category=""
                sub_Category=""
            />
            <div className='flex justify-center mt-[4px]'>
                <a href='/university-course-reviews/' className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                    Read all reviews
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default ReviewComponent;
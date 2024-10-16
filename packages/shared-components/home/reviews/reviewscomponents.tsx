"use client"
import Reviewslidercomponents from "@/app/components/slider/reviewslidercomponents";
import Link from "next/link";
import React from "react";

const Reviewscomponents = () => {
  
  return (
    <div className="reviews-container bg-neutral-50">
      <div className="max-w-container mx-auto">
        <div className="reviews-card-container py-[64px] lg:px-[0]">
            <div className="reviews-header px-[16px] md:px-[20px] mb-[26px] md:mb-[32px]">
                <h2 className="font-bold">Honest reviews from real students</h2>
                <p className="font-normal small mt-[8px]">Subheading</p>
            </div>
            <div className="reviews-inner-wrap"> 
              <Reviewslidercomponents />
              <div className='flex justify-center mt-[34px]'>
                  <a href='#' className='flex items-center w-fit font-semibold para text-primary-400 hover:underline gap-[8px]'>
                  View more
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </a>
                </div> 
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Reviewscomponents;

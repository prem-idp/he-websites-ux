import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Courseoptionsskeleton = ({ onOpenModal }:any) => {
  return (
    <section className='bg-grey border-b border-primary-100'>
    <div className="max-w-container mx-auto">
      <div className='card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
        <div className='card-header flex flex-col lg:flex-row gap-[24px] md:gap-[16px] items-start justify-between'>
          <div className='flex flex-col md:flex-row items-start md:items-center  gap-[16px] md:gap-[8px]'>
            <div className="skeleton skeleton-text skeleton-text-animated large_heading !w-[200px]"></div>
            <div onClick={onOpenModal} className='flex items-center gap-[8px]'>
                <div className="skeleton skeleton-text skeleton-text-animated large_heading !w-[120px]"></div> 
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#d4d4d4" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className='flex items-center gap-[4px] *:text-x-small *:font-normal'>
            <div className="skeleton skeleton-text skeleton-text-animated large_heading !w-[260px]"></div>
          </div>
        </div>
        <div className='card-body'>
        <div className="course-highlight__details grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px_24px] md:gap-[24px_54px]">
          <div className="course-highlight__option flex flex-col items-start gap-[16px]">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6401 4.01615C16.2314 3.84097 15.7686 3.84097 15.3599 4.01615L3.98488 8.89116C3.38739 9.14722 3 9.73472 3 10.3848C3 11.0348 3.38739 11.6223 3.98488 11.8784L8.28186 13.7199C8.43811 13.5429 8.63398 13.3987 8.85988 13.3019L15.3599 10.5162C16.1848 10.1626 17.1401 10.5448 17.4936 11.3697C17.8471 12.1946 17.465 13.1499 16.6401 13.5034L12.2084 15.4027L15.3599 16.7534C15.7686 16.9286 16.2314 16.9286 16.6401 16.7534L28.0151 11.8784C28.6126 11.6223 29 11.0348 29 10.3848C29 9.73472 28.6126 9.14722 28.0151 8.89116L16.6401 4.01615Z" fill="#d4d4d4"/>
                <path d="M5.12882 15.9045L7.875 17.0814V23.7466C7.318 23.6202 6.74896 23.5257 6.1699 23.465C5.40652 23.385 4.80326 22.7817 4.72321 22.0183C4.65825 21.3987 4.625 20.7702 4.625 20.1345C4.625 18.6776 4.79954 17.2609 5.12882 15.9045Z" fill="#d4d4d4"/>
                <path d="M14.8624 27.5651C13.769 26.4932 12.509 25.5922 11.125 24.9043V18.4742L14.0796 19.7405C15.3059 20.2661 16.6941 20.2661 17.9204 19.7405L26.8712 15.9045C27.2005 17.2609 27.375 18.6776 27.375 20.1345C27.375 20.7702 27.3417 21.3987 27.2768 22.0183C27.1967 22.7817 26.5935 23.385 25.8301 23.465C22.4617 23.8182 19.4326 25.3152 17.1376 27.5651C16.5057 28.1845 15.4943 28.1845 14.8624 27.5651Z" fill="#d4d4d4"/>
                <path d="M9.5 29.8847C10.3975 29.8847 11.125 29.1572 11.125 28.2597V24.9043C10.1035 24.3966 9.0144 24.005 7.875 23.7466V28.2597C7.875 29.1572 8.60254 29.8847 9.5 29.8847Z" fill="#d4d4d4"/>
            </svg>
            <div className="flex flex-col flex-1 gap-[4px]">
                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[90px] md:!w-[180px]"></div>
                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[120px] md:!w-[200px]"></div>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[100px]"></div>
            </div>
          </div>
          <div className="course-highlight__option flex flex-col items-start gap-[16px]">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3848 7.03909C12.5906 2.83332 19.4095 2.83332 23.6152 7.03909C27.821 11.2449 27.821 18.0638 23.6152 22.2695L16 29.8848L8.3848 22.2695C4.17903 18.0638 4.17903 11.2449 8.3848 7.03909ZM16 17.7313C17.6994 17.7313 19.077 16.3537 19.077 14.6543C19.077 12.9549 17.6994 11.5773 16 11.5773C14.3006 11.5773 12.923 12.9549 12.923 14.6543C12.923 16.3537 14.3006 17.7313 16 17.7313Z" fill="#d4d4d4"/>
            </svg>
            <div className="flex flex-col gap-[4px]">
                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[90px] md:!w-[120px]"></div>
                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[120px] md:!w-[200px]"></div>
                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[100px]"></div>
            </div>
          </div>
          <div className="course-highlight__option flex flex-col items-start gap-[8px]">
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2309 4.16699C10.5879 4.16699 10.0082 4.55431 9.76216 5.14835C9.51611 5.74238 9.65212 6.42614 10.1068 6.8808L11.2309 8.00489V13.978C11.2309 14.3996 11.0634 14.804 10.7653 15.1021L4.40641 21.4609C1.40202 24.4653 3.52985 29.6024 7.77869 29.6024H24.2213C28.4701 29.6024 30.598 24.4653 27.5936 21.4609L21.2347 15.1021C20.9366 14.804 20.7691 14.3996 20.7691 13.978V8.00489L21.8932 6.8808C22.3479 6.42614 22.4839 5.74238 22.2378 5.14835C21.9918 4.55431 21.4121 4.16699 20.7691 4.16699H11.2309ZM14.4103 13.978V7.34641H17.5897V13.978C17.5897 15.2429 18.0922 16.4559 18.9866 17.3503L20.6201 18.9838C19.4805 18.7187 18.2857 18.7724 17.1685 19.1448L16.4211 19.3939C15.1158 19.829 13.7046 19.829 12.3994 19.3939L11.5052 19.0959C11.4447 19.0757 11.3838 19.0574 11.3227 19.041L13.0134 17.3503C13.9078 16.4559 14.4103 15.2429 14.4103 13.978Z" fill="#d4d4d4"/>
            </svg>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[150px]"></div>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[100px]"></div>
          </div>
          <div className="course-highlight__option flex flex-col items-start gap-[8px]">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.88477C8.60254 3.88477 7.875 4.6123 7.875 5.50977V7.13477H6.25C4.45507 7.13477 3 8.58984 3 10.3848V26.6348C3 28.4297 4.45507 29.8848 6.25 29.8848H25.75C27.5449 29.8848 29 28.4297 29 26.6348V10.3848C29 8.58984 27.5449 7.13477 25.75 7.13477H24.125V5.50977C24.125 4.6123 23.3975 3.88477 22.5 3.88477C21.6025 3.88477 20.875 4.6123 20.875 5.50977V7.13477H11.125V5.50977C11.125 4.6123 10.3975 3.88477 9.5 3.88477ZM9.5 12.0098C8.60254 12.0098 7.875 12.7373 7.875 13.6348C7.875 14.5322 8.60254 15.2598 9.5 15.2598H22.5C23.3975 15.2598 24.125 14.5322 24.125 13.6348C24.125 12.7373 23.3975 12.0098 22.5 12.0098H9.5Z" fill="#d4d4d4"/>
            </svg>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[150px]"></div>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[100px]"></div>
          </div>
          <div className="course-highlight__option flex flex-col items-start gap-[8px]">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 29.8848C23.1797 29.8848 29 24.0645 29 16.8848C29 9.70506 23.1797 3.88477 16 3.88477C8.8203 3.88477 3 9.70506 3 16.8848C3 24.0645 8.8203 29.8848 16 29.8848ZM17 10.3848C17 9.83248 16.5523 9.38477 16 9.38477C15.4477 9.38477 15 9.83248 15 10.3848V16.8848C15 17.15 15.1054 17.4043 15.2929 17.5919L19.8891 22.1881C20.2796 22.5786 20.9128 22.5786 21.3033 22.1881C21.6938 21.7975 21.6938 21.1644 21.3033 20.7739L17 16.4706V10.3848Z" fill="#d4d4d4"/>
            </svg>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[150px]"></div>
            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[100px]"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Courseoptionsskeleton
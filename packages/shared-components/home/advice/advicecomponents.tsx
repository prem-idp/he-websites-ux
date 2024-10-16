import Advicecourseslidercomponents from '@/app/components/slider/advicecourseslidercomponents'
import React from 'react'

const Advicecomponents = () => {
  return (
    <div className='advice-container bg-white'> 
    <div className="max-w-container mx-auto">
        <div className='advice-card-container px-[0] py-[64px]'>
            <div className='advice-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]'>
                <h2 className='font-bold'>Latest advice</h2>
                <p className='font-normal small mt-[8px]'>Subheading</p>
            </div>
              <div className="advice-inner-wrap"> 
                <Advicecourseslidercomponents />
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
  )
}

export default Advicecomponents
import React from 'react'
import Advertbannercard from "@packages/shared-components/institution-profile/advertbannercard";

const Opendaysvirtualadvertcomponents = ({advertData,title,istitleVisible=true,width}:any) => {
   return (
    <>
    <div className='advert-container'>
        <div className='advert-card-container flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0'>
          { istitleVisible &&
            <div className='h5 text-grey300'>{title}</div>
          }
          <div className='advert-card-inner'>
            <div className='flex flex-col lg:flex-row gap-[16px]'>
              {advertData?.map((item:any, index:number) => (
                <Advertbannercard {...item} keyIndex={index} width={width}/>     
              ))}
            </div>
          </div>
            <div className='flex justify-center mt-[4px]'>
                <a href='#' className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                View all open days
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
            </div> 
        </div>
    </div>  
    </>
  )
}

export default Opendaysvirtualadvertcomponents
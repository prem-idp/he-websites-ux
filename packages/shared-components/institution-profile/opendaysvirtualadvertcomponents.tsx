import React from 'react'
import Advertbannercard from "@packages/shared-components/institution-profile/advertbannercard";

const Opendaysvirtualadvertcomponents = () => {
  return (
    <>
    <div className='advert-container'>
        <div className='advert-card-container flex flex-col gap-[16px]'>
          <div className='h5 text-grey300'>Open days and virtual visits</div>
          <div className='advert-card-inner'>
            <div className='flex gap-[16px]'>
                <Advertbannercard
                    tagline="NEXT OPEN DAY"
                    title={"13th February"}
                    description={
                    "Undergraduate open day, Main campus"
                    }
                    buttonName={"Book your place"}
                    bannerSrc={"/static/assets/images/opdays_thumb_image.jpg"}
                    bgColor={"bg-blue-100"}
                />
                <Advertbannercard
                tagline="Virtual tour"
                title={"A day in the life"}
                description={
                  "Discover some of the many places our students spend a typical day."
                }
                buttonName={"Take a virtual tour"}
                bannerSrc={"/static/assets/images/virtual_thumb_image.jpg"}
                bgColor={"bg-green-200"}
              />
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
import React from 'react'

const Seasonlandingvideoskeleton = () => {
  return (
        <>
      <section className="season-landing-container bg-white">
        <div className="max-w-container mx-auto">
          <div className="season-landing-card flex flex-col gap-[32px] lg:gap-[24px] md:px-[20px]  md:py-[24px] xl:px-[0]">
            <div className="video-container flex flex-col lg:flex-row gap-[20px] md:gap-[32px] lg:gap-[40px]">
              <div className="video-inner-left relative w-full lg:w-[598px] min-h-[210px] md:min-h-[300x] md:rounded-[8px] md:overflow-hidden">
                <div className='skeleton skeleton-thumb-img skeleton-text-animated min-h-[336px]'></div>
              </div>
              <div className="video-inner-right flex flex-col flex-1 justify-center  px-[16px] md:px-[0] max-md:pb-[24px]">
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <div className="skeleton skeleton-text skeleton-text-animated large_heading"></div>
                        <div className="font-normal">
                            <div className="skeleton skeleton-text skeleton-text-animated descrip"></div>
                            <div className="skeleton skeleton-text skeleton-text-animated descrip"></div>
                        </div>
                    </div>
                  <div className="skeleton skeleton_btn skeleton-text-animated !w-[120px]"></div>
                </div>
              </div>
              {/* <Searchcomponents /> */}
            </div>
        </div>
      </div>  
      </section>
    </>
  )
}

export default Seasonlandingvideoskeleton
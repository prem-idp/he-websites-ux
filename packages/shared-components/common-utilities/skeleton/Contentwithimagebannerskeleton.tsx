import React from 'react'

const Contentwithimagebannerskeleton = () => {
  return (
    <>
        <section className="bg-grey-50">
            <div className="max-w-container mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[16px] p-[16px] md:p-[0_20px_26px_20px] lg:py-0 xl:px-0 min-h-[194px]">
                    <div className="w-full flex flex-col flex-grow gap-[16px] self-center lg:p-[16px_0]">
                        <div className="flex flex-col gap-[4px]">
                            <div className="skeleton skeleton-text-animated large_heading !mb-[4px] !w-[60%]"></div>
                            <div className="skeleton skeleton-text-animated descript !w-[100%]"></div>
                            <div className="skeleton skeleton-text-animated descript !w-[40%]"></div>
                        </div>
                    </div>
                    <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px] py-[24px]">
                        <div className='w-[166px]'>
                            <svg width="100%" height="auto" viewBox="0 0 417 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M414.329 0L415.713 209.739C416.424 317.432 329.698 405.311 222.004 406.021L2.67098 407.469L1.2868 197.73C0.576077 90.037 87.3025 2.15823 194.996 1.4475L414.329 0Z" fill="#E6E6E6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    </>
  )
}

export default Contentwithimagebannerskeleton
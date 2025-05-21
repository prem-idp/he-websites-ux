import React from 'react'

const Yearofentryskeleton = () => {
  return (
    <section className='year-of-entry-container bg-grey-100'>
        <div className='max-w-container mx-auto'>
            <div className='overflow-x-scroll scrollbar-hidden'>
            <div className='year-of-entry form_radio flex items-center gap-[8px] py-[8px] px-[16px] md:px-[20px] lg:px-[0] w-[436px] md:w-fit'>
                <div className="skeleton skeleton-text skeleton-text-animated heading !w-[100px]"></div>
                <div className='form-radio-group flex flex-row gap-[6px] md:gap-[8px]'>
                    <div className="col flex relative">
                        <label htmlFor="2024-2025" className="check-label  border border-neutral-300 rounded-[22px] px-[12px] py-[4px]">
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[80px]"></div>
                        </label>                          
                    </div>
                    <div className="col flex relative">                       
                        <label htmlFor="2024-2025" className="check-label  border border-neutral-300 rounded-[22px] px-[12px] py-[4px]">
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[80px]"></div>
                        </label>
                    </div>
                    <div className="col flex relative">                    
                        <label htmlFor="2024-2025" className="check-label  border border-neutral-300 rounded-[22px] px-[12px] py-[4px]">
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[80px]"></div>
                        </label>
                    </div>
                </div>
            </div>
            </div>
        </div>  
    </section>
  )
}

export default Yearofentryskeleton
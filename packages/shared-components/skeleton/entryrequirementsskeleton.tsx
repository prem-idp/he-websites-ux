import React from 'react'

const Entryrequirementsskeleton = () => {
  return (
    <div className='entryreq-container' id="skiplink3"> 
    <div className="max-w-container mx-auto">
        <div className='entryreq-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>
                <div className="skeleton skeleton-text-animated large_heading !w-[200px]"></div>
            </div>
            <div className='flex w-full lg:w-[calc(100%_-_309px)]'>
            <div className='card flex flex-col gap-[10px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header'>
                    <div className="flex items-center gap-[8px]">
                        <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[120px]"></div>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#d4d4d4" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                </div>
                {/* -- */}
                <div className="course-highlight__details w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] bg-grey-50 rounded-[8px] p-[16px]">
                    <div className="course-highlight__option  flex flex-col items-start">                      
                        <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
                        <div className="skeleton skeleton-text-animated page-heading !w-[60%]"></div>
                    </div>
                </div>
                {/* -- */}
                <div className="skeleton skeleton-text-animated descrip !w-[100%]"></div>
                <div className="skeleton skeleton-text-animated descrip !w-[100%]"></div>
                <div className="skeleton skeleton-text-animated descrip !w-[60%]"></div>
                
                <div className='skeleton skeleton-text-animated page_heading !w-[30%]'></div> 
            </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Entryrequirementsskeleton
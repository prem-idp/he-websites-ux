import React from 'react'

const Articlegridskeleton = () => {
  return (
    <>
    <div className={`advice-container`} >
        <div className="max-w-container mx-auto">
            <div className='advice-card-container md:gap-[32px] px-[16px] md:px-[20px] py-[34px] lg:py-[64px] lg:px-[0]]'>
                <div className='advice-header mb-[26px] md:mb-[32px]'>
                    <div className="skeleton skeleton-text-animated large_heading !w-[20%]"></div>
                    <div className="skeleton skeleton-text-animated page-heading !w-[60%]"></div>
                </div>
                <div className='advice-course-container '>
                <div className="advice-inner-wrap"> 
                    <div className='advice-course-container'>
                        <div className='advicecourse-inner-wrap advice-inner-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                            {[1,2,3,4,5,6].map((item, index) => (
                                <div className='card flex flex-col bg-white rounded-[8px] shadow-custom-2 w-full'>
                                <div className='card-header'>
                                    <div className='skeleton skeleton-thumb-img skeleton-text-animated min-h-[221px]'></div>
                                </div>            
                                <div className='card-body flex flex-col gap-[10px] p-[16px]'>
                                    <h5 className='card-title'>
                                        <div className="skeleton skeleton-text skeleton-text-animated large_heading"></div>
                                        <div className="skeleton skeleton-text skeleton-text-animated small_heading"></div>
                                    </h5>
                                    <div className='card-description'>
                                        <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                        <div className="skeleton skeleton-text skeleton-text-animated"></div>                     
                                    </div>
                                    <div className='card-date'>
                                        <div className="skeleton skeleton-text skeleton-text-animated !w-[100px]"></div>
                                    </div> 
                                </div>
                            </div>
                            ))}                            
                        </div>
                        <div className="py-[24px] md:py-[40px]">
                            <nav aria-label="navigation">
                            <ul className="pagination flex justify-center items-center gap-[8px]">
                                <li>
                                <span aria-label="Left arrow" className="flex items-center justify-center text-center px-[2px] py-[8px] rounded-[4px] w-[36px] h-[36px]"
                                >
                                    <svg width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M6 11L1 6L6 1"
                                        stroke="#d4d4d4"
                                        strokeWidth="1.67"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                </span>
                                </li>
                                {[1,2,3,4,5].map((item, index) => (
                                    <li key={index}>
                                    <span className="block small w-[36px] h-[36px] px-[2px] py-[8px] rounded-[4px] bg-[#d4d4d4] opacity-[.65]">                                  
                                </span>
                                    </li>
                                ))}
                              
                                <li>
                                <span className="select-none flex items-center justify-center small w-[36px] h-[36px] font-normal text-[#d4d4d4] text-center px-[2px] py-[8px]">
                                    ...
                                </span>
                                </li>
                                <li>
                                    <span className="block small w-[36px] h-[36px] px-[2px] py-[8px] rounded-[4px] bg-[#d4d4d4] opacity-[.65]">                                  
                                </span>
                                    </li>
                                <li>
                                <span aria-label="Right arrow" className=" flex items-center justify-center text-center px-[2px] py-[8px] rounded-[4px] w-[36px] h-[36px]"
                                >
                                    <svg
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M1 1L6 6L1 11"
                                        stroke="#d4d4d4"
                                        strokeWidth="1.67"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                </span>
                                </li>
                            </ul>
                            </nav>
                        </div>
                    </div>                    
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Articlegridskeleton
import React from 'react'

const CPCpopularskeleton = () => {
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
                            {[1,2,3].map((item, index) => (
                                <>                                                                           
                                <div className='card flex flex-col bg-white border border-neutral-100  rounded-[8px] shadow-custom-2 overflow-hidden'>
                                <div className='card-header'>
                                    <div className='skeleton skeleton-thumb-img skeleton-text-animated min-h-[221px]'></div>
                                </div>
                                    <div className='card-body flex flex-col justify-between gap-[16px] p-[16px] min-h-[192px]'>
                                        <div className='flex flex-col gap-[8px] w-full'>
                                            <div className="bg-neutral-100 text-neutral600 p-[3px_10px] rounded-[4px] w-[90px]">
                                                <div className="skeleton skeleton-text skeleton-text-animated descrip"></div>
                                            </div>
                                            <h5 className='card-title'>
                                                <div className="skeleton skeleton-text skeleton-text-animated large_heading"></div>
                                                <div className="skeleton skeleton-text skeleton-text-animated heading"></div>
                                            </h5>
                                            <div className='flex flex-col gap-[8px]'>
                                                <div className="flex items-center flex-wrap gap-[8px] x-small font-semibold uppercase">
                                                    <div className="bg-neutral-100 text-neutral600 p-[3px_10px] rounded-[4px] min-w-[120px]">
                                                        <div className="skeleton skeleton-text skeleton-text-animated descrip"></div>
                                                    </div>
                                                    <div className="bg-neutral-100 text-neutral600 p-[3px_10px] rounded-[4px] min-w-[90px]">
                                                        <div className="skeleton skeleton-text skeleton-text-animated descrip"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[8px]'>
                                            {[1,2,3,4,5,6].map((item, index) => (
                                                <div>
                                                    <div className="skeleton skeleton-text skeleton-text-animated heading"></div>
                                                    <div className='rating-pod flex items-center gap-[8px]'>
                                                        <div key={index} className='rating-card flex items-center gap-[8px]'>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#d4d4d4"/>
                                                            </svg>
                                                            <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[60px]"></div>                                 
                                                            <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[40px]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                        <div className={`flex flex-col w-full`}>
                                            {[1,2,3,4].map((item, index) => (
                                            <div className="skeleton skeleton_btn skeleton-text-animated !w-full"></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center w-full p-[16px] border-t border-t-neutral-100'>
                                        <div className='text-center block'>
                                            <div className="skeleton skeleton-text skeleton-text-animated descrip min-w-[120px]"></div>
                                        </div>
                                    </div>            

                            </div>
                            </>
                            ))}                            
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

export default CPCpopularskeleton
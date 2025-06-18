
import Getprospectus from '@/app/components/cards/interaction-button/getprospectus'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Visitwebsite from '@/app/components/cards/interaction-button/visitwebsite'
import RequestInfo from '@/app/components/cards/interaction-button/requestinfo'
import BookEvent from '@/app/components/cards/interaction-button/bookevent'

const Courseheaderinfoskeleton = () => {
  return (
    <>
      <div className='cd-uni-info-container'>
        <div className='max-w-container mx-auto'>
          <div className='cd-uniinfo-card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
                    {/* -- */}
                    <div className='uniresults-inner flex flex-col md:flex-row md:gap-[24px]'>
                        <div className='uniresults-left'>
                          <div className="univ__logo w-[112px] bg-white rounded-[8px] overflow-hidden hidden md:block">
                            <div className='skeleton skeleton-thumb-img skeleton-text-animated w-[112px] !h-[112px]'></div>
                          </div>
                         </div>
                        <div className='uniresults-right flex flex-col flex-1 gap-[16px]'>
                            <div className='uni-info-card flex flex-col gap-[8px] md:gap-0'>
                              <div className='flex flex-col-reverse md:flex-row gap-[16px] md:gap-0  justify-between items-start h5 text-grey300'>
                                    <div className="skeleton skeleton-text skeleton-text-animated large_heading !w-[30%]"></div>
                                    <div className='skeleton skeleton-circle-img skeleton-text-animated !w-[40px] !h-[40px]'></div>
                                  {/* -- */}                                
                              </div>
                            <div className='flex flex-col gap-[8px]'>
                            <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[40%]"></div>
                              <div className='flex'>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                  <div className='rating-card flex items-center gap-[8px]'>
                                    <span className="reviewLink">
                                        <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[100px]">                               </div>
                                    </span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#d4d4d4"/>
                                    </svg>
                                    <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[40px]"></div>                                 
                                    <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[120px]"></div>
                                  </div>
                                </div>
                              </div>  
                              <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[100%]"></div>
                              <div className="skeleton skeleton-text skeleton-text-animated description !m-[0] !w-[40%]"></div>                        
                            </div>
                            </div>
                            <div className='uniresults-content-right flex items-end'>
                              <div className='btn-pod w-full grid grid-col-1 md:grid-cols-2 lg:flex lg:grid-cols-none gap-[8px]'>
                                <div className="skeleton skeleton_btn skeleton-text-animated !w-full"></div>
                                <div className="skeleton skeleton_btn skeleton-text-animated !w-full"></div>
                                <div className="skeleton skeleton_btn skeleton-text-animated !w-full"></div>
                                <div className="skeleton skeleton_btn skeleton-text-animated !w-full"></div>
                              </div>
                          </div> 
                        </div>    
                
                    </div>
                    {/* -- */}
                  </div>
        </div>
      </div>
    </>
  )
}

export default Courseheaderinfoskeleton
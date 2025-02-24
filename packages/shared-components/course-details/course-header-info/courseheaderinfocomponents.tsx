'use client'
import Getprospectus from '@packages/shared-components/common-utilities/cards/interaction-button/getprospectus'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Visitwebsite from '@packages/shared-components/common-utilities/cards/interaction-button/visitwebsite'
import RequestInfo from '@packages/shared-components/common-utilities/cards/interaction-button/requestinfo'
import BookEvent from '@packages/shared-components/common-utilities/cards/interaction-button/bookevent'
import { useState } from 'react'
  const Courseheaderinfocomponents = ({data}:any) => {
    const [favorities,setFavorities]=useState(true)
    console.log(data,"dataaaaa")
  return (
        <>
        <div className='cd-uni-info-container'>
          <div className='max-w-container mx-auto'>
            <div className='cd-uniinfo-card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
                      {/* -- */}
                      <div className='uniresults-inner flex flex-col md:flex-row md:gap-[24px]'>
                          <div className='uniresults-left'>
                            <div className="univ__logo bg-white p-[4px] w-[120px] rounded-[8px] shadow-custom-4 overflow-hidden hidden md:block">
                              <Image className='w-full' src={data?.courseInfo?.institutionLogoUrl} alt="uni logoo" width={112} height={112}  />
                            </div>
                          </div>
                          <div className='uniresults-right flex flex-col flex-1 gap-[16px]'>
                              <div className='uni-info-card flex flex-col gap-[8px] md:gap-0'>
                                <div className='flex flex-col-reverse md:flex-row gap-[16px] md:gap-0  justify-between items-start h5 text-grey300'>
                                  <span>{data?.courseInfo?.courseTitle}</span>
                                    <span onClick={()=>setFavorities((prev)=>!prev)} className={`favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer${favorities ? "bg-blue-100":"bg-white" }`}>
                                    <div className={`heart min-w-[40px] w-[40px] h-[40px] border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100 bg-blue-100 ${favorities ? "bg-blue-100":"bg-white" }`}>
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                                          stroke="#4664DC"
                                          strokeWidth="1.67"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>                                  
                                  </span>
                                </div>
                              <div className='flex flex-col gap-[8px]'>
                                 <a href={data?.courseInfo?.institutionNameUrl} className='block w-fit para-lg font-semibold text-primary-400 hover:text-primary-500 hover:underline'>{data?.courseInfo?.institutionName}</a>
                                <div className='flex'>
                                  <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[8px]'>
                                    <span className="reviewLink small text-grey300">Student rating</span>
                                    <div className='flex gap-[4px]'>
                                      <div className='tooltip'>
                                        <div className='flex gap-[2px]'>
                                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                          </svg>
                                        </div>
                                      </div>
                                      <span className='small text-grey300'>({data?.courseInfo?.overallRatingExact})</span>
                                    </div>
                                    </div>
                                    <a href="#" className='reviewLink block small text-primary-400 hover:text-primary-500 hover:underline'>View reviews</a>
                                  </div>
                                </div>  
                                <p className='small text-grey300'>Want to know what its like to study this course at uni? Weve got all the key info, from entry requirements to the modules on offer. If that all sounds good, why not check out reviews from real students or even book onto an upcoming open day?</p>                        
                              </div>
                              </div>
                              <div className='uniresults-content-right flex items-end'>
                                <div className='btn-pod w-full grid grid-col-1 md:grid-cols-2 lg:flex lg:grid-cols-none gap-[8px]'>
                                  <Getprospectus pageName={"courseDetails"} />
                                  <Visitwebsite />
                                  <BookEvent />
                                  <RequestInfo />
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

export default Courseheaderinfocomponents
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Keystatscomponents = ({onOpenModal}:any) => {
  return (
    <>
    <div className='keystats-container bg-grey-600 p-[24px] md:p-[32px] flex flex-col gap-[32px] rounded-[8px]'>
      <div className='keystats-inner-row flex flex-col gap-[8px]'>
          <div className='keystats-inner-header flex flex-col md:flex-row items-start md:items-center justify-between  gap-[16px] md:gap-[8px]'>
            <div className='h4 text-white'>Key stats</div>
            <div onClick={onOpenModal} className='flex items-center gap-[8px] para font-semibold text-white underline cursor-pointer'>Art & design 
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#fff" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className='keystats-body grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
            <div className="course-highlight__option flex items-start gap-[8px]">
              <Image src="assets/icons/course-details/wusca_ranking_stats_icon.svg" alt="academic-cap" width="32" height="32" />
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold line-clamp-2">WUSCA ranking</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                  59/81
                  <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                        WUSCA student ranking?
                        </span>
                        <p className="x-small">                          
                          These are the 2024 rankings, based on ratings given by past and current students.
                        </p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="course-highlight__option flex items-start gap-[8px]">
              <Image src="assets/icons/course-details/cug_subject_stats_icon.svg" alt="academic-cap" width="32" height="32" />
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold line-clamp-2">CUG Subject ranking</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                  59/81
                  <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] md:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] md:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                        CUG Subject Ranking?
                        </span>
                        <p className="x-small">                          
                        Source: Complete University Guide 2025.
                        </p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="course-highlight__option flex items-start gap-[8px]">
              <Image src="assets/icons/course-details/cug_ranking_stats_icon.svg" alt="academic-cap" width="32" height="32" />
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold line-clamp-2">CUG ranking</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                  51th
                  <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] md:left-[-120px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] md:after:left-[40%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                          CUG Ranking?
                        </span>
                        <p className="x-small">                          
                          Source: Complete University Guide 2025
                        </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div className='keystats-inner-row flex flex-col gap-[8px]'>
          <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
            <div className='h4 text-white'>Animation</div>
            <div className='flex flex-col md:flex-row justify-between gap-[16px] w-full *:text-small *:text-white'>
              <div className='w-full flex flex-col justify-between gap-[4px]'>
                <div className='flex items-center justify-between'>
                  <div>
                    <span>Drop-out rate</span>
                  </div>
                  <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>
                    89%
                    <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-[-30px] md:left-auto lg:right-auto lg:left-[-152px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-auto after:right-[40px] lg:after:left-[50%] lg:after:right-auto after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                          Why do we need your dummy text?
                        </span>
                        <p className="x-small">
                          We use this information to help assess the reach of
                          our products. This is completely optional.
                        </p>
                      </div>
                    </span>
                </div>
                <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                  <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px] w-[80%]"></div>
                </div>
              </div>
              <div className='w-full flex flex-col justify-between gap-[4px]'>
                <div className='flex items-center justify-between'>
                  <div>
                    <span>Employment rate</span>
                  </div>
                  <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>89%
                  <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-[-30px] md:left-auto lg:right-auto lg:left-[-152px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-auto after:right-[40px] lg:after:left-[50%] lg:after:right-auto after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                        WUSCA student ranking?
                        </span>
                        <p className="x-small">
                          We use this information to help assess the reach of
                          our products. This is completely optional.
                        </p>
                      </div>
                  </span>
                </div>
                <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                  <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px] w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='keystats-inner-row flex flex-col gap-[8px]'>
          <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
            <div className='h4 text-white'>Average salary</div>
          </div>
          <div className='keystats-body grid grid-cols-1 md:grid-cols-2 gap-[16px]'>
            <div className="course-highlight__option flex items-start">
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold line-clamp-2">Politics graduate salary at this uni</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">£22,000
                <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                        CUG Subject ranking?
                        </span>
                        <p className="x-small">
                        Source: Complete University Guide 2025
                        </p>
                      </div>
                </div>
              </div>
            </div>
            <div className="course-highlight__option flex items-start">
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold line-clamp-2">UK politics graduate salary</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">£21,000
                  <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                        CUG Subject ranking
                        </span>
                        <p className="x-small">                                                    
                          Source: Complete University Guide 2025
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='keystats-inner-row'>
          <div className='flex items-center gap-[4px] *:text-x-small *:font-semibold *:tracking-[1px]'>
            <div className='text-white'>SOURCE:</div>
            <Link href='#' className='uppercase text-white underline'>UNISTATS,</Link>
            <Link href='#' className='uppercase text-white underline'>UCAS / HESA</Link>
          </div>
      </div>
    </div>
    </>
  )
}

export default Keystatscomponents
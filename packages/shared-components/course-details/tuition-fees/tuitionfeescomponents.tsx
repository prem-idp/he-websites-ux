import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Tuitionfeescomponents = ({ onOpenModal }:any) => {
  return (
    <>
      <div className='tuition-fees-container' id="skiplink4"> 
        <div className="max-w-container mx-auto">
            <div className='tuition-fees-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
                <div className='h5 w-full md:w-[289px]'>Tuition fees</div>
                <div className='flex w-full lg:w-[calc(100%_-_309px)]'>
                  <div className='card flex flex-col gap-[10px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                    <div className='card-header'>
                      <div className='flex items-start md:items-center  gap-[16px] md:gap-[8px]'>
                        <div className='para font-semibold text-black'>Student living</div>
                        <div onClick={onOpenModal} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>England 
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* -- */}
                    <div className="course-highlight__details w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] bg-blue-50 rounded-[8px] p-[16px]">
                        <div className="course-highlight__option  flex flex-col items-start gap-[16px]">                      
                          <div className="flex flex-col gap-[4px] *:text-grey300">
                            <div className="para font-semibold text-black">
                              <span className='tooltip w-fit group/item para underline relative cursor-pointer pb-[6px] mb-[-6px]'>£9,250
                              <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                                  >
                                    {/* <span className="small font-semibold tooltip-head">
                                      Why do we need your dummy text?
                                    </span> */}
                                    <p className="x-small font-normal">                                      
                                      This information comes from UCAS, or in some cases the institution directly.
                                      <br/>                                      
                                      Please note: fees do vary so please make sure you contact the institution for up to date information.
                                    </p>
                                  </div>
                                </span> per year</div>
                                <div className="small text-black">Students from 
                                    <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'> England
                                      <div className="tooltip-wrap flex-col w-[266px] md:w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                                shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                                      >
                                        {/* <span className="font-semibold tooltip-head">
                                          Why do we need your dummy text?
                                        </span> */}
                                        <p className="x-small">                                    
                                          This is the fee you pay if you live within England.
                                          Please note, this fee has been confirmed.
                                        </p>
                                      </div>
                                    </span>
                                  </div>
                          </div>
                        </div>
                      </div>
                      {/* -- */}
                      <div className='description'>
                        <p className='para font-normal'>This is the fee you pay if you live in England. Please note, this fee has been confirmed.
                        </p>                        
                    </div>
                    <div className='flex items-center gap-[4px] *:text-x-small'>
                        <div className='text-grey300'>DATA SOURCE:</div>
                        <span className='text-grey300'>UCAS /</span><Link href='#' className='text-primary-400 hover:underline'>IDP Connect</Link>
                    </div>   
                  </div>  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Tuitionfeescomponents
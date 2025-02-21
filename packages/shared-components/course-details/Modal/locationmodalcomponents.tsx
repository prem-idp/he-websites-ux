"use client";
import React from 'react'
import Image from 'next/image'

const Locationmodalcomponents = ({isOpen, onClose }:any) => {
  return (
    <>
        <div onClick={onClose} className={`${isOpen ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[7]`}>
        </div>
        <div className={`${isOpen ? "translate-x-0 opacity-[1]" : "-translate-x-full opacity-0"} transition-all duration-300 modal modal-container shadow-custom-6 w-full md:w-[375px] fixed top-0 left-0 z-[8]`}>             
           <div className={`modal-box p-[16px_0_16px_16px] bg-white overflow-hidden h-[100vh]`}>
                <div onClick={onClose} className='modal_close absolute top-[16px] right-[16px] z-[1] cursor-pointer'>
                    <Image className='block' src="/assets/icons/modal_close.svg" width="12" height="12"  alt='modal close'/>
                </div>
                <div className='select-subject-container flex flex-col gap-[16px]'>
                    <div className='card-header flex flex-col gap-[4px]'>
                        <div className='h5 text-grey300'>Location</div>
                        <p className='para-lg font-semibold text-grey300'>Select student location</p>
                    </div>
                    <div className='select-subject-card pr-[16px] custom-scrollbar-2 overflow-y-auto h-[calc(100vh_-_156px)]'>
                        <ul>
                            <li className='flex justify-between items-center gap-[16px] border-b border-b-grey400 pb-[16px] mb-[16px]'>
                                <span className='small font-semibold text-grey300 line-clamp-1'>England</span>
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="radio" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select2" />
                                            <label htmlFor="select2" className="check-label flex justify-center items-center w-[90px] Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </li>
                            <li className='flex justify-between items-center gap-[16px] border-b border-b-grey400 pb-[16px] mb-[16px]'>
                                <span className='small font-semibold text-grey300 line-clamp-1'>Scotland</span>
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="radio" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select3" />
                                            <label htmlFor="select3" className="check-label flex justify-center items-center w-[90px] Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">
                                                <span className='selected'>Selected</span><span className='select'>Select</span>
                                            </label>                            
                                        </div>
                                    </div>                                
                                </div>
                            </li>
                            <li className='flex justify-between items-center gap-[16px] border-b border-b-grey400 pb-[16px] mb-[16px]'>
                                <span className='small font-semibold text-grey300 line-clamp-1'>Wales</span>
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="radio" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select4" />
                                            <label htmlFor="select4" className="check-label flex justify-center items-center w-[90px] Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">
                                                <span className='selected'>Selected</span><span className='select'>Select</span>
                                            </label>                            
                                        </div>
                                    </div>                                
                                </div>
                            </li>
                            <li className='flex justify-between items-center gap-[16px] border-b border-b-grey400 pb-[16px] mb-[16px]'>
                                <span className='small font-semibold text-grey300 line-clamp-1'>Northern Ireland</span>
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="radio" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select5" />
                                            <label htmlFor="select5" className="check-label flex justify-center items-center w-[90px] Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">
                                                <span className='selected'>Selected</span><span className='select'>Select</span>
                                            </label>                            
                                        </div>
                                    </div>                                
                                </div>
                            </li>
                            <li className='flex justify-between items-center gap-[16px] border-b border-b-grey400 pb-[16px] mb-[16px]'>
                                <span className='small font-semibold text-grey300 line-clamp-1'>Channel Islands</span>
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="radio" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select6" />
                                            <label htmlFor="select6" className="check-label flex justify-center items-center w-[90px] Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">
                                                <span className='selected'>Selected</span><span className='select'>Select</span>
                                            </label>                            
                                        </div>
                                    </div>                                
                                </div>
                            </li>                                                                                    
                        </ul>
                    </div>
                    <div className='apply-card flex p-[8px] absolute left-0 bottom-0 w-full gap-[8px] shadow-custom-10 z-4'>
                       <ul className='flex justify-between items-center w-full'>
                            <li className='w-[50%] text-center'><span className='para font-semibold text-primary-400 hover:text-primary-500 cursor-pointer hover:underline p-[12px_16px]'>Cancel</span></li>
                            <li className='w-[50%]'><button className="btn btn-primary text-[18px] flex items-center justify-center min-w-[180px] w-full gap-[8px] p-[13px_20px] group-hover:bg-primary-500">Apply</button></li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>
    </>  
  )
}

export default Locationmodalcomponents
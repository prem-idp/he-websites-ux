"use client";
import React from 'react'
import Image from 'next/image'
import { useState ,useEffect} from 'react';

const Courseinfomodalcomponents = ({ isOpen, onClose, data, setSelectedavailability,selectedavilability }: any) => {
//   console.log(selectedavilability,"----------")
    const [selectedCourse, setSelectedCourse] = useState(selectedavilability)

    function handleApply() {
        setSelectedavailability(selectedCourse);
        onClose()
    }
  
  useEffect(()=>{
    setSelectedCourse(selectedavilability);
  },[isOpen])

    return (

         <>
            <div onClick={() => onClose()} className={`${isOpen ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[7]`}>
            </div>
            <div className={`${isOpen ? "translate-x-0 opacity-[1]" : "-translate-x-full opacity-0"} transition-all duration-300 modal modal-container shadow-custom-6 w-full md:w-[375px] fixed top-0 left-0 z-[8]`}>
                <div className={`modal-box p-[16px_0_16px_16px] bg-white overflow-hidden h-[100vh]`}>
                    <div onClick={() => onClose()} className='modal_close absolute top-[16px] right-[16px] z-[1] cursor-pointer'>
                        <Image className='block' src="/static/assets/icons/modal_close.svg" width="12" height="12" alt='modal close' />
                    </div>
                    <div className='select-subject-container flex flex-col gap-[16px]'>
                        <div className='select-subject-card pr-[16px] custom-scrollbar-2 overflow-y-auto h-[calc(100vh_-_82px)]'>
                            <div className='flex flex-col gap-[16px]'>
                                <div className='card-header flex flex-col gap-[4px]'>
                                    <div className='h5 text-grey300'>Course info</div>
                                    <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                                </div>
                                <div className='option-list-card flex flex-col'>
                                    {data?.courseInfo?.availability?.map((val: any, index: any) => (
                                        <div key={index} className='option-list flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                                            <div className='flex justify-start items-start gap-[8px]'>
                                                <span className='small font-semibold text-grey300'>Qualification</span>
                                                <span className='small text-grey300'>{val?.qualification}
                                                </span>
                                            </div>
                                            <div className='flex justify-start items-start gap-[8px]'>
                                                <span className='small font-semibold text-grey300'>Location</span>
                                                <span className='small text-grey300'>{val?.venueName}                                   </span>
                                            </div>
                                            <div className='flex justify-start items-start gap-[8px]'>
                                                <span className='small font-semibold text-grey300'>Study mode</span>
                                                <span className='small text-grey300'>{val?.studyModeDesc}
                                                </span>
                                            </div>
                                            <div className='flex justify-start items-start gap-[8px]'>
                                                <span className='small font-semibold text-grey300'>Start date</span>
                                                <span className='small text-grey300'>{val?.startDateMonth}
                                                </span>
                                            </div>
                                            <div className='flex justify-start items-start gap-[8px]'>
                                                <span className='small font-semibold text-grey300'>Duration</span>
                                                <span className='small text-grey300'>{val?.durationDesc}
                                                </span>
                                            </div>

                                            <div className='modal-select'>
                                                <div className='form_check'>
                                                    <div className="col flex relative">
                                                        <input type="radio" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id={`select${index}`} checked={selectedCourse?.availabilityId === val?.availabilityId} onChange={() => setSelectedCourse(val)} value={val.availabilityId} />
                                                        <label htmlFor={`select${index}`} className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className={selectedCourse?.availabilityId === val?.availabilityId ? "selected" : "select"}>
                                                            {selectedCourse?.availabilityId === val?.availabilityId ? "Selected" : "Select"}
                                                        </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='apply-card flex p-[8px] absolute left-0 bottom-0 w-full gap-[8px] shadow-custom-10 z-4'>
                            <ul className='flex justify-between items-center w-full'>
                                <li onClick={() => onClose()} className='w-[50%] text-center'><span className='para font-semibold text-primary-400 hover:text-primary-500 cursor-pointer hover:underline p-[12px_16px]'>Cancel</span></li>
                                <li className='w-[50%]'><button onClick={() => handleApply()} className="btn btn-primary text-[18px] flex items-center justify-center min-w-[180px] w-full gap-[8px] p-[13px_20px] group-hover:bg-primary-500">Apply</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Courseinfomodalcomponents
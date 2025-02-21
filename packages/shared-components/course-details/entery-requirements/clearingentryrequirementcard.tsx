import React from 'react'
import Link from 'next/link'

const Clearingentryrequirementcard = ({ onOpenModal }:any) => {
  return (
<div className='card flex flex-col gap-[12px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
        {/* -- */}
        <div className='flex flex-col gap-[10px]'>
            <div className='card-header flex items-start'>
                <div className='para font-semibold text-black'>Required UCAS points</div>
            </div>
            <div className="course-highlight__details w-full grid grid-cols-1 gap-[16px]">
                <div className="course-highlight__option  flex flex-col items-start gap-[16px] bg-primary-50 rounded-[8px] p-[16px]">                      
                <div className="flex flex-col gap-[4px]">
                    <div className="para font-semibold text-grey300">306 UCAS points</div>
                    <p className="small text-grey300">This score is only meant for guidance. We recommend you speak to the university directly to find out their accepted grades for this course.</p>
                </div>
                </div>
            </div>
            <div className='flex items-center gap-[4px] *:text-x-small'>
                <div className='text-grey300'>DATA SOURCE:</div>
                <Link href='#' className='uppercase text-primary-400 hover:underline'>HESA</Link>
            </div> 
        </div>
        {/* -- */}
        {/* -- */}
        <div className='flex flex-col gap-[10px]'>
            <div className='card-header flex items-start'>
                <div className='para font-semibold text-black'>Your UCAS points</div>
            </div>
            <div className="course-highlight__details w-full grid grid-cols-1 gap-[16px]">
                <div className="course-highlight__option  flex flex-col items-start gap-[16px] bg-primary-50 rounded-[8px] p-[16px]">                      
                    <div className="flex flex-col gap-[4px]">
                        <div className="para font-semibold text-grey300">You haven’t added your grades</div>
                        <p className="small text-grey300">This will show you how likely you are to be accepted for a course.</p>
                        <button type="button" className={`btn btn-blue w-fit`}>Enter grades</button>
                    </div>
                </div>
            </div>
        </div>
        {/* -- */}
        {/* -- */}
        <div className='flex flex-col gap-[10px]'>
            <div className='card-header flex items-start'>
                <div className='para font-semibold text-black'>Your UCAS points</div>
            </div>
            <div className="course-highlight__details w-full grid grid-cols-1 gap-[16px]">
                <div className="course-highlight__option  flex flex-col items-start gap-[16px] bg-primary-50 rounded-[8px] p-[16px]">                      
                    <div className="flex flex-col gap-[8px] md:gap-[4px]">
                        <div className='flex flex-col md:flex-row justify-between gap-[8px]'>    
                            <div className="para font-semibold text-grey300">310 UCAS points</div>
                            <div className='flex items-center gap-[4px]'>
                                <div className='x-small font-semibold text-success-700 uppercase'>VERY LIKELY</div>                                
                                <div className='flex gap-[2px] items-center *:w-[10px] *:h-[8px] *:bg-success-500'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                </div>
                            </div>
                        </div>    
                        <p className="small text-grey300">Your chance of gaining a place on this course based on the grades you entered are [high/low]. We recommend you    contact the university or visit their website if you're interested in this course and have further questions about entry requirements.</p>                        
                    </div>
                </div>
            </div>
            <div className='group flex items-center gap-[4px] x-small text-primary-400 hover:text-primary-500 underline cursor-pointer'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    className='group-hover:stroke-primary-500'
                    d="M7.66678 6.11111H12.3334M12.3334 13.8889V11.5556M10.0001 13.8889H10.0079M7.66678 13.8889H7.67456M7.66678 11.5556H7.67456M10.0001 11.5556H10.0079M12.3334 9.22222H12.3412M10.0001 9.22222H10.0079M7.66678 9.22222H7.67456M6.11122 17H13.889C14.7481 17 15.4446 16.3036 15.4446 15.4444V4.55556C15.4446 3.69645 14.7481 3 13.889 3H6.11122C5.25211 3 4.55566 3.69645 4.55566 4.55556V15.4444C4.55566 16.3036 5.25211 17 6.11122 17Z"
                    stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Recalculate my UCAS points
            </div> 
        </div>
        {/* -- */}      
</div>
  )
}

export default Clearingentryrequirementcard



import React from 'react'
import Image from 'next/image'

const AdviceCourseCard = () => {
  return (
    <div className='advice-course-container'>
        <div className='advicecourse-inner-wrap'>
            <div className='card flex flex-col bg-white rounded-[8px] overflow-hidden shadow-custom-2'>
                <div className='card-header'>
                    <Image src="/assets/images/article_image1.jpg" width="392" height="221" className='block w-full h-auto' alt='Article_image' />
                </div>            
                <div className='card-body flex flex-col gap-[10px] p-[16px]'>
                    <h5 className='card-title font-semibold text-para-lg text-grey300 line-clamp-2'>Everything you need to know about University Open Days</h5>
                    <p className='card-description font-normal small text-grey-700 line-clamp-2'>You’ve probably heard from your teachers, friends or parents about university open days and campus tours. But what exactly are they, and what can you get out of them? Let’s go through everything about uni open days step by step.</p>
                    <p className='card-date font-normal x-small text-grey300'>11 oct 2023</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdviceCourseCard
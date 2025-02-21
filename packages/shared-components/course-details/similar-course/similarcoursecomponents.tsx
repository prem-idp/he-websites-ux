// import Similarcoursecard from '@/app/components/cards/similar-course-card/similarcoursecard'

'use client'
import Similarcoursecard from "@packages/shared-components/common-utilities/cards/similar-course-card/similarcoursecard"
import React from 'react'

const Similarcoursecomponents = () => {
  return (
    <>
        <div className='similar-container bg-grey-50'> 
            <div className="max-w-container mx-auto">
                <div className='similar-card-container flex flex-col gap-[32px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
                    <div className='similar-header  flex flex-col gap-[4px]'>
                        <div className="h2 font-bold">Similar courses at this uni</div>
                    </div>
                    <div className='similar-course-container '>
                        <div className="similar-inner-wrap"> 
                            <Similarcoursecard></Similarcoursecard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    </>
  )
}

export default Similarcoursecomponents
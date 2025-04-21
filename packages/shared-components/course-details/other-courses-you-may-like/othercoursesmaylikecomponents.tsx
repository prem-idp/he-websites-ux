import Othercoursesslidercomponents from '@/app/components/slider/othercoursesslidercomponents'
import React from 'react'

const Othercoursesmaylikecomponents = () => {
  return (
    <div className='other-courses-container bg-white'> 
    <div className="max-w-container mx-auto">
        <div className='other-courses-card-container px-[0] py-[34px] md:py-[64px]'>
            <div className='other-courses-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]'>
                <div className="h2 font-bold">Other courses you may like</div>
            </div>
            <div className='other-courses-course-container '>
              <div className="other-courses-inner-wrap"> 
                <Othercoursesslidercomponents />
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Othercoursesmaylikecomponents
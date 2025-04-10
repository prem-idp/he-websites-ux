import Othercoursesslidercomponents from '@packages/shared-components/common-utilities/slider/othercoursesslidercomponents'
import React from 'react'

const Seasonwuscacomponents = () => {
  return (
    <div className='maincard-container bg-white'> 
    <div className="max-w-container mx-auto">
        <div className='card-container px-[0] py-[34px] md:py-[64px]'>
            <div className='card-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]'>
                <div className="h2 font-bold">Heading</div>
                <p className='font-normal small'>Unsure which scholarship to consider? Take a look at some popular ones</p>
            </div>
            <div className='card-course-container '>
              <div className="card-inner-wrap"> 
                <Othercoursesslidercomponents seasonWusca={true} />
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Seasonwuscacomponents
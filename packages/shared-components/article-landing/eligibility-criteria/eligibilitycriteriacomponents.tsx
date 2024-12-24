import Eligibilitycriteriacard from '@/app/components/cards/eligibility-criteria/eligibilitycriteriacard'
import React from 'react'

const Eligibilitycriteriacomponents = () => {
  return (
    <div className='eligibility-container bg-grey-50'> 
    <div className="max-w-container mx-auto">
        <div className='eligibility-card-container flex flex-col gap-[32px] px-[16px] md:px-[20px] xl:px-[0] py-[34px] md:py-[64px]'>
            <div className='eligibility-header'>
                <div className="h2 font-bold">Heading</div>
                <p className='font-normal small mt-[8px]'>Subheading</p>
            </div>
            <div className='eligibility-course-container '>
              <div className="eligibility-inner-wrap grid grid-cols-3 gap-[16px]"> 
                  <Eligibilitycriteriacard />
                  <Eligibilitycriteriacard />
                  <Eligibilitycriteriacard />
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Eligibilitycriteriacomponents
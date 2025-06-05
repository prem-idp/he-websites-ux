import React from 'react'
import AdviceCourseCard from '../cards/advice-course/advicecoursecard'
import Paginations from '../paginations/paginations'
import Othercoursesmaylikecard from '../cards/other-courses-you-may-like/othercoursesmaylikecard'

const Opendaysrgridcomponents = () => {
  return (
    <>
        <div className="advice-container bg-grey-50">
            <div className='max-w-container mx-auto'>
                <div className='advice-card-container md:gap-[32px] px-[16px] md:px-[20px] py-[34px] lg:py-[64px] lg:px-[0]'>
                    <div className="advice-header mb-[26px] md:mb-[32px]">
                        <h2 className="font-bold">Latest advice</h2>
                        <p className="font-normal small mt-[8px]">Subheading</p>
                    </div>
                    <div className='advice-inner-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                        
                        {[1,2,3,4,5,6].map(()=>(
                            <Othercoursesmaylikecard />
                        ))}
                        

                    </div>
                    <Paginations />
                </div>
            </div>
        </div>
    </>
  )
}

export default Opendaysrgridcomponents
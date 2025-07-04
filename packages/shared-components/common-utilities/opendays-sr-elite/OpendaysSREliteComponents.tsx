import React from 'react'
import OpendaysSliderComponents from '../OpendaysSliderComponents/OpendaysSliderComponents'

const OpendaysSREliteComponents = ({title, description, data, bgColor, openDays, featureOpd}: any) => {
  return (
    <>
        <div className={`other-courses-container bg-${bgColor}`}> 
            <div className="max-w-container mx-auto">
                <div className='other-courses-card-container px-[0] py-[16px] md:py-[40px]'>
                    <div className='other-courses-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[16px] md:mb-[16px]'>
                        <div className="h5 font-bold">{title}</div>
                        {description && <p className='small text-grey300'>{description}</p>}
                    </div>
                    <div className='other-courses-course-container '>
                        <div className="other-courses-inner-wrap">
                            <OpendaysSliderComponents data={data} bgColor={bgColor} openDays={openDays} featureOpd={featureOpd} />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default OpendaysSREliteComponents
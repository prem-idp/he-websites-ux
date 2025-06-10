import React from 'react'
import Paginations from '../paginations/paginations'
import Opendayscard from '../cards/opendays-card/Opendayscard'

const Opendaysrgridcomponents = ({title, description, data, bgColor, anyTimeEvents, providerOpenDays, onlineOpendays}: any) => {
  return (
    <>
        <div className={`advice-container bg-${bgColor}`}>
            <div className='max-w-container mx-auto'>
                <div className='advice-card-container md:gap-[32px] px-[16px] md:px-[20px] py-[34px] lg:py-[64px] lg:px-[0]'>
                    <div className="advice-header mb-[16px]">
                         <h5 className="font-bold">{title}</h5>
                        {providerOpenDays ||  onlineOpendays ?  '' : (
                            <p className="font-normal small mt-[8px]">{description}</p>
                        ) }                        
                    </div>
                    <div className='advice-inner-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>                        
                        {data?.map((item: any, index: number) => (
                            <Opendayscard {...item} providerOpenDays={providerOpenDays} onlineOpendays={onlineOpendays} key={index} />
                        ))}
                    </div>
                    {anyTimeEvents ? (
                        <div className='flex justify-center py-[24px] pb-[0]'>
                            <button type='button' className='btn btn-primary-outline para-lg group flex items-center justify-center gap-[8px] p-[11px_24px] rounded-[40px] w-fit'>
                                <span>View more</span><span>+</span>                            
                            </button>
                        </div>
                    ): ( 
                        <Paginations openDays={true} />
                    )}
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Opendaysrgridcomponents
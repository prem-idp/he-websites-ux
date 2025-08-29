import Othercoursesmaylikecard from '@packages/shared-components/common-utilities/cards/other-courses-you-may-like/othercoursesmaylikecard'
import React from 'react'

const ActivityOpendayGridComponents = () => {
  return (
    <>
        <div className="advice-container bg-grey-50">
            <div className='max-w-container mx-auto'>
                <div className='advice-card-container md:gap-[32px] px-[16px] py-[0px] lg:px-[0]'>
                    {/* <div className="advice-header mb-[26px] md:mb-[32px]">
                        <h2 className="font-bold">Latest advice</h2>
                        <p className="font-normal small mt-[8px]">Subheading</p>
                    </div> */}
                    <div className='advice-inner-wrap grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                        <Othercoursesmaylikecard seasonWusca ='true' openDays={openDays} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ActivityOpendayGridComponents
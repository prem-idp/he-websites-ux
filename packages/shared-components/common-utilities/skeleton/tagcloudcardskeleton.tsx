import { Span } from 'next/dist/trace'
import React from 'react'

const Tagcloudcardskeleton = () => {
  return (
    <div className='tag-cloud-container'> 
    <div className='tag-cloud-card-container flex flex-col gap-[16px] px-[20px] lg:px-[0] pt-[32px]'>
        <div className='tag-cloud-header'>
            <h6 className='font-bold'><div className="skeleton skeleton-text skeleton-text-animated large_heading !w-[20%]"></div></h6>
        </div>
          <div className="tag-cloud-inner-wrap"> 
            <ul className='flex flex-wrap gap-[8px]'>
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-20"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-20"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-24"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-44"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-20"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-60"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-20"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-20"></div></li>                                                                         
                <li className='bg-grey-100 px-[8px] py-[2px] rounded-[4px]'><div className="skeleton skeleton-text skeleton-text-animated descrip !w-48"></div></li>                                                                         
            </ul>
          </div>
</div>
</div>
  )
}

export default Tagcloudcardskeleton
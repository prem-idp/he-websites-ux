import Link from 'next/link'
import React from 'react'

const Tagcloudcomponents = () => {
  return (
    <div className='tag-cloud-container'> 
        <div className='tag-cloud-card-container flex flex-col gap-[16px] px-[20px] lg:px-[0] pt-[32px]'>
            <div className='tag-cloud-header'>
                <h6 className='font-bold'>Tag cloud heading</h6>
            </div>
              <div className="tag-cloud-inner-wrap"> 
                <ul className='flex flex-wrap gap-[8px]'>
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                </ul>
              </div>
    </div>
  </div>
  )
}

export default Tagcloudcomponents
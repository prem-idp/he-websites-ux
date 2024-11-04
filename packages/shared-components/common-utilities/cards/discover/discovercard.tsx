import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Discovercard = () => {
  return (
        <div className="discover-card">
            <Link href="#" className='bg-primary-100 rounded-[8px] overflow-hidden'>
                <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>courses</div>
                        <h5 className='font-bold'>Looking for courses?</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>                                                  
        </div>
  )
}

export default Discovercard
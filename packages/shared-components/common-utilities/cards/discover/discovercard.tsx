import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Discovercard = () => {
  return (
    <div className="discover">
    <Link href="" className='block bg-secondary-200 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
            <div className='discover-card flex justify-between gap-[8px]'>
            <div className="flex flex-col justify-between p-[20px] pr-[0]">
                <div className='w-fit uppercase font-bold x-small text-positive-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>universities</div>
                <h5 className='font-bold'>Pick your perfect uni</h5>
            </div>
            <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
        </div>
    </Link>
    </div>
  )
}

export default Discovercard
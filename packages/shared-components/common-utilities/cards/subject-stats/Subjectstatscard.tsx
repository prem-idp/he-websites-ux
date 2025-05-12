import React from 'react'
import Image from 'next/image'

const Subjectstatscard = ({src, title, description}: any) => {
    console.log(src, title, description)
  return (
        <div className='card-body flex flex-col gap-[8px]'>
            <div className='card-header w-[48px]'>
                <Image src={src} width="48" height="48" className='block w-full h-auto min-h-[48px]' alt='Article_image' />
            </div>
            <div className='flex flex-col'>
                <div className='card-title h3 text-white line-clamp-2'>{title}</div>
                <p className='card-description font-normal small text-white line-clamp-4'>{description}</p>
            </div> 
        </div>
  )
}

export default Subjectstatscard
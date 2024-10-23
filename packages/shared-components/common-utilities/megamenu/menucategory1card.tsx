import Link from 'next/link'
import React from 'react'

const Menucategory1card = () => {
  return (
    <div className="dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px]">
        <div className='font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]'>Category heading</div>
        <ul className='grid grid-cols-1 gap-[16px] p-[16px] lg:p-[0] bg-white'>
            <li><Link href="#" className='font-normal small text-grey300 hover:underline line-clamp-2'>Menu link 1</Link></li>
            <li><Link href="#" className='font-normal small text-grey300 hover:underline line-clamp-2'>Menu link 1</Link></li>
            <li><Link href="#" className='font-normal small text-grey300 hover:underline line-clamp-2'>Menu link 1</Link></li>
            <li><Link href="#" className='font-normal small text-grey300 hover:underline line-clamp-2'>Menu link 1</Link></li>
            <li><Link href="#" className='font-normal small text-grey300 hover:underline line-clamp-2'>Menu link 1</Link></li>
            <li><Link href="#" className='font-normal small text-grey300 hover:underline line-clamp-2'>Menu link 1</Link></li>
        </ul>
    </div>
  )
}

export default Menucategory1card
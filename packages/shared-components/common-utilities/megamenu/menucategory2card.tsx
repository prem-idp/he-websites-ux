import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Menucategory2card = () => {
  return (
    <div className="dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px]">
      <div className='font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]'>Category heading</div>
      <ul className='grid grid-cols-1 gap-[16px] p-[16px] lg:p-[0] bg-white'>
      <li><Link href="#" className='flex items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>
      <li><Link href="#" className='flex items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img2.png" width="44" height="44" quality={100} alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>
      <li><Link href="#" className='flex items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img3.png" width="44" height="44" alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>
      <li><Link href="#" className='flex items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img4.png" width="44" height="44" alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>                            
    </ul>
  </div>
  )
}

export default Menucategory2card
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Menucategory3card = () => {
  return (
    <div className="dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px]">
    <div className='font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]'>Category heading</div>
    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[16px] p-[16px] lg:p-[0] bg-white'>
      <li><Link href="#" className='flex flex-row lg:flex-col items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[40px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[72px]" src="/assets/images/megamenu/menu-thumb-img1.png" width="72" height="72" loading="lazy" alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>
      <li><Link href="#" className='flex flex-row lg:flex-col items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[40px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[72px]" src="/assets/images/megamenu/menu-thumb-img2.png" width="72" height="72" loading="lazy" alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>
      <li><Link href="#" className='flex flex-row lg:flex-col items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[40px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[72px]" src="/assets/images/megamenu/menu-thumb-img3.png" width="72" height="72" alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>
      <li><Link href="#" className='flex flex-row lg:flex-col items-center gap-[10px] font-normal small text-grey300 hover:underline'>
      <Image className="block rounded-[40px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[72px]" src="/assets/images/megamenu/menu-thumb-img4.png" width="72" height="72" alt="Megamenu thumb" /> <span className='line-clamp-1'>Menu link 1</span></Link></li>                            
    </ul>
  </div>
  )
}

export default Menucategory3card
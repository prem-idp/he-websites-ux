import React from 'react'
import Link from 'next/link'

const Footercomponent = () => {
  return (
    <>
    <footer className="bg-primary-100">
      <div className="max-w-container mx-auto py-[40px] px-[16px]  md:px-[20px] xl:px-[0]">       
        <div className='flex flex-col md:flex-row justify-between items-center gap-[40px]'>
          <ul className='flex gap-[40px]'>
              <li><Link href="#" className='small text-text-grey300 underline'>Terms & Conditions</Link></li>
              <li><Link href="#" className='small text-text-grey300 underline'>Privacy Notice</Link></li>
          </ul>
          <div className="copyrights">
            <p className="x-small text-grey300 text-center">
              © 2007-2024 IDP Connect Ltd. All rights reserved
            </p>
          </div>
        </div>
      </div>    
    </footer>
    </>
  )
}

export default Footercomponent
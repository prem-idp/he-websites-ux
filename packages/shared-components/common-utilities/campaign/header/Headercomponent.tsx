import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Headercomponent = () => {
  return (
    <>
        <header className="bg-blue-100 md:bg-white shadow-custom-3 px-[16px]  md:px-[20px] xl2:px-0 relative">
            <div className='flex items-center justify-center'>
                <div className='logo py-[4px] lg:py-[8px] w-[51px] lg:w-[54px]'>
                    <Link href="#">
                        <Image className="w-full md:mx-auto lg:mx-0" src="/static/assets/images/whatuni-logo.svg"
                            alt="Whatuni Logo" width={58} height={64} />
                    </Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Headercomponent
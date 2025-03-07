import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Noreviewmatchcomponents = () => {
  return (
    <>
    <div className='no-review-match flex flex-col items-center gap-[8px]'>
        <Image src="/assets/icons/course-details/no_results_icon.svg" alt="" width={26} height={24} />
        <div className='para font-semibold text-grey300'>There are no reviews that match your filters.</div>
        <p className='small text-grey300'>some description that would encourage users to get back on track and get out of this high friction scenario</p>
        <Link href="#" className='btn btn-primary para flex items-center justify-center w-fit min-w-[187px] gap-[8px] mt-[8px]'>View all reviews <Image src="/assets/icons/right_white_arrow.svg" width="17" height="14" alt="arrow icon" />
        </Link>
        <Link href="#" className='small text-primary-400 hover:text-primary-500 underline'>X Clear filters</Link>
    </div>
    </>
  )
}

export default Noreviewmatchcomponents
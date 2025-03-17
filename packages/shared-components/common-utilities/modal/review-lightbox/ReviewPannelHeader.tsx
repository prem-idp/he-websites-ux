import Link from "next/link"
import { ReactElement } from "react"

const ReviewPannelHeader: React.FC = (): ReactElement => {
    return (
        <div className='card-header flex flex-col gap-[4px] md:gap-[8px]'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-[4px]'>
                <span className='h5 text-grey300'>Student reviews: business</span>
                <Link href="" className='small text-primary-400 underline hover:text-primary-500 hidden md:block'>Write a review</Link>
            </div>
            <p className='para font-semibold text-grey300'>University of Portsmouth</p>
            <Link href="" className='small text-primary-400 underline hover:text-primary-400 md:hidden'>Write a review</Link>
            <div className="tooltip w-fit group/item text-grey300 small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                Real student experiences
                <div className="tooltip-wrap flex-col w-[324px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] shadow-custom-12 mt-[8px] absolute top-[17px]  left-0 z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[25%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']">
                    <span className="font-semibold tooltip-head">
                        Why do we need your dummy text?
                    </span>
                    <p className="x-small">
                        We collect reviews from students online and at uni campuses to upload later. Come say hi if you see us!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewPannelHeader;
import { PercentageBar } from "../common-components/PercentageBar";
import { DropDown } from "./DropDown";
import Image from 'next/image';

const OverallRating = () => {
    return (
        <div className='px-[16px] md:px-[20px] xl:px-[0]'>
            <div className='card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header flex flex-col gap-[8px]'>
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                        <div className='h5 text-grey300'>How animation students rated:</div>
                        <div className='relative group flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer pb-[10px] mb-[-10px]'>University Rating
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <DropDown />
                        </div>
                    </div>
                    <div className='rating-pod flex items-center gap-[8px]'>
                        <div className='rating-card flex items-center gap-[4px]'>
                            <span className='reviewLink para text-grey300'>Overall rating</span>
                            <Image src="/static/assets/icons/blue-star-icon.svg" width={24} height={24} alt="Rating icon" />
                            <span className='font-normal small text-grey300'>4.6</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-[8px]'>
                    {[1, { percentage: 20 }].map((subject: any, idx: number) => <PercentageBar key={idx} {...subject} />)}
                </div>
            </div>
        </div>
    )
}

export default OverallRating;
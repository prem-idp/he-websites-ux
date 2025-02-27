'use client'
import { useState } from "react";

const ReadMoreLessDesc = ({ text }: { text: string }) => {

    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <div className='flex flex-col items-start gap-[8px] px-[16px] md:px-[20px] xl:px-[0]'>
            <div className='rtf-innerstyle flex flec-col gap-[16px]'>
                <p className={`para font-normal ${isReadMore ? "" : "line-clamp-3"}`}>{text}</p>
            </div>
            <div className='small font-semibold text-primary-400 hover:underline cursor-pointer'
                onClick={() => setIsReadMore((prev) => !prev)}>{isReadMore ? "- Read less" : "+ Read more"}
            </div>
        </div>)
}

export default ReadMoreLessDesc;
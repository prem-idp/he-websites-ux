import React from 'react'

const Tickertape = () => {
    return (
        <div className="bg-orange-200 flex items-center justify-center marquee-container overflow-hidden whitespace-nowrap py-[12px] fixed w-full bottom-0">
            <ul className="marquee flex gap-[32px] x-small font-semibold uppercase tracking-[1px]">
                <li>
                    DON’T MISS - OPEN DAY - <a href="" className="text-primary-400 underline">  UNIVERSITY OF BANGOR </a> - 14th NOVEMBER
                </li>
                <li className="list-disc pl-[10px]">
                    TAKE our - <a href="" className="text-primary-400 underline"> latest survey</a>
                </li>
            </ul>
        </div>
    )
}

export default Tickertape
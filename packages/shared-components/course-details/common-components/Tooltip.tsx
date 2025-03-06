'use client';
import React from 'react';

const Tooltip = ({ heading, desc }: any) => {
    return (
        <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
        shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
        >
            {heading && <span className="font-semibold tooltip-head">
                {heading}
            </span>}
            {desc && <p className="x-small">
                {desc}
            </p>}
        </div>
    )
}

export default Tooltip;
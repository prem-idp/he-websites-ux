import React from "react";
import Link from "next/link";

const Findoutmore = () => {
  return (
    <div className="px-[16px] md:px-[20px] lg:px-0">
      <div className="px-[20px] bg-grey-50 py-[16px] border-grey-500 border-l-4 flex flex-col gap-[8px]">
        <span className="x-small uppercase tracking-[1px] font-semibold grey300">
          FIND OUT MORE
        </span>
        <Link className="para hover:underline text-blue-400" href="#">
          Link text goes here
        </Link>
        <Link className="para hover:underline text-blue-400" href="#">
          Link text goes here
        </Link>
      </div>
    </div>
  );
};

export default Findoutmore;

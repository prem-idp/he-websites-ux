import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ctabanner = ({
  title,
  description,
  buttonName,
  bannerSrc,
  bgColor,
}: any) => {
  return (
    <div className="px-[16px] md:px-[20px] lg:px-0">
      <div
        className={`${bgColor} p-[16px] md:py-[0] gap-[20px] md:gap-[0]  md:px-[20px] rounded-[8px] flex md:flex-row flex-col-reverse justify-between items-end !m-0`}
      >
        <div className="flex flex-col gap-[16px] py-[0] md:py-[24px] !m-0">
          <div className="text-grey300 flex flex-col gap-[4px]">
            <div className="h4 heading4 font-semibold font-farro">{title}</div>
            <div className="font-inter font-normal small">{description}</div>
          </div>

          <Link
            href="#"
            className="btn btn-primary rtfcustom-link hover:no-underline px-[20px] py-[10px] w-fit !no-underline"
          >
            {buttonName}
          </Link>
        </div>
        <span className="md:min-w-[219px] w-full md:w-auto h-[187px] flex justify-center !m-0">
          <Image width="219" height="187" alt="banner" src={bannerSrc} />
        </span>
      </div>
    </div>
  );
};

export default Ctabanner;

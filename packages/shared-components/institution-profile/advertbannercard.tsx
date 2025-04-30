import React from "react";
import Image from "next/image";
import Link from "next/link";

const Advertbannercard = ({
  tagline,
  title,
  description,
  buttonName,
  bannerSrc,
  bgColor,
}: any) => {
  return (
    <>
      <div className="px-[16px] md:px-[20px] lg:px-0">
        <div className={`flex flex-1 ${bgColor} rounded-[8px] overflow-hidden`}>
          <div className=" hidden md:flex min-w-[130px] max-w-[130px]">
            <Image
              className="h-fit"
              width="130"
              height="188"
              alt="banner"
              src={bannerSrc}
            />
          </div>
          <div className="flex flex-col flex-1 gap-[16px] p-[16px]">
            <div className="text-grey300 flex flex-col gap-[4px]">
              <div className="x-small font-semibold uppercase">{tagline}</div>
              <div className="h5 font-semibold line-line-clamp-1">{title}</div>
              <div className="small font-normal md:min-h-[42px] line-clamp-2">
                {description}
              </div>
            </div>
            <Link
              href="#"
              className="flex gap-[8px] justify-center items-center btn btn-primary rtfcustom-link hover:no-underline px-[20px] py-[10px] w-full !no-underline"
            >
              {buttonName}
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999"
                  stroke="#fff"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertbannercard;

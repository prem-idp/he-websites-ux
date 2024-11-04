import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroComponent = () => {
  return (
    <>
      <div className="flex justify-between gap-[16px]">
        <div className="w-full pt-[64px] pb-[40px] md:pt-[68px] md:pb-[108px] lg:py-[88px]">
          <h1 className="text-heading-lg mb-[4px]">
            Nam vitae porttitor lorem. Vestibulum vel felis
          </h1>
          <p className="para-lg mb-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vestibulum neque lectus, molestie congue risus
          </p>
          <Link
            href="#"
            className="flex items-center gap-[6px] w-fit bg-primary-400 hover:bg-primary-500 text-white rounded-[20px] font-semibold text-small px-[20px] py-[10px] cursor-pointer"
          >
            Learn more
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
        <div className="md:w-[354px] lg:w-[495px] shrink-0 self-end md:pb-[80px] lg:pb-0 hidden md:block">
          <Image
            src="/assets/images/hero-banner.png"
            width={495}
            height={483}
            alt="Here Banner"
          />
        </div>
      </div>
    </>
  );
};

export default HeroComponent;

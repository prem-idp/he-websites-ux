import React from "react";
import Image from "next/image";
import Link from "next/link";
import Visitwebsite from "../cards/interaction-button/visitwebsite";
import Getprospectus from "../cards/interaction-button/getprospectus";
import RequestInfo from "../cards/interaction-button/requestinfo";
import BookOpenDay from "../cards/interaction-button/bookopenday";

const HeaderBanner = () => {
  return (
    <>
      <section>
        <div className="relative">
          <Image
            className="w-full max-h-[320px] object-cover object-cente"
            loading="lazy"
            width={800}
            height={320}
            src="/static/assets/images/ip/header-banner.jpg"
            alt="header-banner"
          />
          <div className="bg-gradient14 absolute top-[0] w-full h-full py-[24px]">
            <div className="max-w-container mx-auto h-full px-[16px] md:px-[24px] xl:px-[0]">
              <div className="flex flex-col h-full w-full justify-between">
                <div className="flex justify-end w-full">
                  <button className="small flex gap-[6px] px-[10px] py-[6px] rounded-[16px] bg-grey-100 text-grey-500">
                    <Image
                      src="/static/assets/icons/ip/show-gallery.svg"
                      alt="gallery"
                      width={20}
                      height={20}
                    />
                    Show gallery
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-[16px]">
                    <span className="p-[4px] bg-white rounded-[12px] hidden md:block shadow-custom-1 min-w-[100px] h-[100px]">
                      <Image className="h-full"
                        src="/static/assets/icons/ip/uni.svg"
                        alt="University logo"
                        width={100}
                        height={100}
                      />
                    </span>
                    <div className="text-white flex flex-col gap-[4px]">
                      <div className="h3">Middlesex University</div>

                      <div className="flex flex-wrap items-center gap-[8px] small">
                        <span className="flex items-center">
                          <Image
                            alt="blue star icon"
                            className="relative top-[-1px]"
                            width="24"
                            height="24"
                            src="/static/assets/icons/blue-star.svg"
                          />
                          4.3
                        </span>
                        <Link href="#" className="underline whitespace-nowrap ">
                          400 student reviews
                        </Link>
                        <Link href="#" className="underline whitespace-nowrap ">
                          Whatuni student ranking: 77th
                        </Link>
                      </div>
                      <ul className="flex mt-[4px] flex-wrap gap-[8px]">
                        <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-200 text-positive-dark xs-small">
                          clearing
                        </li>
                        <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                          VIRTUAL TOURS AVAILABLE
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-[8px]">
                                      
                    <span className="favorite group mr-[0] lg:mr-[10px]  items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                      <div className="heart min-w-[40px] w-[40px] h-[40px] bg-white border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                            stroke="#4664DC"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </span>
                    <div className="flex  gap-[8px]">
                                          <Getprospectus />
                                          <Visitwebsite />
                                          <BookOpenDay />
                                          <RequestInfo />

                                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderBanner;

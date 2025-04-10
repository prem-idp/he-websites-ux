import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Visitwebsite from "../cards/interaction-button/visitwebsite";
import Getprospectus from "../cards/interaction-button/getprospectus";
import RequestInfo from "../cards/interaction-button/requestinfo";
import BookOpenDay from "../cards/interaction-button/bookopenday";

const HeaderBanner = () => {
  const [btnHandler, setBtnHandler] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Get a value on scroll
  const handleScroll = () => {
    // Mobile
    if (window.innerWidth <= 767) {
      if (window.scrollY > 200) {
        setScrolled(true);
        console.log("scrolled");
      } else {
        setScrolled(false);
        // Optionally reset the button handler if needed
        // setBtnHandler(false);
      }
    } // Tablet
    else if (window.innerWidth <= 1200) {
      if (window.scrollY > 500) {
        setScrolled(true);
        setIsMobile(true);
        console.log("scrolled bbb");
      } else {
        setScrolled(false);
        setBtnHandler(false);
        // Optionally reset the button handler if needed
        // setBtnHandler(false);
      }
    } // Desktop
    else {
      if (window.scrollY > 450) {
        setScrolled(true);
        console.log("scrolled ccc");
      } else {
        setScrolled(false);
        // Optionally reset the button handler if needed
        // setBtnHandler(false);
      }
    }
  };
  if (btnHandler === false) {
    document.body.classList.remove("mb-[112px]");
    document.body.classList.add("mb-[72px]");
  }
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  const handleBodyClass = () => {
    if (isMobile && scrolled && !btnHandler) {
      document.body.classList.add("mb-[72px]");
      console.log("1");
    } else if (isMobile && scrolled && btnHandler) {
      document.body.classList.add("mb-[112px]");
      document.body.classList.remove("mb-[72px]");
      console.log("2");
    } else {
      document.body.classList.remove("mb-[112px]", "mb-[72px]");
      console.log("3");
    }
  };
  useEffect(() => {
    // Initial check on mount
    handleScroll();
    handleResize();
    handleBodyClass();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleResize);
    // Cleanup event listeners on component unmount
    return () => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleResize);
    };
  }, [isMobile, scrolled, btnHandler]);
  return (
    <>
      <section>
        <div className="relative mt-[120px] md:mt-[0px]">
          <Image
            className="w-full min-h-[330px] md:min-h-[380px] xl:max-h-[320px] object-cover object-cente"
            loading="lazy"
            width={800}
            height={320}
            src="/static/assets/images/ip/header-banner.jpg"
            alt="header-banner"
          />
          <div className="bg-gradient14 absolute top-[0] w-full h-full py-[16px] md:py-[24px]">
            <div className="max-w-container mx-auto h-full px-[16px] md:px-[24px] xl:px-[0]">
              <div className="flex flex-col h-full w-full justify-between">
                <div className="flex justify-end w-full">
                  <button className="small font-semibold hover:underline flex gap-[6px] px-[10px] py-[6px] rounded-[16px] bg-grey-100 text-grey-500">
                    <Image
                      src="/static/assets/icons/ip/show-gallery.svg"
                      alt="gallery"
                      width={20}
                      height={20}
                    />
                    Show gallery
                  </button>
                </div>
                <div className="flex md:flex-col xl:flex-row justify-between">
                  <div className="flex items-start flex-col xl:flex-row gap-[16px]">
                    <span
                      className={`${scrolled && "xl:hidden"} p-[4px] bg-white rounded-[12px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px] md:min-w-[100px] md:h-[100px]`}
                    >
                      <Image
                        className="h-full"
                        src="/static/assets/icons/ip/uni.svg"
                        alt="University logo"
                        width={100}
                        height={100}
                      />
                    </span>
                    <div className="text-white flex flex-col gap-[4px]">
                      <div className="h3">Middlesex University</div>

                      <div
                        className={`${scrolled && "xl:hidden"} flex flex-wrap items-center gap-[8px] small`}
                      >
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
                  <div
                    className={`${scrolled ? "md:fixed xl:relative md:bottom-[0px] xl:bottom-[unset] md:left-[0px] xl:left-[unset] md:px-[20px] md:py-[10px] md:w-full md:bg-grey300" : "md:pt-[12px]"} flex items-end xl:pt-[0] gap-[8px]`}
                  >
                    <div
                      className={`${btnHandler && scrolled && "grid-rows-2"} ${scrolled ? "fixed md:relative bottom-[0px] md:bottom-[unset] left-[0] md:left-[unset] grid-cols-2 md:grid-cols-4 " : "left-[0px] md:left-[0px] top-[-120px] md:top-[unset] absolute md:relative md:p-[0px] grid-cols-2 md:grid-cols-4"} w-full bg-grey300 xl:bg-transparent grid items-end p-[16px] md:p-[0] gap-[8px]`}
                    >
                      {scrolled && isMobile && (
                        <div className="absolute flex justify-center top-[-27px] w-full md:hidden">
                          {btnHandler ? (
                            <span
                              onClick={() => setBtnHandler(false)}
                              className="bg-grey300 text-white rounded-l-[16px] rounded-r-[16px] x-small flex px-[12px] py-[8px]"
                            >
                              <Image
                                alt="close icon"
                                width={20}
                                className="p-[4px] mt-[-2px]"
                                height={20}
                                src="\static\assets\icons\search-result\close-white.svg"
                              />
                              Close
                            </span>
                          ) : (
                            <span
                              onClick={() => setBtnHandler(true)}
                              className="bg-grey300 text-white rounded-l-[16px] rounded-r-[16px] x-small px-[12px] py-[8px]"
                            >
                              More
                            </span>
                          )}
                        </div>
                      )}

                      <div>
                        <Getprospectus />
                      </div>
                      <div>
                        <Visitwebsite />
                      </div>
                      {!isMobile && (
                        <>
                          <div>
                            <BookOpenDay />
                          </div>
                          <div>
                            <RequestInfo />
                          </div>
                        </>
                      )}
                      {!scrolled && isMobile && (
                        <>
                          <div>
                            <BookOpenDay />
                          </div>
                          <div>
                            <RequestInfo />
                          </div>
                        </>
                      )}
                      {btnHandler && scrolled && isMobile && (
                        <>
                          <div>
                            <BookOpenDay />
                          </div>
                          <div>
                            <RequestInfo />
                          </div>
                        </>
                      )}
                    </div>
                    <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
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

import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Visitwebsite from "../cards/interaction-button/visitwebsite";
import Getprospectus from "../cards/interaction-button/getprospectus";
import RequestInfo from "../cards/interaction-button/requestinfo";
import BookOpenDay from "../cards/interaction-button/bookopenday";
import RecommendedUnis from "../cards/interaction-button/recommendedunis";

const HeaderBanner = () => {
  const [btnHandler, setBtnHandler] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const [mobbtnheight, setMobBtnHeight] = useState(0);
  const [mobbtnposition, setMobBtnPosition] = useState(0);
  const bannerHeader = useRef(null);
  const btnHeight = useRef(null);
  // Get a value on scroll
  const handleScroll = useCallback(() => {
    const width = window.innerWidth;
    const y = window.scrollY;

    if (width <= 767) {
      // Mobile
      setScrolled(y > mobbtnheight);
    } else if (width > 767 && width < 1200) {
      // Tablet
      setScrolled(y > height);
      setIsMobile(false);
      if (y > 500) {
        document.body.classList.add("mb-[60px]");
      } else {
        document.body.classList.remove("mb-[60px]");
      }
    } else {
      // Desktop
      setScrolled(y > height);
    }
  }, [height, mobbtnheight]);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  useEffect(() => {
    // Initial check on mount
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, handleScroll]);

  useEffect(() => {
    if (isMobile && scrolled) {
      if (btnHandler) {
        document.body.classList.add("mb-[220px]");
        document.body.classList.remove("mb-[72px]");
      } else {
        document.body.classList.add("mb-[72px]");
        document.body.classList.remove("mb-[220px]");
      }
    } else {
      document.body.classList.remove("mb-[220px]", "mb-[72px]");
    }
  }, [isMobile, scrolled, btnHandler]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;

    const updateHeight = () => {
      if (width < 767) {
        if (btnHeight.current) {
          setMobBtnPosition(btnHeight.current.offsetHeight);
          setMobBtnHeight(btnHeight.current.offsetHeight + 150);
        }
      } else {
        if (bannerHeader.current) {
          setHeight(bannerHeader.current.offsetHeight + 121);
        }
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <>
      <section
        ref={bannerHeader}
        className={`${scrolled ? "xl:pt-[380px]" : ""}`}
      >
        <div
          style={isMobile ? { marginTop: `${mobbtnposition}px` } : undefined}
          className={`relative md:mt-[0px] ${scrolled && "xl:z-[5] xl:fixed xl:bg-grey300 xl:top-[0] xl:left-[0] xl:w-full"} `}
        >
          <Image
            className={`w-full min-h-[330px] md:min-h-[380px] xl:max-h-[320px] object-cover object-cente ${scrolled && "xl:hidden"}`}
            loading="lazy"
            width={800}
            height={320}
            src="/static/assets/images/ip/header-banner.jpg"
            alt="header-banner"
          />
          <div
            className={`absolute top-[0] w-full py-[16px] md:py-[24px] bg-gradient14 h-full ${scrolled ? "md:bg-grey300 xl:h-fit xl:py-[10px]" : "h-full"}`}
          >
            <div className="max-w-container mx-auto h-full px-[16px] md:px-[24px] xl:px-[0]">
              <div className="flex flex-col h-full w-full justify-between">
                <div
                  className={`flex justify-end w-full ${scrolled && "xl:hidden"}`}
                >
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
                      className={`p-[4px] bg-white rounded-[12px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px] md:min-w-[100px] md:h-[100px] ${scrolled && "xl:hidden"}`}
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
                      <div
                        className={`h3 line-clamp-3 md:line-clamp-2 ${scrolled && "md:text-small md:font-semibold"}`}
                      >
                        University of Oxford
                      </div>

                      <div
                        className={`flex flex-wrap items-center gap-[8px] small ${scrolled && "xl:hidden"}`}
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
                      <ul
                        className={`flex flex-wrap gap-[8px] mt-[4px] md:mt-[0]`}
                      >
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
                    className={`flex xl:pt-[0] gap-[8px] items-end ${scrolled ? "md:fixed xl:relative md:bottom-[0px] xl:bottom-[unset] md:left-[0px] xl:left-[unset] md:px-[20px] xl:px-[0px] md:py-[10px] xl:py-[0px] md:w-full xl:w-fit md:bg-grey300 xl:bg-transparent xl:items-center " : "md:pt-[12px]"}`}
                  >
                    <div
                      style={
                        !scrolled ? { top: `-${mobbtnposition}px` } : undefined
                      }
                      ref={btnHeight}
                      className={`bg-grey300 xl:bg-transparent flex items-end p-[16px] md:p-[0] gap-[8px] ${btnHandler && scrolled ? "grid grid-cols-1" : "grid md:flex grid-cols-2"} ${scrolled ? "fixed z-[5] md:relative top-[unset] bottom-[0px] md:bottom-[unset] left-[0] md:left-[unset] md:grid-cols-4 w-full xl:w-fit" : "w-full  left-[0px] md:left-[0px] md:top-[unset] absolute md:relative md:p-[0px] grid-cols-2"}`}
                    >
                      {scrolled && isMobile && (
                        <div className="absolute flex justify-center top-[-27px] left-[0] w-full md:hidden">
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
                      <Getprospectus />
                      <Visitwebsite />
                      {/* <RecommendedUnis /> */}
                      {(!isMobile || !scrolled || btnHandler) && (
                        <>
                          <BookOpenDay />
                          <RequestInfo />
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

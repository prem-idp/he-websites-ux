import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestInfo from "../../cards/interaction-button/requestinfo";
import BookOpenDay from "../../cards/interaction-button/bookopenday";
import Visitwebsite from "../../cards/interaction-button/visitwebsite";
import Getprospectus from "../../cards/interaction-button/getprospectus";


const HeaderBannerSkeleton = () => {
    const [btnHandler, setBtnHandler] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [height, setHeight] = useState(0);
    const [mobbtnheight, setMobBtnHeight] = useState(0);
    const [mobbtnposition, setMobBtnPosition] = useState(0);
    const bannerHeader = useRef<HTMLDivElement>(null);
    const btnHeight = useRef<HTMLDivElement>(null);
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
                    className={`relative md:mt-[0px] ${scrolled && "xl:z-[5] xl:fixed xl:bg-neutral-300 xl:top-[0] xl:left-[0] xl:w-full"} `}
                >
                    <div className={`bg-neutral-200 w-full min-h-[330px] md:min-h-[380px] xl:max-h-[320px] object-cover object-cente ${scrolled && "xl:hidden"}`}></div>
                    <div
                        className={`absolute top-[0] w-full py-[16px] md:py-[24px] h-full ${scrolled ? "md:bg-neutral-100 xl:h-fit xl:py-[10px]" : "h-full"}`}
                    >
                        <div className="max-w-container mx-auto h-full px-[16px] md:px-[24px] xl:px-[0]">
                            <div className="flex flex-col h-full w-full justify-between">
                                <div
                                    className={`flex justify-end w-full ${scrolled && "xl:hidden"}`}
                                >
                                    <button className="small font-semibold hover:underline flex gap-[6px] px-[10px] py-[6px] rounded-[16px] bg-grey-100 text-grey-500">
                                        <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                                    </button>
                                </div>
                                <div className="flex md:flex-col xl:flex-row justify-between">
                                    <div className="flex items-start flex-col xl:flex-row gap-[16px] md:w-[45%]">
                                        <span
                                            tabIndex={0}
                                            className={`p-[4px] bg-neutral-300 skeleton-text-animated
 rounded-[12px] shadow-custom-1 w-[64px] md:min-w-[64px] h-[64px] md:w-[100px] md:h-[100px] ${scrolled && "xl:hidden"}`}
                                        >
                                        </span>
                                        <div className="text-white flex flex-col gap-[4px] md:w-[70%]">
                                            <div className="skeleton skeleton-text-animated large_heading !mt-0"></div>

                                            <span
                                                tabIndex={0}
                                                className={`para font-semibold text-white ${scrolled && "xl:hidden"}`}
                                            >
                                                <div className="skeleton skeleton-text-animated heading !mt-0"></div>

                                            </span>
                                            <div
                                                className={`small ${scrolled && "xl:hidden"}`}
                                            >
                                                <span className="flex items-center">
                                                    <div className="skeleton skeleton-text-animated descrip !w-[100%] !mt-0"></div>
                                                </span>
                                            </div>
                                            <ul
                                                className={`flex flex-wrap gap-[8px] mt-[4px] md:mt-[0]`}
                                            >
                                                <li
                                                    tabIndex={0}
                                                    className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] text-positive-dark xs-small skeleton skeleton-square-img skeleton-text-animated !w-[105px] !h-[20px] !rounded-[4px] !m-0"
                                                >
                                                </li>
                                                <li
                                                    tabIndex={0}
                                                    className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px]  text-positive-dark xs-small skeleton skeleton-square-img skeleton-text-animated !w-[150px] !h-[20px] !rounded-[4px] !m-0"
                                                >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex xl:pt-[0] gap-[8px] items-end lg:min-w-[630px] ${scrolled ? "md:fixed md:z-[1] xl:relative md:bottom-[0px] xl:bottom-[unset] md:left-[0px] xl:left-[unset] md:px-[20px] xl:px-[0px] md:py-[10px] xl:py-[0px] md:w-full xl:w-fit md:bg-neutral-300 xl:bg-transparent xl:items-center " : "md:pt-[12px]"}`}
                                    >
                                        <div
                                            style={
                                                !scrolled ? { top: `-${mobbtnposition}px` } : undefined
                                            }
                                            ref={btnHeight}
                                            className={`bg-neutral-300 xl:bg-transparent flex items-end p-[16px] md:p-[0] gap-[8px] flex-[1] ${btnHandler && scrolled ? "grid grid-cols-1" : "grid md:flex grid-cols-2"} ${scrolled ? "fixed z-[5] md:relative top-[unset] bottom-[0px] md:bottom-[unset] left-[0] md:left-[unset] md:grid-cols-4 w-full xl:w-fit" : "w-full  left-[0px] md:left-[0px] md:top-[unset] absolute md:relative md:p-[0px] grid-cols-2"}`}
                                        >
                                            {scrolled && isMobile && (
                                                <div className="absolute flex justify-center top-[-27px] left-[0] w-full md:hidden">
                                                    {btnHandler ? (
                                                        <span
                                                            onClick={() => setBtnHandler(false)}
                                                            className="bg-neutral-300 text-white rounded-tl-[18px] rounded-tr-[18px] x-small flex px-[12px] py-[8px]"
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
                                                            className="bg-neutral-300 text-white rounded-tl-[18px] rounded-tr-[18px] x-small px-[12px] py-[8px]"
                                                        >
                                                            More
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            <div className="skeleton skeleton_btn skeleton-text-animated !w-[137px] !m-0"></div>

                                            <div className="skeleton skeleton_btn skeleton-text-animated !w-[137px] !m-0"></div>

                                            {/* <RecommendedUnis /> */}
                                            {(!isMobile || !scrolled || btnHandler) && (
                                                <>
                                                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[137px] !m-0"></div>

                                                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[137px] !m-0"></div>

                                                </>
                                            )}
                                        </div>
                                        <button className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                                            <div className="min-w-[40px] w-[40px] h-[40px] bg-neutral-200 border border-neutral-300 rounded-[24px] flex items-center justify-center cursor-pointer">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                                                        stroke="#d4d4d4"
                                                        strokeWidth="1.67"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
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

export default HeaderBannerSkeleton;

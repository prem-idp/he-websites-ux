"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Search from "./search-pod/header-search";
import { usePathname } from "next/navigation";
import Megamenucomponents from "../topnav/megamenucomponents";
import Shortlisted from "./shortlisted/shortlisted";
import User from "./user/user";

const Header = ({ data }: any) => {
  const [isMobileView, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [clickStates, setClickStates] = useState({
    isSearchClicked: false,
    isUserClicked: false,
    isShortlistClicked: false,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const userref = useRef<HTMLSpanElement | null>(null);
  const shortlistref = useRef<HTMLSpanElement | null>(null);
  const pathname = usePathname();
  // console.log(pathname, "pathname");
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        userref.current &&
        !userref.current.contains(event.target as Node) &&
        shortlistref.current &&
        !shortlistref.current.contains(event.target as Node)
      ) {
        rightMenuAction("");
      }
    };
    // Delay adding listener to avoid immediate triggering
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const mobileToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // right menu actions
  const rightMenuAction = (actionName: any) => {
    setClickStates((prevStates) => ({
      isSearchClicked:
        actionName === "SEARCH" ? !prevStates.isSearchClicked : false,
      isUserClicked: actionName === "USER" ? !prevStates.isUserClicked : false,
      isShortlistClicked:
        actionName === "SHORTLIST" ? !prevStates.isShortlistClicked : false,
    }));
  };

  useEffect(() => {
    const body = document.body;
    if (
      clickStates.isSearchClicked ||
      clickStates.isUserClicked ||
      clickStates.isShortlistClicked
    ) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }
  }, [clickStates]);

  return (
    <>
      <header className="bg-white pl-[16px] pr-[21px]  md:px-[20px] xl2:px-0">
      <header className="bg-white pl-[16px] pr-[21px]  md:px-[20px] xl2:px-0">
        <div className="max-w-container mx-auto flex items-center ">
          <div className="order-2 md:grow md:basis-[100%] lg:order-1 lg:grow-0 lg:basis-[54px] py-[4px] lg:py-[8px]">
            <Link href="/">
              <Image
                className="md:w-[54px] lg:w-full md:mx-auto lg:mx-0"
                src={data?.data?.contentData?.items[0]?.websiteLogo?.url}
                alt="Whatuni Logo"
                priority
                width={70}
                height={78}
              />
            </Link>
          </div>
          <div className="order-1 md:grow md:basis-[100%] lg:order-2 lg:grow-1 lg:basis-0">
            <button
              className="mr-[16px] block lg:hidden"
              onClick={mobileToggleOpen}
              aria-label="Mobile Toggle"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#333F48"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isMobileView ? (
              <>
                {/* Overlay Background for Mobile Menu */}
                <div
                  onClick={mobileToggleOpen}
                  className={`fixed top-0 left-0 right-0 bottom-0 z-[5] ${
                    isOpen ? "animate-fadeIn backdrop-shadow block" : "hidden"
                  } lg:bg-transparent`}
                ></div>

                {/* Mobile Menu Container */}
                <div
                  className={`fixed top-0 left-0 z-[6] w-full h-full transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "animate-fadeInLeft"
                      : "-translate-x-full duration-300"
                  } ${isMobileView ? "w-[376px] h-[100vh]" : ""}`}
                >
                  <div className="relative z-[6] w-fit">
                    {/* Close Button for Mobile Menu */}
                    <div
                      onClick={mobileToggleOpen}
                      className={`absolute right-[-40px] ${isMobileView ? "lg:hidden" : ""}`}
                    >
                      <div className="bg-neutral-900 p-[8px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L18 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Megamenu Component */}
                    {isOpen && <Megamenucomponents data={data} />}
                  </div>
                </div>
              </>
            ) : (
              <Megamenucomponents data={data} />
            )}
          </div>

          <div className="order-3 basis-[100%] md:grow lg:grow-0 lg:basis-0">
            <ul className="flex items-center justify-end gap-[10px] rightmenu py-[4px] lg:py-[8px]">
              {pathname !== "/" && (
                <li>
                  <span
                    aria-label="Search"
                    onClick={() => rightMenuAction("SEARCH")}
                    className="border border-gray-500 rounded-[34px] flex items-center justify-center w-[48px] h-[48px] cursor-pointer hover:border-primary-500 hover:bg-primary-500"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                        stroke="#5C656E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* course tab section */}
                  {clickStates.isSearchClicked && (
                    <>
                      <div
                        className={`backdrop-shadow fixed top-0 left-0 right-0 bottom-0 z-[5]`}
                      ></div>
                      <div ref={containerRef}>
                        <Search rightMenuAction={rightMenuAction} />
                      </div>
                    </>
                  )}
                </li>
              )}
              <li className="relative">
                <span
                  aria-label="User"
                  ref={userref}
                  onClick={() => rightMenuAction("USER")}
                  className="relative border border-gray-500 rounded-[34px] flex items-center justify-center w-[48px] h-[48px] cursor-pointer hover:border-primary-500 hover:bg-primary-500"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3332 5.83333C13.3332 7.67428 11.8408 9.16667 9.99984 9.16667C8.15889 9.16667 6.6665 7.67428 6.6665 5.83333C6.6665 3.99238 8.15889 2.5 9.99984 2.5C11.8408 2.5 13.3332 3.99238 13.3332 5.83333Z"
                      stroke="#5C656E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99984 11.6667C6.77818 11.6667 4.1665 14.2783 4.1665 17.5H15.8332C15.8332 14.2783 13.2215 11.6667 9.99984 11.6667Z"
                      stroke="#5C656E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {/* user section */}
                {clickStates.isUserClicked && (
                  <>
                    <div className="backdrop-shadow fixed top-[64px] left-0 right-0 bottom-0 z-[5] md:top-[84px] lg:top-[76px]"></div>
                    <div ref={containerRef}>
                      <User />
                    </div>
                  </>
                )}
              </li>
              <li className="relative">
                <div
                  aria-label="Shortlist"
                  className="cursor-pointer"
                  onClick={() => rightMenuAction("SHORTLIST")}
                >
                  <span
                    ref={shortlistref}
                    className="flex items-center justify-center min-h-[48px]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
                        fill="#00BBFD"
                        stroke="#3460DC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="absolute flex items-center justify-center min-w-[16px] h-[16px] rounded-[8px] top-[22px] left-[13px] bg-success-400 text-black font-inter font-semibold xs-small px-[5px] py-[2px]">
                    2
                  </div>
                </div>
                {/* shortlist section */}
                {clickStates.isShortlistClicked && (
                  <>
                    <div className="backdrop-shadow fixed top-[64px] left-0 right-0 bottom-0 z-[5] md:top-[84px] lg:top-[76px]"></div>
                    <div ref={containerRef}>
                      <Shortlisted />
                    </div>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

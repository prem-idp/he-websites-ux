"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Megamenucomponents from "../topnav/megamenucomponents";
import TopRightMenu from "./rightside-menu";

const Header = () => {
  // Toggle Menu
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const mobileToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="bg-white pl-[16px] pr-[21px] py-[4px] xl:px-0 xl:py-[8px]">
        <div className="max-w-container mx-auto flex items-center ">
          <div className="order-2 md:grow md:basis-[100%] lg:order-1 lg:grow-0 lg:basis-[70px]">
            <Link href="#">
              <Image
                className="md:mx-auto lg:mx-0"
                src="/assets/images/whatuni-logo.svg"
                alt="Whatuni Logo"
                priority
                width={70}
                height={78}
              />
            </Link>
          </div>
          <div className="order-1 md:grow md:basis-[100%] lg:order-2 lg:grow-1 lg:basis-0">
            {isMobile && (
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
            )}
            {isMobile ? (
              <div
                className={`megamenu-container fixed left-0 top-0 z-[1] w-full h-[100vh] lg:h-auto bg-neutral400 lg:bg-transparent lg:block transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}
              >
                <>
                  {isOpen && (
                    <div>
                      <Megamenucomponents />
                    </div>
                  )}
                </>
              </div>
            ) : (
              <Megamenucomponents />
            )}
          </div>
          <TopRightMenu />
        </div>
      </header>
    </>
  );
};

export default Header;

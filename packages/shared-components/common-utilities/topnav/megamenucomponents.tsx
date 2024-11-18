"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Menucategory1card from "../megamenu/menucategory1card";
import Menucategory2card from "../megamenu/menucategory2card";
import Menucategory3card from "../megamenu/menucategory3card";
import Menucategory4card from "../megamenu/menucategory4card";
import Menucategory1x2card from "../megamenu/menucategory1x2card";
import Menucategory1x1card from "../megamenu/menucategory1x1card";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { headerQuery } from "@packages/lib/graphQL/graphql-query";
// import { useState } from "react";
const Megamenucomponents = ({ data }: any) => {
  // console.log(data);
  const [content, setContent] = useState<any>(
    data?.data?.contentData?.items[0]?.headerMainMenuCollection?.items
  );
  const [openMenu, setOpenMenu] = useState<string | boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // Updated state for each menu item
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await graphQlFetchFunction(Header);
  //       console.log(result); // Log the fetched data
  //       setContent(
  //         result?.data?.contentData?.items[0]?.headerMainMenuCollection?.items
  //       );
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [openMenu]);
  const handleMenuToggle = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? false : menuId);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function Megamenuoptions(child: any) {
    if (child?.items[1]?.navTitle && child?.items[1]?.navIcon === null) {
      console.log(child?.items[1]?.navTitle, ".....................");
      return <Menucategory1card data={child} />;
    } else if (child?.items[1]?.navTitle && child?.items[1]?.navIcon) {
      return <Menucategory2card data={child} />;
    } else {
      console.log(child);
      return <p> No data</p>;
    }
  }

  return (
    <>
      <div className="flex lg:items-center lg:justify-center">
        <nav className="p-[16px] w-[335px] h-[100vh] overflow-y-scroll bg-white lg:p-0 lg:w-fit lg:h-auto lg:overflow-y-visible">
          <ul className="flex flex-col lg:flex-row gap-[10px] lg:gap-[24px] justify-center">
            {content?.map((menuItem: any, index: number) => (
              <li
                key={index}
                onMouseEnter={
                  !isMobile ? () => setOpenMenu(`menu${index}`) : undefined
                }
                onMouseLeave={!isMobile ? () => setOpenMenu(false) : undefined}
              >
                <Link
                  onClick={
                    isMobile
                      ? () => handleMenuToggle(`menu${index}`)
                      : undefined
                  }
                  href=""
                  className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent 
                        lg:hover:shadow-custom-7`}
                >
                  {menuItem.navTitle}
                  <Image
                    className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]"
                    src="/static/assets/images/megamenu/category-thumb-img1.png"
                    width="44"
                    height="44"
                    quality={100}
                    alt="Megamenu thumb"
                  />
                </Link>
                {isMobile ? (
                  <div
                    className={`${openMenu == `menu${index}` ? "translate-x-0 opacity-[1]" : "-translate-x-full opacity-0"} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}
                  >
                    <div
                      onClick={() => handleMenuToggle(`menu${index}`)}
                      className={`back-navigation font-bold flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}
                    >
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999"
                          stroke="#0F172A"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {menuItem.navName}
                    </div>
                    <div className="max-w-container mx-auto">
                      <section className="grid grid-cols-1 lg:grid-cols-4  lg:gap-[16px] p-[0] lg:p-[24px h-[calc(100vh_-_40px)] overflow-y-scroll pb-[40px]">
                      {Megamenuoptions(menuItem.navChildC1Collection)}
                                {Megamenuoptions(menuItem.navChildC2Collection)}
                                {Megamenuoptions(menuItem.navChildC3Collection)}
                                {Megamenuoptions(menuItem.navChildC4Collection)}

                        {/* <Menucategory1card />
                        <Menucategory2card />
                        <Menucategory2card />
                        <Menucategory4card /> */}
                      </section>
                    </div>
                  </div>
                ) : (
                  <>
                    {openMenu === `menu${index}` && (
                      <>
                        <div
                          onClick={() => handleMenuToggle(`menu${index}`)}
                          className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh]`}
                        ></div>

                        {((menuItem.navChildC1Collection.items[0]?.navName &&
                          menuItem.navChildC1Collection.items[0].navName !==
                            "") ||
                          (menuItem.navChildC2Collection.items[0]?.navName &&
                            menuItem.navChildC2Collection.items[0].navName !==
                              "") ||
                          (menuItem.navChildC3Collection.items[0]?.navName &&
                            menuItem.navChildC3Collection.items[0].navName !==
                              "") ||
                          (menuItem.navChildC4Collection.items[0]?.navName &&
                            menuItem.navChildC4Collection.items[0].navName !==
                              "")) && (
                          <div
                            className={`${openMenu ? "block animate-fadeIn" : "hidden animate-fadeOut"} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[60px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300 `}
                          >
                            <div className="max-w-container mx-auto">
                              <section
                                onMouseLeave={
                                  !isMobile
                                    ? () => setOpenMenu(false)
                                    : undefined
                                }
                                className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]"
                              >
                                {Megamenuoptions(menuItem.navChildC1Collection)}
                                {Megamenuoptions(menuItem.navChildC2Collection)}
                                {Megamenuoptions(menuItem.navChildC3Collection)}
                                {Megamenuoptions(menuItem.navChildC4Collection)}
                                {/* <Menucategory1card /> */}
                                {/* <Menucategory1x1card />
                                <Menucategory1x2card /> */}
                                {/* <Menucategory2card /> */}
                                {/* <Menucategory3card />
                                <Menucategory4card /> */}
                              </section>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Megamenucomponents;

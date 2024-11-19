"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Menucategory1card from "../megamenu/menucategory1card";
import Menucategory2card from "../megamenu/menucategory2card";
import Menucategory3card from "../megamenu/menucategory3card";
import Menucategory4card from "../megamenu/menucategory4card";

import Menucategory5card from "../megamenu/menucategory5card";
const Megamenucomponents = ({ data }: any) => {
  const [content, setContent] = useState<any>(
    data?.data?.contentData?.items[0]?.headerMainMenuCollection?.items
  );
  const [openMenu, setOpenMenu] = useState<string | boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
      if (child?.items.length > 7) {
        const renderChunks = [
          child.items.slice(0, 7),
          child.items.slice(7, 13),
          child.items.slice(13, 19),
          child.items.slice(19, 25),
        ];
        return (
          <>
            {renderChunks.map((chunk, index) => (
              <React.Fragment key={index}>
                {chunk.length > 0 && <Menucategory1card data={chunk} />}
              </React.Fragment>
            ))}
          </>
        );
      } else {
        return <Menucategory1card data={child.items} />;
      }
    } else if (child?.items[1]?.navTitle && child?.items[1]?.navIcon) {
      if (child?.items[1].flagNavItemStyle === "Nav Icon") {
        if (child?.items.length > 4) {
          const renderChunks = [
            child.items.slice(0, 5),
            child.items.slice(5, 9),
            child.items.slice(9, 13),
            child.items.slice(13, 17),
          ];
          return (
            <>
              {renderChunks.map((chunk, index) => (
                <React.Fragment key={index}>
                  {chunk.length > 0 && <Menucategory2card data={chunk} />}
                </React.Fragment>
              ))}
            </>
          );
        } else {
          return <Menucategory2card data={child.items} />;
        }
      }
      if (child?.items[1].flagNavItemStyle === "Nav Image") {
        if (child?.items.length > 4) {
          const renderChunks = [
            child.items.slice(0, 5),
            child.items.slice(5, 9),
            child.items.slice(9, 13),
            child.items.slice(13, 17),
          ];
          return (
            <>
              {renderChunks.map((chunk, index) => (
                <React.Fragment key={index}>
                  {chunk.length > 0 && <Menucategory3card data={chunk} />}
                </React.Fragment>
              ))}
            </>
          );
        } else {
          return <Menucategory3card data={child.items} />;
        }
      }
      if (child?.items[1].flagNavItemStyle === "Nav Hero Image") {
        if (child?.items?.length == 2) {
          // console.log(child?.items);
          return <Menucategory5card data={child.items} />;
        } else if (child?.items?.length == 3) {
          // console.log(child?.items);

          return <Menucategory4card data={child.items} />;
        } else if (child?.items.length > 3) {
          // console.log(child?.items);

          const renderChunks = [
            child.items.slice(0, 3),
            child.items.slice(3, 5),
            child.items.slice(5, 7),
            child.items.slice(7, 9),
          ];
          return (
            <>
              {renderChunks.map((chunk, index) => (
                <React.Fragment key={index}>
                  {chunk.length > 0 && <Menucategory4card data={chunk} />}
                </React.Fragment>
              ))}
            </>
          );
        }
      }
    } else {
      return <p>No data</p>;
    }
  }

  return (
    <>
      <div className="flex lg:items-center lg:justify-center">
        <nav className="p-[16px] w-[335px] h-[100vh] overflow-y-scroll bg-white lg:p-0 lg:w-fit lg:h-auto lg:overflow-y-visible">
          <ul className="flex flex-col lg:flex-row gap-[10px] lg:gap-[0] justify-center">
            {content?.map((menuItem: any, index: number) => (
              <li
                key={index}
                onMouseEnter={
                  !isMobile ? () => setOpenMenu(`menu${index}`) : undefined
                }
                onMouseLeave={!isMobile ? () => setOpenMenu(false) : undefined}
              >
                <div
                  onClick={
                    isMobile
                      ? () => handleMenuToggle(`menu${index}`)
                      : undefined
                  }
                  className={`flex justify-between items-center px-[16px] py-[10px] lg:py-[26px] lg:px-[12px] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent 
                        lg:hover:shadow-custom-7`}
                >
                  {menuItem.navTitle}
                  {menuItem?.navIcon?.url && (
                    <Image
                      className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]"
                      src={menuItem?.navIcon?.url}
                      width="44"
                      height="44"
                      quality={100}
                      alt={menuItem.navTitle || ""}
                    />
                  )}
                </div>
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
                        {menuItem.navChildC1Collection.items.length > 1 &&
                          Megamenuoptions(menuItem.navChildC1Collection)}
                        {menuItem.navChildC2Collection.items.length > 1 &&
                          Megamenuoptions(menuItem.navChildC2Collection)}
                        {menuItem.navChildC3Collection.items.length > 1 &&
                          Megamenuoptions(menuItem.navChildC3Collection)}
                        {menuItem.navChildC4Collection.items.length > 1 &&
                          Megamenuoptions(menuItem.navChildC4Collection)}
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
                        <div
                          className={`${openMenu ? "block animate-fadeIn" : "hidden animate-fadeOut"} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300 `}
                        >
                          <div className="max-w-container mx-auto">
                            <section
                              onMouseLeave={
                                !isMobile ? () => setOpenMenu(false) : undefined
                              }
                              className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]"
                            >
                              {menuItem.navChildC1Collection.items.length > 1 &&
                                Megamenuoptions(menuItem.navChildC1Collection)}
                              {menuItem.navChildC2Collection.items.length > 1 &&
                                Megamenuoptions(menuItem.navChildC2Collection)}
                              {menuItem.navChildC3Collection.items.length > 1 &&
                                Megamenuoptions(menuItem.navChildC3Collection)}
                              {menuItem.navChildC4Collection.items.length > 1 &&
                                Megamenuoptions(menuItem.navChildC4Collection)}
                            </section>
                          </div>
                        </div>
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

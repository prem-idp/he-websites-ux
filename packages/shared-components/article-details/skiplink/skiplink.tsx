"use client";
import React, { useState } from "react";
import Link from "next/link";

const Skiplink = ({ data }: any) => {
  const [modelOpen, setModalOpen] = useState(false);
  const toggleFunc = () => {
    setModalOpen(!modelOpen);
  };

  // const skiplinkLabel = [
  //   "Heading skip link",
  //   "Heading skip link",
  //   "Heading skip link",
  //   "Heading skip link",
  // ];

  return (
    <>
      <div className="py-[16px] border-b border-grey-200 lg:hidden mb-[40px]">
        <div
          className={`bg-blue-400 rounded-[4px] overflow-hidden border-b relative border-grey-200 skiplinkoption ${modelOpen ? "active" : ""}`}
        >
          <div className="">
            <div
              onClick={toggleFunc}
              className="bg-blue-400 cursor-pointer flex justify-between p-[18px]"
            >
              <span className="text-white small font-inter font-semibold">
                {data?.skipLinks?.skiplinkkTitle}
              </span>
              <div className="burger-menu flex flex-col justify-center gap-[4px]">
                <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
              </div>
            </div>

            {modelOpen && (
              <ul className="p-[16px]">
                {data?.skipLinks?.anchorLinksCollection?.items?.map(
                  (items: any, index: any) => (
                    <li
                      className="border-s-[2px]  py-[10px] px-[16px] text-white border-white small font-inter font-normal"
                      key={index}
                    >
                      <Link
                        target={
                          items?.moreLinkTarget?.toLowerCase() === "same tab"
                            ? "_self"
                            : "_blank"
                        }
                        href={items?.moreLinkUrl}
                      >
                        {items?.urlLabel}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="min-w-[289px] hidden lg:flex flex-col relative max-w-[100%]">
        <div className="sticky lg:flex flex-col lg:gap-[8px] top-[50px]">
          <h2 className="text-black para font-semibold font-inter">
            {data?.skipLinks?.skiplinkkTitle}
          </h2>
          <ul>
            {data?.skipLinks?.anchorLinksCollection?.items?.map(
              (items: any, index: any) => (
                <li
                  className={`border-s-[4px]  py-[10px] px-[16px] small font-inter font-normal hover:text-grey300 hover:underline hover:border-blue-400 ${
                    index == 0
                      ? "border-blue-400 text-blue-400"
                      : "border-grey-300 text-grey300"
                  }`}
                  key={`${index}`}
                >
                  <Link
                    target={
                      items?.moreLinkTarget?.toLowerCase() === "same tab"
                        ? "_self"
                        : "_blank"
                    }
                    href={items?.moreLinkUrl}
                  >
                    {items?.urlLabel}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skiplink;

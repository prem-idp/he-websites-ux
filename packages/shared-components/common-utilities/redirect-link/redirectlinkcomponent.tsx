import React, { useState } from "react";
import Link from "next/link";

const Redirectlinkcomponent = ({
  data,
  activeLink,
}: {
  data: any;
  activeLink: string;
}) => {
  // Toggle function
  const [modelOpen, setModalOpen] = useState(false);
  const toggleFunc = () => {
    setModalOpen(!modelOpen);
  };

  const skiplinklabellisting = data.map((items: any) => (
    <li
      className={`border-s-[4px]  py-[10px] px-[16px] small font-inter font-normal hover:text-grey300 hover:underline hover:border-blue-400 ${
        activeLink == items.pageName
          ? "border-blue-400 text-blue-400"
          : "border-grey-300 text-grey300"
      }`}
      key={items.key}
    >
      <Link href={items.pageURL}>{items.pageName}</Link>
    </li>
  ));
  const skiplinkmobilelisting = data.map((items: any, index: number) => (
    <li
      className="border-s-[2px]  py-[10px] px-[16px] text-white border-white small font-inter font-normal"
      key={`${items}-${index + 1}`}
    >
      <Link href={items.pageURL}>{items.pageName}</Link>
    </li>
  ));
  return (
    <>
      {/* only for Mobile */}
      <div className="px-[16px] md:px-[20px] lg:px-[0] py-[16px] border-b border-grey-200 lg:hidden mb-[32px]">
        <div
          className={`bg-blue-400 rounded-[4px] overflow-hidden border-b relative border-grey-200 skiplinkoption ${
            modelOpen ? "active" : ""
          }`}
        >
          <div className="">
            <div
              onClick={toggleFunc}
              className="bg-blue-400 cursor-pointer flex justify-between p-[18px]"
            >
              <span className="text-white small font-inter font-semibold">
                On this page
              </span>
              <div className="burger-menu flex flex-col justify-center gap-[4px]">
                <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
              </div>
            </div>
            {modelOpen && <ul className="p-[16px]">{skiplinkmobilelisting}</ul>}
          </div>
        </div>
      </div>
      {/* only for Mobile END */}
      {/* Left skip link option  */}
      <div className="sticky hidden lg:flex flex-col lg:gap-[8px] xl:top-[85px]">
        <h2 className="text-black para font-semibold font-inter">
          On this page
        </h2>
        <ul>{skiplinklabellisting}</ul>
      </div>
      {/* Left skip link option ENd */}
    </>
  );
};

export default Redirectlinkcomponent;

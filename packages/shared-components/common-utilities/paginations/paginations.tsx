import Link from "next/link";
import React from "react";

const Paginations = () => {
  return (
    <>
    <div className="py-[24px] md:py-[40px]">
        <nav aria-label="navigation">
          <ul className="pagination flex justify-center items-center gap-[8px]">
            <li>
              <Link aria-label="Left arrow"
                href=""
                className=" hover:bg-blue-100 cursor-pointer flex items-center justify-center text-center px-[2px] py-[8px] rounded-[4px] w-[36px] h-[36px]"
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 11L1 6L6 1"
                    stroke="#333F48"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                className="block small w-[36px] h-[36px] font-normal text-center px-[2px] py-[8px] rounded-[4px] bg-primary-400 text-white"
                href="#"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                className="block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] hover:bg-blue-100 hover:text-primary-400"
                href="#"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                className="block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] hover:bg-blue-100 hover:text-primary-400"
                href="#"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                className="hidden md:block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] hover:bg-blue-100 hover:text-primary-400"
                href="#"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                className="hidden md:block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] hover:bg-blue-100 hover:text-primary-400"
                href="#"
              >
                5
              </Link>
            </li>
            <li>
              <span className="select-none flex items-center justify-center small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] hover:bg-blue-100 hover:text-primary-400 ">
                ...
              </span>
            </li>
            <li>
              <Link
                className="block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] hover:bg-blue-100 hover:text-primary-400"
                href="#"
              >
                25
              </Link>
            </li>
            <li>
              <Link aria-label="Right arrow"
                href=""
                className=" hover:bg-blue-100 cursor-pointer flex items-center justify-center text-center px-[2px] py-[8px] rounded-[4px] w-[36px] h-[36px]"
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L1 11"
                    stroke="#333F48"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Paginations;

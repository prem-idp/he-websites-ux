"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Paginations = ({ totalPages, currentPage }: any) => {
  const currentUrl = window?.location?.href
  const pageNumbers = [];
  const totalVisiblePages = 7;
  if (totalPages <= totalVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);
    if (currentPage <= 3) {
      for (let i = 2; i <= 5; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push("...");
      for (let i = totalPages - 4; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push("...");
      pageNumbers.push(currentPage - 1);
      pageNumbers.push(currentPage);
      pageNumbers.push(+currentPage + 1);
      pageNumbers.push("...");
    }
    pageNumbers.push(totalPages);
  }

  const items = pageNumbers;

  return (
    <>
      <div className="pt-[24px] pb-[40px] md:pb-[64px]">
        <nav aria-label="navigation">
          <ul className="pagination flex justify-center items-center gap-[8px]">
            <li>
              <Link
                href={currentPage > 1 ? `?pageno=${currentPage - 1}` : `#`}
                className="hover:bg-blue-100 cursor-pointer flex items-center justify-center text-center px-[2px] py-[8px] rounded-[4px] w-[36px] h-[36px]"
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
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item !== "..."
                      ? `${currentUrl}&pageno=${Number(item)}`
                      : `${currentUrl}&pageno=${Number(currentPage)}`
                  }
                  className={
                    currentPage == item
                      ? "block small w-[36px] h-[36px] font-normal text-center px-[2px] py-[8px] rounded-[4px] bg-primary-400 text-white"
                      : `block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] ${item !== "..." ? "hover:bg-blue-100 hover:text-primary-400" : ""}`
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={
                  currentPage < totalPages
                    ? `${currentUrl}&pageno=${+currentPage + 1}`
                    : `${currentUrl}&pageno=${+currentPage}`
                }
                className="hover:bg-blue-100 cursor-pointer flex items-center justify-center text-center px-[2px] py-[8px] rounded-[4px] w-[36px] h-[36px]"
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

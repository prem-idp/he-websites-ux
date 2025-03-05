"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const Paginations = ({ totalPages, initialPage }: any) => {
  const searchParams = useSearchParams();

  // Ensure totalPages and initialPage are valid numbers
  const validTotalPages = Number(totalPages) > 0 ? Math.ceil(Number(totalPages)) : 1;
  const validInitialPage = Number(initialPage) > 0 ? Number(initialPage) : 1;
  //console.log
  const [currentPage, setCurrentPage] = useState(validInitialPage);

  // Sync currentPage with URL query parameter 'pageno'
  useEffect(() => {
    const pageFromQuery = Number(searchParams.get("pageno")) || Number(searchParams.get("page_no")) || 1;
    // Ensure currentPage doesn’t exceed totalPages or go below 1
    setCurrentPage(Math.min(Math.max(1, pageFromQuery), validTotalPages));
  }, [searchParams, validTotalPages]);

  // Function to build URL with existing query params and updated pageno
  const buildUrl = (page: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (typeof page === "number") {
      params.set(process.env.PROJECT === "Whatuni" ? "pageno": "page_no", page.toString());
    }
    return `?${params.toString()}`;
  };

  const pageNumbers: (number | string)[] = [];
  const totalVisiblePages = 7;

  if (validTotalPages <= totalVisiblePages) {
    for (let i = 1; i <= validTotalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1); // Always show first page
    if (currentPage <= 3) {
      for (let i = 2; i <= 5; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
    } else if (currentPage >= validTotalPages - 2) {
      pageNumbers.push("...");
      for (let i = validTotalPages - 4; i < validTotalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push("...");
      pageNumbers.push(currentPage - 1);
      pageNumbers.push(currentPage);
      pageNumbers.push(currentPage + 1);
      pageNumbers.push("...");
    }
    pageNumbers.push(validTotalPages); // Always show last page
  }

  const items = pageNumbers;

  // Calculate nextPage safely
  const nextPage = Math.min(currentPage + 1, validTotalPages);

  console.log("NextPage: " + nextPage);
  console.log("items: " + items);

  return (
    <>
      <div className="pt-[24px] pb-[40px] md:pb-[64px]">
        <nav aria-label="navigation">
          <ul className="pagination flex justify-center items-center gap-[8px]">
            <li>
              <Link
                href={currentPage > 1 ? buildUrl(currentPage - 1) : "#"}
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
                  href={item !== "..." ? buildUrl(item) : "#"}
                  className={
                    currentPage === item
                      ? "block small w-[36px] h-[36px] font-normal text-center px-[2px] py-[8px] rounded-[4px] bg-primary-400 text-white"
                      : `block small w-[36px] h-[36px] font-normal text-grey300 text-center px-[2px] py-[8px] rounded-[4px] ${item !== "..." ? "hover:bg-blue-100 hover:text-primary-400" : ""
                      }`
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={currentPage < validTotalPages ? buildUrl(nextPage) : "#"}
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
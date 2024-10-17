import React, { useState } from "react";
import Link from "next/link";
import FavouritesMenu from "./favourite-menu";
import UserIconMenu from "./usericon-menu";
import SearchIconMenu from "./searchicon-menu";
const TopRightMenu = () => {
  const rightMenuAction = (actionName: string) => {
    if (actionName == "SEARCH") {
      setIsSearchClicked(!isSearchClicked);
      setIsUserClicked(false);
      setIsShortlistClicked(false);
    } else if (actionName == "USER") {
      setIsUserClicked(!isUserClicked);
      setIsSearchClicked(false);
      setIsShortlistClicked(false);
    } else if (actionName == "SHORTLIST") {
      setIsShortlistClicked(!isShortlistClicked);
      setIsSearchClicked(false);
      setIsUserClicked(false);
    }
  };
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isShortlistClicked, setIsShortlistClicked] = useState(false);
  return (
    <div className="order-3 basis-[100%] md:grow lg:grow-0 lg:basis-0">
      <ul className="flex items-center justify-end gap-[10px]">
        <li>
          <Link
            onClick={() => rightMenuAction("SEARCH")}
            href="#"
            aria-label="Search"
            className="border border-gray-500 rounded-[34px] p-[14px] w-[48px] h-[48px] block"
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
          </Link>
          {/* course tab section */}
          {isSearchClicked && (
            <div className="bg-white absolute top-0 left-0 right-0 min-h-[222px] z-10 lg:top-[94px]">
              <div className="max-w-container w-full mx-auto flex flex-col px-[16px] py-[8px] cursor-pointer lg:py-[16px]">
                <div
                  className="flex justify-end mr-[-8px]"
                  onClick={() => rightMenuAction("SEARCH")}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 29L29 3M3 3L29 29"
                      stroke="#333F48"
                      strokeWidth="2.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <SearchIconMenu />
              </div>
            </div>
          )}
        </li>
        <li className="relative">
          <Link
            onClick={() => rightMenuAction("USER")}
            href="#"
            aria-label="User"
            className="border border-gray-500 rounded-[34px] p-[14px] w-[48px] h-[48px] block"
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
          </Link>
          {/* user section */}
          {isUserClicked && <UserIconMenu />}
        </li>
        <li className="relative min-h-[48px] flex items-center">
          <Link
            onClick={() => rightMenuAction("SHORTLIST")}
            href="#"
            className="relative block"
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
            <div className="absolute inline-flex items-center justify-center w-[16px] h-[16px] rounded-[8px] top-[10px] left-[13px] bg-success-400 text-black font-inter font-semibold text-xs-small px-[5px] py-[2px]">
              2
            </div>
          </Link>

          {/* shortlist section */}
          {isShortlistClicked && <FavouritesMenu />}
        </li>
      </ul>
    </div>
  );
};

export default TopRightMenu;

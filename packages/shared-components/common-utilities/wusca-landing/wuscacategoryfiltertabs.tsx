"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  RightBlueArrowIcon,
  LeftBlueArrowIcon,
} from "@/app/media-utilities/mediautilities";

interface CategoryTab {
  label: string;
  active?: boolean;
  isDropdown?: boolean;
  dropdownOptions?: string[];
}

interface WuscaCategoryFilterTabsProps {
  categories: CategoryTab[];
}

const Wuscacategoryfiltertabs = ({
  categories,
}: WuscaCategoryFilterTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(
    categories.findIndex((c) => c.active) ?? 0,
  );
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string>(
    categories.find((c) => c.isDropdown)?.label || "",
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollPosition);
      return () => el.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown !== null) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown !== null) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

  const scrollLeftFn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRightFn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row items-center gap-[18px] relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          type="button"
          onClick={scrollLeftFn}
          className="shrink-0 w-[37px] h-[37px] rounded-full border border-primary-400 flex items-center justify-center hover:bg-primary-50 cursor-pointer"
          aria-label="Scroll left"
        >
          <LeftBlueArrowIcon />
        </button>
      )}

      {/* Dropdown Button - outside scroll container */}
      {categories.map((category, index) =>
        category.isDropdown ? (
          <div key={index} className="relative shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown(openDropdown === index ? null : index);
              }}
              className="whitespace-nowrap small font-semibold rounded-[20px] py-[8px] border border-grey-300 bg-white text-grey300 hover:border-grey300 cursor-pointer flex items-center gap-[10px] h-[37px] w-[220px] justify-center"
            >
              {selectedDropdownValue}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#333F48"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {openDropdown === index && (
              <div className="absolute top-[42px] left-0 z-20 bg-white shadow-custom-3 rounded-[8px] min-w-[220px] py-[8px] border border-grey-200">
                {category.dropdownOptions?.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDropdownValue(option);
                      setOpenDropdown(null);
                    }}
                    className={`block w-full text-left small px-[16px] py-[10px] hover:bg-primary-50 cursor-pointer ${
                      selectedDropdownValue === option
                        ? "text-primary-400 font-semibold"
                        : "text-grey300 font-normal"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null,
      )}

      {/* Tabs Container - scrollable */}
      <div ref={scrollRef} className="flex-1 overflow-x-auto scrollbar-hidden">
        <div className="flex items-center gap-[8px] min-w-max">
          {categories.map((category, index) =>
            !category.isDropdown ? (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setOpenDropdown(null);
                }}
                className={`whitespace-nowrap small font-semibold rounded-[20px] px-[16px] py-[8px] border transition-colors cursor-pointer h-[37px] ${
                  activeIndex === index
                    ? "bg-grey300 text-white border-grey300"
                    : "bg-white text-grey300 border-grey-500 hover:border-grey300"
                }`}
              >
                {category.label}
              </button>
            ) : null,
          )}
        </div>
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          type="button"
          onClick={scrollRightFn}
          className="shrink-0 w-[37px] h-[37px] rounded-full border border-primary-400 flex items-center justify-center hover:bg-primary-50 cursor-pointer"
          aria-label="Scroll right"
        >
          <RightBlueArrowIcon />
        </button>
      )}
    </div>
  );
};

export default Wuscacategoryfiltertabs;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleDropdown = (tabName: string) => {
    setActiveTab(prevTab => (prevTab === tabName ? null : tabName));
  };

  return (
    <div className="flex flex-col gap-[24px] min-h-[60px]">
      <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
        <div className="flex flex-col items-stretch md:flex-row md:items-center">
          {/* Undergraduate Dropdown */}
          <div className="relative mb-[24px] md:mb-[0] shrink-0">
            <button
              onClick={() => toggleDropdown("UG")}
              className="flex items-center justify-between gap-[4px] mr-0 w-full small text-black md:w-[160px] md:mr-[16px]"
              aria-expanded={activeTab === "UG"}
              type="button"
            >
              Access & foundation
              <Image
                src="static/assets/icons/arrow_down_black.svg"
                width={20}
                height={20}
                alt="Search icon"
              />
            </button>
            {activeTab === "UG" && (
              <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-[-16px] top-[43px] overflow-hidden lg:w-[192px]">
                <ul>
                  {/* Dropdown Links */}
                  {["Undergraduate", "HND / HNC", "Foundation degree", "Access & foundation", "Postgraduate"].map((item, idx) => (
                    <li key={idx}>
                      <Link href="#" className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Subject Dropdown */}
          <div className="w-full relative border-y-[1px] border-neutral200 grow md:border-l md:border-y-0" onClick={() => toggleDropdown("Subject")}>
            <div className="flex items-center my-[12px] md:my-[0]">
              <input
                type="text"
                className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                aria-label="subject search"
                placeholder="Enter subject"
              />
            </div>
            {activeTab === "Subject" && (
              <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] max-h-[311px] overflow-y-scroll custom-scrollbar-2 overflow-hidden">
                <Link href="">
                  <div className="px-[16px] py-[12px]">
                    <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">KEYWORD SEARCH FOR</p>
                    <p className="small text-primary-400">Law</p>
                  </div>
                </Link>
                <ul>
                  {/* Subject Links */}
                  {["Law", "Law / Legal Studies", "Law (Specific Statutes)", "Asian Law", "Civil Law", "Family Law"].map((subject, idx) => (
                    <li key={idx}>
                      <Link href="#" className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline">
                        {subject}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Location Dropdown */}
          <div className="w-full relative grow md:border-l border-neutral200" onClick={() => toggleDropdown("Location")}>
            <div className="flex items-center my-[12px] md:my-[0]">
              <input
                type="text"
                className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                aria-label="location search"
                placeholder="Location (optional)"
              />
            </div>
            {activeTab === "Location" && (
              <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] overflow-hidden">
                <ul>
                  {/* Location Links */}
                  {["Undergraduate", "HND / HNC", "Foundation degree", "Access & foundation", "Postgraduate"].map((item, idx) => (
                    <li key={idx}>
                      <Link href="#" className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="pt-[2px] md:pt-[0]">
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
            >
              <Image src="static/assets/icons/search_icon.svg" width={18} height={18} alt="Search icon" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* UCAS Points Info */}
      <div className="flex items-center justify-center small">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.66678..." stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="ml-[4px] mr-[8px]">Don’t know your UCAS points?</div>
        <Link href="#" className="text-blue-500 font-semibold hover:underline">Calculate them</Link>
      </div>
    </div>
  );
}

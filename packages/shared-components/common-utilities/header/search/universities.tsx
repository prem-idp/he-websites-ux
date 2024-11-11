"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
export default function Universities() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filteredUniversities, setFilteredUniversities] = useState<string[]>(
    []
  );

  // Array of universities
  const universities = [
    "University of Law",
    "University of Manchester",
    "University of Liverpool",
    "University of Barnsley",
    "University of Burnley",
    "Bristol, University of the West of England",
    "INTO Manchester (The University of Manchester)",
    "Courtauld Institute of Art, University of London",
    "Cardiff Metropolitan University",
    "Institute of Advanced Legal Studies, School of Advanced Study, University of London",
  ];

  useEffect(() => {
    // Filter universities based on the search keyword
    if (searchKeyword) {
      const results = universities.filter((university) =>
        university.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      if (searchKeyword == results[0]) {
        setFilteredUniversities([]);
      } else {
        setFilteredUniversities(results);
      }
    } else {
      setFilteredUniversities([]); // Show all when search is cleared
    }
  }, [searchKeyword]);

  const path = "/search";
  return (
    <>
      <div className="flex flex-col gap-[24px] min-h-[60px]">
        <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
          <Form
            action={`${path}`}
            className="flex flex-col gap-x-[10px] justify-between md:flex-row"
          >
            <div className="relative grow">
              <input
                className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 md:py-[10px] border-b border-neutral200 md:border-none"
                type="text"
                aria-label="submenu"
                placeholder="University name"
                value={searchKeyword}
                onChange={(event) => setSearchKeyword(event.target.value)}
                name="searchkeyword"
                required
              />
              {filteredUniversities && (
                <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[52px] overflow-hidden">
                  <ul className="custom-scrollbar-2 max-h-[205px] overflow-y-scroll mr-[4px]">
                    {filteredUniversities?.map((university, index) => (
                      <li
                        key={index}
                        className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                        onClick={() => {
                          setSearchKeyword(university);
                        }}
                      >
                        {university}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="pt-[16px] md:pt-[0]">
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
              >
                <Image
                  src="static/assets/icons/search_icon.svg"
                  width="18"
                  height="18"
                  alt="Search icon"
                />
                Search
              </button>
            </div>
          </Form>
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="flex items-center gap-[4px] text-blue-500 small font-semibold hover:underline"
          >
            Browse unis A-Z
            <Image
              src="/static/assets/icons/arrow-right.svg"
              width={20}
              height={20}
              alt="Right Arrow"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

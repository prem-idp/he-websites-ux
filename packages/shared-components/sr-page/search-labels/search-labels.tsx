"use client";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import SearchLabelsSkeleton from "@packages/shared-components/skeleton/search-result/search-labels-skeleton";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const SearchLabelsContent = () => {
  const searchParams = useSearchParams();
  const [filterList, setFilterList] = useState<string[]>([]);

  console.log("SearchLabels Search Params " + searchParams);

  const constructFilterList = () => {
    const filters: string[] = [];

    // Common search parameters you might want to display
    const year = searchParams.get("year");
    const level = searchParams.get("level");
    const postcode = searchParams.get("study-method");
    const studyMode = searchParams.get("study-mode");
    const region = searchParams.get("region");

    // Add filters only if they exist
    if (year) filters.push(year);
    if (level) filters.push(level);
    if (postcode) filters.push(postcode);
    if (studyMode) filters.push(studyMode);
    if (region) filters.push(region);

    // Remove duplicates if any
    return Array.from(new Set(filters));
  };

  useEffect(() => {
    const newList = constructFilterList();
    console.log("New List " + newList);
    setFilterList(newList);
  }, [searchParams]); // Re-run when searchParams change

  const openFilterFunction = () => {
    emitter.emit("isfilterOpen", null);
  };

  // Show skeleton while list is being constructed
  if (filterList.length === 0 && searchParams.toString()) {
    return <></>;
  }

  return (
    <>
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[8px] md:px-[20px] xl:px-0 md:sticky top-[69px] z-[4]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px] uppercase">
            {filterList?.map((items, index) => (
              <li
                className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]"
                key={index + 1}
              >
                {items}
                <svg
                  className="cursor-pointer"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#3460DC"
                    strokeWidth="1.13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            ))}
            <li
              className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[2px] font-semibold x-small flex items-center gap-[2px]"
              onClick={openFilterFunction}
            >
              <div aria-label="Plus Icon">
                <svg
                  className="cursor-pointer"
                  width="7"
                  height="20"
                  viewBox="0 0 7 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55756 10.508H4.31356V12.788H2.68156V10.508H0.437563V8.96H2.68156V6.668H4.31356V8.96H6.55756V10.508Z"
                    fill="#3460DC"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <SearchLabelsSkeleton/> */}
    </>
  );
};

// Main component with Suspense boundary
const SearchLabels = () => {
  return (
    <Suspense fallback=''>
      <SearchLabelsContent />
    </Suspense>
  );
};


export default SearchLabels;

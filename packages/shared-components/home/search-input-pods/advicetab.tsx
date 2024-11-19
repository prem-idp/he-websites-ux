"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import { useRouter } from "next/navigation";

import Form from "next/form";
interface AdviceTabProps {
  searchFormHandle: any;
  setsearchFormHandle: any;
}
const AdviceTab: React.FC<AdviceTabProps> = ({
  searchFormHandle,
  setsearchFormHandle,
}) => {
  const [adviceerror, setAdviceerror] = useState(false);
  const router = useRouter();
  function handleSubmit() {
    if (searchFormHandle?.advice.trim()) {
      const formattedAdvice = searchFormHandle.advice
        .trim()
        .replace(/\s+/g, "-");
      return router.push(`/article-search/?keyword=${formattedAdvice}`);
    } else {
      setAdviceerror(true);
    }
  }
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:pl-[24px] lg:p-[8px]">
        <Form
          action={handleSubmit}
          className="flex flex-col gap-x-[10px] justify-between relative lg:flex-row"
        >
          <div className="grow">
            <input
              name="keyword"
              onChange={(event) => {
                setsearchFormHandle((preData: any) => ({
                  ...preData,
                  advice: event.target.value.trimStart(),
                }));
                setAdviceerror(false);
              }}
              type="text"
              className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 lg:py-[10px] border-b border-neutral-400 lg:border-none"
              aria-label=""
              placeholder="Enter keyword"
              value={searchFormHandle?.advice}
            />
          </div>
          <div className="pt-[16px] md:pt-[0]">
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
            >
              <Image
                src="/static/assets/icons/search_icon.svg"
                width="18"
                height="18"
                alt="Search icon"
              />
              Search
            </button>
          </div>
        </Form>
      </div>
      {adviceerror && <p>Please enter valid keyword</p>}
    </div>
  );
};

export default AdviceTab;

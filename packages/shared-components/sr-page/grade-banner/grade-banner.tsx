"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import GradeBannerSkeleton from "@packages/shared-components/skeleton/search-result/grade-banner-skeleton";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
const UcasComponent = dynamic(
  () =>
    import(
      "@packages/shared-components/common-utilities/popups/ucas-calculator/ucascomponent"
    ),
  { ssr: false }
);
const GradeBanner = () => {
  const searchparams = useSearchParams();
  const location = searchparams?.get("region") || searchparams?.get("city");
  const score = searchparams?.get("score");
  const [isUcasPopupOpen, setUcasPopupOpen] = useState(false);

  const filterEvents = (eventName: string | null | undefined) => {
    emitter.emit("isfilterOpen", eventName);
  };
  const ucasClick = (eve:any) => {
    setUcasPopupOpen(true);
    const body = document?.body;
    body.classList.add("overflow-y-hidden");
  };
  const ucasClose = () => {
    const body = document?.body;
    setUcasPopupOpen(false);
    body.classList.remove("overflow-y-hidden");
  };
  return (
    <>
      <div
        className={`${process.env.PROJECT === "Whatuni" ? "bg-blue-100" : "bg-positive-light"} p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between`}
      >
        <div className="flex gap-[16px]">
          <div className="bg-blue-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
            <Image
              src={!score ? "/static/assets/icons/search-result/calender-blue.svg" : "/static/assets/icons/search-result/location-home-blue.svg"}
              alt="Calender"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="para-lg font-bold font-farro">Add your {score ? "location" : "grades"}</div>
            <div className="small">
            {score ? "Add your location to discover universities nearby or in regions you're interested in" : "Add your UCAS points to help tailor your search to find the right uni for you"}
             
            </div>
          </div>
        </div>
        <div  onClick={() => score ? filterEvents("location") : ucasClick("ucas")} className="flex items-center justify-center self-center gap-[8px] btn btn-primary px-[20px] py-[10px] w-full lg:w-fit">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
              fill="#F9FAFB"
            />
          </svg>
          Add my {score ? "location" : "grades"}
        </div>
      </div>
      {isUcasPopupOpen && (
            <UcasComponent onClose={ucasClose} isUcasOpen={isUcasPopupOpen} />
          )}
      {/* <GradeBannerSkeleton/> */}
    </>
  );
};

export default GradeBanner;

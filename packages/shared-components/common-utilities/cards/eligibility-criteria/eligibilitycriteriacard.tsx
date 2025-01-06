import Link from "next/link";
import Image from "next/image";
import React from "react";
import Ctabutton from "../interaction-button/ctabutton";

const Eligibilitycriteriacard = ({ data }: any) => {
  return (
    <Link
      href=""
      className="card group flex flex-col bg-white border border-grey-200 hover:border-primary-400 rounded-[8px] shadow-custom-2 overflow-hidden p-[16px] gap-[16px]"
    >
      <div className="card-body flex flex-col gap-[8px]">
        <div className="card-header w-[48px]">
          {data?.image?.imgUpload?.url && (
            <Image
              src={data?.image?.imgUpload?.url}
              width="48"
              height="48"
              className="block w-full h-auto min-h-[48px]"
              alt={data?.image?.imgAltText}
            />
          )}
        </div>
        <h5 className="card-title font-semibold text-para-lg text-grey300 line-clamp-2">
          {data?.title}
        </h5>
        <p className="card-description font-normal small text-grey300 line-clamp-2">
          {data?.subTitle}
        </p>
      </div>
      {data?.cta?.primaryCtaUrl && data?.cta?.primaryCtaLabel && (
        <Ctabutton cta={data?.cta} />
      )}
    </Link>
  );
};

export default Eligibilitycriteriacard;

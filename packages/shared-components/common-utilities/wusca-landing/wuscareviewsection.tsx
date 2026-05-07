import React from "react";
import Image from "next/image";
import Link from "next/link";

const Wuscareviewsection = () => {
  return (
    <section className="relative bg-primary-50 py-[40px] md:py-[64px] px-[16px] md:px-[24px] xl:px-[112px] overflow-hidden">
      <div className="max-w-container mx-auto flex flex-col items-center gap-[24px] relative z-10">
        {/* WUSCA Logo */}
        <div className="w-[200px] md:w-[392px] h-auto">
          <Image
            src="/static/assets/images/wusca/wusca-image.png"
            alt="WUSCA Logo"
            width={392}
            height={234}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-[8px] max-w-[595px]">
          <h2 className="font-farro font-bold text-heading2 text-grey-900 text-center">
            Make your voice heard
          </h2>
          <p className="font-inter font-normal text-para text-grey-900 text-center">
            By leaving a review, you can support and inspire future students to
            make the best university choice for them.
          </p>
          <Link
            href="#"
            className="flex items-center gap-[6px] mt-[16px] bg-primary-400 hover:bg-primary-500 text-white rounded-[20px] font-inter font-semibold text-small px-[20px] py-[10px]"
          >
            Review your uni
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999"
                stroke="#fff"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Floating Avatars - Left */}
      <div className="hidden lg:block absolute left-[112px] top-[64px]">
        <FloatingReview rating={5} />
      </div>
      <div className="hidden lg:block absolute left-[216px] top-[100px]">
        <FloatingReview rating={5} />
      </div>
      <div className="hidden lg:block absolute left-[163px] bottom-[64px]">
        <FloatingReview rating={3} />
      </div>

      {/* Floating Avatars - Right */}
      <div className="hidden lg:block absolute right-[172px] top-[150px]">
        <FloatingReview rating={5} />
      </div>
      <div className="hidden lg:block absolute right-[272px] top-[64px]">
        <FloatingReview rating={3} />
      </div>
      <div className="hidden lg:block absolute right-[222px] bottom-[64px]">
        <FloatingReview rating={4} />
      </div>
    </section>
  );
};

// Floating Review Sub-component
const FloatingReview = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-[4px]">
      <div className="w-[32px] h-[32px] rounded-full bg-grey-200 border-[1.5px] border-white overflow-hidden">
        <Image
          src="/static/assets/icons/icon-people.svg"
          alt="Student avatar"
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center gap-[2px] bg-white shadow-custom-3 rounded-[16px] px-[8px] py-[4px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src="/static/assets/icons/blue-star-icon.svg"
            alt="star"
            width={16}
            height={16}
            className={i >= rating ? "opacity-30" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Wuscareviewsection;

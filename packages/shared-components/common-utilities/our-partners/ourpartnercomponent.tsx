"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { logoSliderProps } from "@/app/types/types";

export const Logoslider = ({ imgSrc }: logoSliderProps) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  return (
    <div className="relative overflow-hidden carousel-container">
      <ul
        ref={carouselRef}
        className="inline-flex items-center gap-[16px] md:gap-[86px] lg:gap-[64px] animate-scroll carousel mt-[32px]"
      >
        {/* original logos */}
        {imgSrc.map((Src, index) => (
          <li className="w-[100px] lg:w-[64px]" key={index}>
            <Link href="/" target="_blank">
              <Image
                className="w-full"
                alt="Partner Logo"
                width={180}
                height={180}
                src={Src}
              />
            </Link>
          </li>
        ))}
        {/* Cloned logos  */}
        {imgSrc.map((Src, index) => (
          <li className="w-[100px] lg:w-[64px]" key={`clone-${index}`}>
            <Link href="https://www.idp.com/" target="_blank">
              <Image
                className="w-full"
                alt="Partner Logo"
                width={180}
                height={180}
                src={Src}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

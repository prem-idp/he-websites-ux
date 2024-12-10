"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavChild } from "@packages/lib/types/interfaces";
interface PropsInterface {
  data: NavChild[];
}
const FooterIcons = ({ data }: PropsInterface) => {
  return (
    <ul className="flex flex-row gap-[16px]">
      {data?.map((item, index) => (
        <li key={index}>
          <Link prefetch={false} href={item.navUrl || ""} aria-label="facebook">
            <Image
              alt={item.navName}
              src={item.navIcon.url}
              width={item.navIcon.width}
              height={item.navIcon.height}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterIcons;

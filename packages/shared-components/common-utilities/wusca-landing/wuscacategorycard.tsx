import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WuscaCategoryCardProps {
  title: string;
  badge: string;
  bgColor: string;
  badgeBgColor: string;
  badgeTextColor: string;
  image: string;
}

const Wuscacategorycard = ({
  title,
  badge,
  bgColor,
  badgeBgColor,
  badgeTextColor,
  image,
}: WuscaCategoryCardProps) => {
  return (
    <Link
      href="#"
      className={`block ${bgColor} hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden`}
    >
      <div className="flex justify-between gap-[8px] h-[200px]">
        <div className="flex flex-col justify-between p-[16px] pr-[0]">
          <div
            className={`w-fit uppercase font-bold x-small ${badgeTextColor} ${badgeBgColor} px-[8px] py-[2px] rounded-[4px]`}
          >
            {badge}
          </div>
          <h5 className="font-bold">{title}</h5>
        </div>
        <Image
          src={image}
          width={186}
          height={200}
          alt={title}
          className="object-cover h-[200px] w-[186px] shrink-0"
        />
      </div>
    </Link>
  );
};

export default Wuscacategorycard;

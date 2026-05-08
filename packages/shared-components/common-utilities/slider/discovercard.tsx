import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface DiscoverCardData {
  label: string;
  title: string;
  href: string;
  bgColor: string;
  tagColor: string;
  tagBg: string;
  image: string;
}

const DiscoverCard = ({ card }: { card: DiscoverCardData }) => (
  <div className="discover-card">
    <Link
      href={card.href}
      className={`block ${card.bgColor} hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden`}
    >
      <div className="discover-card flex justify-between gap-[8px]">
        <div className="flex flex-col justify-between p-[20px] pr-[0]">
          <div
            className={`w-fit uppercase font-bold x-small ${card.tagColor} ${card.tagBg} px-[6px] py-[2px] rounded-[4px]`}
          >
            {card.label}
          </div>
          <h5 className="font-bold">{card.title}</h5>
        </div>
        <Image src={card.image} width={186} height={200} alt="discover" />
      </div>
    </Link>
  </div>
);

export default DiscoverCard;

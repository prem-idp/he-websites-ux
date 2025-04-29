import Image from "next/image";
import React from "react";

const KeyStatsCard = ({ keyStatsData }: any) => {
  return (
    <div className="keystats-inner-row flex flex-col md:flex-row gap-[20px]">
      {keyStatsData.map((item: any) => (
        <div
          key={item.label}
          className="course-highlight__option flex flex-1 items-start gap-[16px] bg-grey-600 p-[16px] rounded-[8px]"
        >
          <Image
            className="self-center"
            src={item.icon.src}
            alt="Keystats Icon1"
            width="48"
            height="48"
          />
          <div className="flex flex-col gap-[4px] *:text-white">
            <div className="text-x-small font-semibold line-clamp-2 uppercase">
              {item.label}
            </div>
            <div className="h3">{item.value}</div>
            <div className="text-small font-normal line-clamp-1">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyStatsCard;

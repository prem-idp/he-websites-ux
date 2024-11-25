import Link from "next/link";
import Image from "next/image";
import React from "react";

const Menucategory5card = ({ data }: any) => {
  return (
    <div className="dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px]">
      <div className="font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]">
        {
          data?.find((item: any) => item.flagNavItemStyle === "L2 Text")
            ?.navTitle
        }
      </div>
      <ul className="flex flex-col gap-[16px] p-[16px] lg:p-[0] bg-white grid lg:grid-cols-3">
        {data.slice(1).map((item: any, index: any) => (
          <li key={index}>
            <Link
              href={item?.navUrl || ""}
              target={item?.navCtaTarget ? "_blank" : "_parent"}
              rel={item?.navCtaTarget ? "noopener noreferrer" : undefined}
              className="block bg-neutral-200 min-h-[200px]"
            >
              <div className="megamenu-image-card min-h-[100px] relative z-0 overflow-hidden">
                <Image
                  className="w-full"
                  loading="eager"
                  src={item?.navIcon?.url}
                  width="289"
                  height="224"
                  alt="University logo"
                />
                <div className="overlay absolute z-0 top-0 left-0 right-0 bottom-0 bg-gradientBlack1"></div>
                <div className="font-semibold small text-white absolute z-1 bottom-[0] p-[10px]">
                  {item?.navTitle}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menucategory5card;

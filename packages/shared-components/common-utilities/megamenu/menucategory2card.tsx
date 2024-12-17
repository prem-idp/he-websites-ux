import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GADataLayerFn } from "@packages/lib/utlils/helper-function";

const Menucategory2card = ({ data, parentMenu }: { data: any; parentMenu: any }) => {


  const calculate = () => 
    data.length - 1 <= 4 ? 1 : Math.ceil((data.length - 1) / 4);
  const size = calculate();
  const navTitle = data?.find((item: any) => item.flagNavItemStyle === "L2 Text")?.navTitle;
  return (
    <div
      className={`dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px] lg:col-span-${size}`}
    >
      <div className="font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]">
        {
          data?.find((item: any) => item.flagNavItemStyle === "L2 Text")
            ?.navTitle
        }
      </div>
      <ul
        className={`grid grid-cols-1 lg:grid-cols-${size} gap-[16px] p-[16px] lg:p-[0] bg-white`}
      >
        {data
          ?.filter(
            (item: any) => item.flagNavItemStyle !== "L2 Text" // Exclude the L2 Text item
          )
          .map((item: any, index: number) => (
            <li key={index}>
              <Link
                prefetch={false}
                href={item?.navUrl || ""}
                target={item?.navCtaTarget=== "Open in new tab" ? "_blank" : "_parent"}
                onClick={() => {
                  GADataLayerFn("ga_contentful_events", "header_clicks", "NA", "NA", "NA", "NA", "homepage", "NA","NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "in_year", "0", "NA", "NA", "NA", "NA", "NA","NA",`${process.env.PROJECT}` ,item.navTitle,item?.navUrl,parentMenu,navTitle);
                }}
                rel={item?.navCtaTarget=== "Open in new tab" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-[10px] font-normal small text-grey300 hover:underline"
              >
                <Image
                  className="block rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]"
                  src={item?.navIcon?.url || ""}
                  width="44"
                  height="44"
                  quality={100}
                  alt="Megamenu thumb"
                />{" "}
                <span className="line-clamp-1">{item?.navTitle}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menucategory2card;

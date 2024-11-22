import Link from "next/link";
import React from "react";

const Menucategory1card = ({ data }: any) => {


  return (
    <div className="dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px]">
      <div className="font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]">
        {
          data?.find((item: any) => item.flagNavItemStyle === "L2 Text")
            ?.navTitle
        }
      </div>
      <ul className="grid grid-cols-1 gap-[16px] p-[16px] lg:p-[0] bg-white">
        {data
          ?.filter((item: any) => item.flagNavItemStyle !== "L2 Text")
          .map((item: any, index: number) => (
            <li key={index}>
              <Link
                href={item?.navUrl || ""}
                target={item.navCtaTarget ? "_blank" : "_parent"}
                rel={item.navCtaTarget ? "noopener noreferrer" : undefined}
                className="font-normal small text-grey300 hover:underline line-clamp-2 "
              >
                {item.navTitle}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menucategory1card;

import Link from "next/link";
import React from "react";

const Menucategory1card = ({ data }: any) => {
  return (
    <div className="dropdown-content-col flex flex-col gap-[8px] lg:gap-[16px]">
      <div className="font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]">
        {data?.items[0]?.navTitle}
      </div>
      <ul className="grid grid-cols-1 gap-[16px] p-[16px] lg:p-[0] bg-white">
        {data.items.slice(1).map((item: any, index: any) => (
          <li key={index}>
            <Link
              href={item?.navUrl || ""}
              target={item.navCtaTarget ? "_blank" : "_self"}
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

import Link from "next/link";
import React from "react";

const Menucategory1card = ({ data }: any) => {
  const calculate = () =>
    data.length - 1 <= 6 ? 1 : Math.ceil((data.length - 1) / 6);

  const size = calculate();

  return (
    <div
      className={`dropdown-content-col grid gap-[8px] lg:gap-[16px] col-span-1 lg:col-span-${size}`}
    >
      <div className="font-semibold x-small text-neutral-500 uppercase px-[16px] pt-[32px] lg:p-[0]">
        {
          data?.find((item: any) => item.flagNavItemStyle === "L2 Text")
            ?.navTitle
        }
      </div>
      <ul
        className={`grid grid-cols-1 lg:grid-cols-${size}  gap-[16px] p-[16px] lg:p-[0] bg-white  `}
      >
        {data
          ?.filter((item: any) => item.flagNavItemStyle !== "L2 Text")
          .map((item: any, index: number) => (
            <li key={index}>
              <Link
                prefetch={false}
                href={item?.navUrl || ""}
                target={
                  item.navCtaTarget === "Open in new tab" ? "_blank" : "_parent"
                }
                rel={
                  item.navCtaTarget === "Open in new tab"
                    ? "noopener noreferrer"
                    : undefined
                }
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

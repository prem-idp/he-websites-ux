"use server";
import React from "react";
import Link from "next/link";
import { FooterNavCollectionItem } from "@packages/lib/types/interfaces";
interface PropsInterface {
  data: FooterNavCollectionItem[];
}
const FooterNavCollection = ({ data }: PropsInterface) => {
  return (
    <>
      {data.map((navItems, index) => (
        <div
          className="flex flex-col gap-[16px]"
          key={index + 1}
          data-testid={`section${index + 1}`}
        >
          <p
            className="footer_title font-semibold text-grey300 x-small uppercase"
            data-testid="navtitle"
          >
            {navItems?.navTitle}
          </p>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-[4px]">
              {navItems?.navChildC1Collection?.items?.map(
                (childItem, index) => (
                  <li key={index + 1} data-testid={`childMenu${index + 1}`}>
                    <Link
                      data-testid={`${childItem.navTitle}${index + 1}`}
                      prefetch={false}
                      target={
                        childItem.navCtaTarget?.includes("new")
                          ? "_blank"
                          : "_parent"
                      }
                      href={`${childItem?.navUrl}`}
                      className="small text-grey300 hover:underline"
                    >
                      {childItem?.navTitle}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterNavCollection;

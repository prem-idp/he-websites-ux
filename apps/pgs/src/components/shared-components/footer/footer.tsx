"use server";
import React from "react";
import FetchDataForQuery from "@/lib/graphql/fetchdataforquery";
import Link from "next/link";
import FooterSvg from "./footer-svg";
const Footer = async () => {
  const query = `query {
    headerAndFooterCollection(where: { title: "Whatuni Header and Footer" }) {
      items {
        footerMenuCollection(limit: 3) {
          items {
            ... on NavigationMenu {
              menuName
              menuLink
              childMenuCollection(limit: 9) {
                items {
                  ... on NavigationMenu {
                    menuName
                    menuLink
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await FetchDataForQuery(query);
  const dataArray =
    response?.data?.headerAndFooterCollection?.items[0].footerMenuCollection
      ?.items;
  return (
    <footer className="footer bg-primary-200 before:bg-[url('/static/assets/images/footer_border_img.svg')] before:block before:h-[8px]">
      <div className="container max-w-container mx-auto px-[20px] pt-[34px] pb-[60px] lg:px-[0]">
        <div className="footer-inner-wrap grid xs:grid-cols-1 xs:gap-[40px] md:grid-cols-4 lg:gap-[16px]">
          <FooterSvg />
          {dataArray?.map((childObject: any, index: any) => (
            <div className="flex flex-col gap-[16px]" key={index}>
              <p className="footer_title font-semibold text-neutral-900 x-small uppercase">
                {childObject.menuName}
              </p>
              <div className="flex flex-col">
                <ul className="flex flex-col gap-[4px]">
                  {childObject.childMenuCollection?.items?.map(
                    (childMenu: any, index: any) => (
                      <li key={index}>
                        <Link
                          href={`${childMenu.menuLink}`}
                          className="small text-neutral-900 hover:underline"
                        >
                          {childMenu.menuName}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Copy rights */}
        <div className="copyrights mt-[40px]">
          <p className="font-regular x-small text-neutral-700 text-center">
            © 2007-2023 IDP Connect Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

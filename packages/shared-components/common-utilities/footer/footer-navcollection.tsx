"use server";
import React from "react";
import Link from "next/link";
import { FooterNavCollectionItem } from "@packages/lib/types/interfaces";
import ClickTrackerWrapper from "@packages/shared-components/common-utilities/pageviewlogging/clicktrackerwrapper";
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
                    <ClickTrackerWrapper   gaData={{
                        event: "ga_contentful_events",
                        eventName:"footer_clicks",
                        ctaTitle: childItem.navTitle,
                        ctaUrl: childItem?.navUrl || "",
                        website:`${process.env.PROJECT}`,
                        pageName:"homepage",
                        contentfulCategory1:navItems?.navTitle,

                      }}
                      >
                    <Link
                    
                      data-testid={`${childItem.navTitle}${index + 1}`}
                      prefetch={false}
                      target={
                        childItem.navCtaTarget?.includes("new")
                          ? "_blank"
                          : "_parent"
                      }
                      href={childItem?.navUrl || ""}
                      className="small text-grey300 hover:underline"
                    >
                      {childItem?.navTitle}
                    </Link>
                    </ClickTrackerWrapper>
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

"use server";
import React from "react";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { footerQuery } from "@packages/lib/graphQL/graphql-query";
import { FooterDataInterface } from "@packages/lib/types/interfaces";
import FooterIcons from "./footericons";
import FooterAppLinks from "./footer-applink";
import FooterNavCollection from "./footer-navcollection";
import FooterCopyRights from "./footer-copyrights";
const Footer = async () => {
  const footerData: FooterDataInterface = (
    await graphQlFetchFunction(footerQuery)
  )?.data?.footerNavigationCollection?.items?.[0];
  console.log(process.env.NEXT_PUBLIC_GRAPHQL_API);
  console.log(process.env.NEXT_PUBLIC_GRAPHQL_AUTH);
  console.log(process.env.PROJECT);
  console.log(process.env.DOMAIN);

  return (
    <>
      {footerData && (
        <footer className="footer bg-blue-100" data-testid="footer_component">
          <div className="container max-w-container mx-auto px-[16px] md:px-[24px] pt-[34px] pb-[40px] xl:px-[0]">
            <div className="footer-inner-wrap grid xs:grid-cols-1 xs:gap-[40px] md:grid-cols-4 lg:gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <p className="footer_title font-semibold text-grey300 x-small uppercase">
                  Connect
                </p>
                <div className="flex flex-col gap-[16px]">
                  <FooterIcons />
                  {footerData?.navApplinksCollection?.items && (
                    <FooterAppLinks
                      data={footerData.navApplinksCollection.items}
                    />
                  )}
                </div>
              </div>
              {footerData?.footerNavCollection?.items.length > 0 && (
                <FooterNavCollection
                  data={footerData.footerNavCollection.items}
                />
              )}
            </div>
            {footerData?.footerNavBtmCollection?.items[0] && (
              <FooterCopyRights
                data={footerData.footerNavBtmCollection.items[0]}
              />
            )}
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

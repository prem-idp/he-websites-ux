"use server";
import React from "react";
import Advicecomponent from "@packages/shared-components/home/advice/advicecomponents";
import ContentfulPreviewProvider from "@packages/lib/contentful-preview/ContentfulLivePreviewProvider";
import Articlesnippetcomponents from "@packages/shared-components/common-utilities/article-snippet/articlesnippetcomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { ArticleQuery } from "@packages/lib/graphQL/theme-landing";
import HeroMiniBanner from "@packages/shared-components/common-utilities/mini-banner/mini-banner";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import { ThemeLandingPageQuery } from "@packages/lib/graphQL/theme-landing";
import { notFound } from "next/navigation";
const page = async ({ searchParams, params }: any) => {
  const Params = await params;
  const slugurl = `/${Params.herohub}/${Params.money}/${Params.budgeting}`;
  const searchparams = await searchParams;
  const iscontentPreview =
    searchparams?.preview === "MY_SECRET_TOKEN" ? true : false;
  const jsondata = await graphQlFetchFunction(
    ThemeLandingPageQuery(iscontentPreview, slugurl),
    iscontentPreview
  );
  if (jsondata?.data?.contentData?.items.length < 1) {
    notFound();
  }
  const textSnippet =
    jsondata?.data?.contentData?.items[0]?.bodyContentCollection?.items[0];
  const bannerData = jsondata?.data?.contentData?.items[0]?.bannerImage;
  const articleLoop = (
    await graphQlFetchFunction(ArticleQuery(iscontentPreview, slugurl))
  )?.data?.contentData?.items[0]?.bodyContentCollection?.items;
  console.log(articleLoop);
  return (
    <ContentfulPreviewProvider
      locale="en-GB"
      enableInspectorMode={iscontentPreview}
      enableLiveUpdates={iscontentPreview}
      debugMode={iscontentPreview}
    >
      <div className="article_landing">
        {bannerData && (
          <HeroMiniBanner
            data={bannerData}
            iscontentPreview={iscontentPreview}
          />
        )}
        {textSnippet && (
          <Articlesnippetcomponents
            heading={textSnippet?.cardSectionTitle}
            subheading={textSnippet?.shortDescription}
            internalName={textSnippet?.internalName}
            callAction={textSnippet?.callToAction}
            parentSysId={textSnippet?.sys?.id}
            routename={slugurl}
            contentModelName={"pageTemplateThemedLandingPageCollection"}
            iscontentPreview={iscontentPreview}
          />
        )}
        {articleLoop?.length > 0 && (
          <>
            {articleLoop.map((items: any, index: number) => {
              if (items?.mediaCardsCollection?.items?.length > 0) {
                return (
                  <Advicecomponent
                    key={index}
                    iscontentPreview={iscontentPreview}
                    articleKeyString={items}
                    heading={items?.cardSectionTitle}
                    subheading={items?.shortDescription}
                  />
                );
              }
            })}
          </>
        )}
        <Subscribecomponents iscontentPreview={iscontentPreview} />
      </div>
    </ContentfulPreviewProvider>
  );
};

export default page;

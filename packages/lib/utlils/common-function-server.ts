import { Metadata } from "next";
import { MetaDataInterface } from "../types/interfaces";

export function getMetaDetailsObject(metaData: MetaDataInterface): Metadata{
    const customDomain = getCustomDomain();
    return {
      alternates: {
        canonical: metaData?.canonical || customDomain,
      },
      title: metaData?.title || "Default Title",
      description: metaData?.description || "Default Description",
      robots: metaData?.indexation || "noindex, nofollow",
      keywords: metaData?.keyword || [],
      other: {
        "og:title": metaData?.og_title || "Default Title",
        "og:type": "website",
        "og:description": metaData?.og_description || "Default Description",
        "og:image": "https://images.ctfassets.net/szez98lehkfm/UEsONfx1Q29FkoafrRlPT/e89b566373b65e6a6cfa1f575986566c/whatuni_logo.svg",
        "og:url": metaData?.og_canonical || customDomain,
        "meta:description": metaData?.og_description || "Default Description",
        "fb:app_id": "374120612681083",
        "twitter:card": "summary",
        "twitter:creator": "@whatuni",
        "twitter:url": metaData?.twitter_url || customDomain,
        "twitter:title": metaData?.twitter_titile || "Default Title",
        "twitter:description": metaData?.twitter_description || "Default Description",
        "twitter:image": "https://images.ctfassets.net/szez98lehkfm/UEsONfx1Q29FkoafrRlPT/e89b566373b65e6a6cfa1f575986566c/whatuni_logo.svg",
        "apple-itunes-app": "app-id=1267341390",
        "google-play-app": "app-id=com.hotcourses.group.wuapp",
      }
    };
  }
  
  export function getCustomDomain(){
    if(process.env.PROJECT == "Whatuni")
      return `${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "https://mdev.dev.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "stg" ? "https://mtest.test.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "prd" ? "https://www.whatuni.com" : "http://localhost:3000"}`;
    else if(process.env.PROJECT == "PGS")
      return `${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "https://mdev.dev.aws.postgraduatesearch.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "stg" ? "https://mtest.test.aws.postgraduatesearch.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "prd" ? "https://www.postgraduatesearch.com" : "http://localhost:3001"}`;
    return "";
  }
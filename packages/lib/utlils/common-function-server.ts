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
    const siteDomainName = process.env.PROJECT === "Whatuni" ? "whatuni" : "postgraduatesearch";
    switch(process.env.NEXT_PUBLIC_ENVIRONMENT){
      case "dev": return `https://mdev.dev.aws.${siteDomainName}.com`;
      case "stg": return`https://mtest.test.aws.${siteDomainName}.com`;
      case "prd": return`https://www.${siteDomainName}.com`;
      default: return siteDomainName === "whatuni" ? "http://localhost:3000" : "http://localhost:3001";
    }
  }
import type { Metadata } from "next";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Seoquery } from "@packages/lib/graphQL/graphql-query";
import TrackSessionId from "@packages/lib/utlils/tracksessionid";
import Head from "next/head";
interface ExtendedMetadata extends Metadata {
  metaKeywords?: string | null;
  canonical?: string;
}
export async function generateMetadata(): Promise<ExtendedMetadata> {
  try {
    const metadata = await graphQlFetchFunction(Seoquery);
    // console.log("metadata", metadata);
    return {
      alternates: {
        canonical:
          metadata?.data?.contentData?.items[0]?.seoFields?.canonical ||
          "https://www.Whatuni.com/",
      },
      title:
        metadata?.data?.contentData?.items[0]?.seoFields?.metaTite ||
        "Default Title",
      description:
        metadata?.data?.contentData?.items[0]?.seoFields?.metaDescription ||
        "Default Description",
      robots:
        metadata?.data?.contentData?.items[0]?.robots?.title || "index, follow",
      metaKeywords:
        metadata?.data?.contentData?.items[0]?.seoFields?.metaKeywords ||
        "meatkeywords",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      robots: "noindex, nofollow",
      metaKeywords: null,
      canonical: "https://www.Whatuni.com/",
    };
  }
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TrackSessionId />
      {children}
    </>
  );
}

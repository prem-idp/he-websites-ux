import type { Metadata } from "next";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Seoquery } from "@packages/lib/graphQL/graphql-query";
import TrackSessionId from "@packages/lib/utlils/tracksessionid";
import GTMScript from "@packages/lib/utlils/gtmscript";
//import { GoogleTagManager } from "@next/third-parties/google";
export async function generateMetadata(): Promise<Metadata> {
  try {
    const metadata = await graphQlFetchFunction(Seoquery);
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
      keywords:
        metadata?.data?.contentData?.items[0]?.seoFields?.metaKeywords || [],
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      robots: "noindex, nofollow",
      keywords: null,
      alternates: {
        canonical: "https://www.Whatuni.com/",
      },
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
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_WU_GTM_ACCOUNT || ""} /> */}
      <GTMScript gtmId={process.env.NEXT_PUBLIC_WU_GTM_ACCOUNT || ""} />
      <TrackSessionId />
      {children}
    </>
  );
}

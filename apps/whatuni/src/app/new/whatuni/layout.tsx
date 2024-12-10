import type { Metadata } from "next";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Seoquery } from "@packages/lib/graphQL/graphql-query";
import TrackSessionId from "@packages/lib/utlils/tracksessionid";
export async function generateMetadata(): Promise<Metadata> {
  try {
    const metadata = await graphQlFetchFunction(Seoquery);
    return {
      title:
        metadata?.data?.contentData?.items[0]?.seoFields?.metaTite ||
        "Default Title",
      description:
        metadata?.data?.contentData?.items[0]?.seoFields?.metaDescription ||
        "Default Description",
      robots:
        metadata?.data?.contentData?.items[0]?.robots?.title || "index, follow",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      robots: "noindex, nofollow",
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

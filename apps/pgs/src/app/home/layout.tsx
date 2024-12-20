import type { Metadata } from "next";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Seoquery } from "@packages/lib/graphQL/graphql-query";
//import { GoogleTagManager } from "@next/third-parties/google";
//import GTMScript from "@packages/lib/utlils/gtmscript";
import Script from "next/script";
//import LoadGTMAfteruserInteraction from "@packages/lib/utlils/loadgtmafteruserinteraction";
export async function generateMetadata(): Promise<Metadata> {
  try {
    const metadata = await graphQlFetchFunction(Seoquery);
    return {
      alternates: {
        canonical:
          metadata?.data?.contentData?.items[0]?.seoFields?.canonical ||
          "https://www.postgraduatesearch.com",
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
        canonical: "https://www.postgraduatesearch.com",
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
      {/* <LoadGTMAfteruserInteraction /> */}
      {/* <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_PGS_GTM_ACCOUNT}`} /> */}
      {/* <GTMScript gtmId={process.env.NEXT_PUBLIC_PGS_GTM_ACCOUNT || ""} /> */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_WU_GTM_ACCOUNT || ""}');
          `,
        }}
      />
      {children}
    </>
  );
}

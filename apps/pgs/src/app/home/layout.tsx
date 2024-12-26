import type { Metadata } from "next";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Seoquery } from "@packages/lib/graphQL/graphql-query";
//import { GoogleTagManager } from "@next/third-parties/google";
//import GTMScript from "@packages/lib/utlils/gtmscript";
import Script from "next/script";
//import LoadGTMAfteruserInteraction from "@packages/lib/utlils/loadgtmafteruserinteraction";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

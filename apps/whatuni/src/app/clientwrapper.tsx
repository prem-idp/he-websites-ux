"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const TrackSessionId = dynamic(() => import("@packages/lib/utlils/tracksessionid"), { ssr: false });
const GoogleOneTap = dynamic(() => import("@packages/lib/utlils/GoogleOneTap"), { ssr: false });
const OneTrustCookieScript = dynamic(() => import("@packages/lib/oneTrust/OneTrustCookieScript"), { ssr: false });
const SetCookiewuIdToken = dynamic(() => import("@packages/lib/utlils/setcookie"), { ssr: false });
const GTMScript = dynamic(() => import("@packages/lib/utlils/loadgtm"), { ssr: false });    
export default function ClientWrapper() {
  const [shouldRender, setShouldRender] = useState(false);
  console.log(`[${new Date().toISOString()}] This is a log message in the client`);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setShouldRender(true);
      }, 0);
    }, 0);
  }, []);

  if (!shouldRender) return null;

  return (
    <>
    <script dangerouslySetInnerHTML={{ __html: `console.log("Before client:", new Date().toISOString());` }} />
      <TrackSessionId />
      <GoogleOneTap />
      <OneTrustCookieScript domianValue={process.env.NEXT_PUBLIC_WU_ONE_TRUST_DOMAIN || ""} />
      <SetCookiewuIdToken />
      <GTMScript />
    </>
  );
}

"use client";
import dynamic from "next/dynamic";
const TrackSessionId = dynamic(
  () => import("@packages/lib/utlils/tracksessionid" /* webpackChunkName:'TrackSessionId' */),
  { ssr: false }
);
const GoogleOneTap = dynamic(
  () => import("@packages/lib/utlils/GoogleOneTap" /* webpackChunkName:'GoogleOneTap' */),
  { ssr: false }
);
const OneTrustCookieScript = dynamic(
  () => import("@packages/lib/oneTrust/OneTrustCookieScript"/* webpackChunkName:'OneTrustCookieScript' */),
  { ssr: false }
);
const SetCookiewuIdToken = dynamic(
  () => import("@packages/lib/utlils/setcookie"/* webpackChunkName:'SetCookiewuIdToken' */),
  { ssr: false }
);
const GTMScript = dynamic(() => import("@packages/lib/utlils/loadgtm"/* webpackChunkName:'GTMScript' */), {
  ssr: false,
});
export default function ClientWrapper() {
  return (
    <>
      <TrackSessionId />
      <GoogleOneTap />
      <OneTrustCookieScript domianValue={process.env.NEXT_PUBLIC_WU_ONE_TRUST_DOMAIN || ""} />
      <SetCookiewuIdToken />
      <GTMScript />
    </>
  );
}

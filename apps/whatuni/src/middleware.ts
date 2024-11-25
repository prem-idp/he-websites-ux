import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@packages/lib/utlils/amplifyServerUtils";
import { NextServer } from "next/dist/server/next";

export async function middleware(request: NextRequest) {
  // console.log("running middleware ----------------------------", request);
  const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      //   console.log(contextSpec, "contextSpec-----------------------");
      try {
        const session = await fetchAuthSession(contextSpec);

        const hasAccessToken = session.tokens?.accessToken !== undefined;
        const hasIdToken = session.tokens?.idToken !== undefined;
        return hasAccessToken && hasIdToken;
      } catch (error) {
        return false;
      }
    },
  });

  if (authenticated) {
    // console.log("authenticated responce");
    return NextResponse.next();
  }

  // Construct the redirect URL including the original path and query parameters
  const redirectUrl = new URL("/new/signin", request.url);
  redirectUrl.searchParams.set(
    "redirect",
    request.nextUrl.pathname + request.nextUrl.search
  );

  // Ensure redirect URL is properly constructed
  // console.log("Redirecting to:", redirectUrl.toString());

  return NextResponse.redirect(redirectUrl.toString(), 307); // Permanent redirect
}

export const config = {
  matcher: ["/new/new/new"],
};

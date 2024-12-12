import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@packages/lib/utlils/amplifyServerUtils";

export async function middleware(request: NextRequest) {
  // const response = NextResponse.next();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("cookie", "text1");
  const existingCookies = request.cookies.getAll();
  const filteredCookies = existingCookies
    .filter(
      (cookie) =>
        !["CognitoIdentityServiceProvider", "test"].includes(cookie.name)
    )
    .map((cookie) => `${cookie.name}=${cookie.value}`);
  const finalCookieString = filteredCookies.join("; ");
  requestHeaders.set("cookie", finalCookieString);
  NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // const result = await runWithAmplifyServerContext({
  //   nextServerContext: { request, response },
  //   operation: async (contextSpec) => {
  //     try {
  //       const session = await fetchAuthSession(contextSpec);
  //       if (session.tokens) {
  //         const hasAccessToken = session.tokens.accessToken !== undefined;
  //         const hasIdToken = session.tokens.idToken !== undefined;

  //         if (hasAccessToken && hasIdToken) {
  //           return { authenticated: true, idToken: session.tokens.idToken };
  //         }
  //       }

  //       return { authenticated: false, idToken: null };
  //     } catch (error) {
  //       return { authenticated: false, idToken: null };
  //     }
  //   },
  // });
  // if (result.authenticated) {
  //   // Set headers for authenticated users
  //   response.headers.set("isAuthenticated", "true");

  //   // Ensure idToken is a string before setting it in headers
  //   response.headers.set(
  //     "idToken",
  //     result.idToken ? String(result.idToken) : ""
  //   );
  // } else {
  //   response.headers.set("isAuthenticated", "false");
  // }
  // return response;
}

export const config = {
  matcher: ["/new/whatuni", "/"],
};

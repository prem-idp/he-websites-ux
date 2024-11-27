import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@packages/lib/utlils/amplifyServerUtils";

export async function middleware(request: NextRequest) {
  console.log("Request Info:----------", {
   request
  });



  const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
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
    // Add `isAuthenticated: true` to the response headers
    response.headers.set("isAuthenticated", "true");
    return response;
  } else {
    response.headers.set("isAuthenticated", "false");
    return response;
  }
}

export const config = {
  matcher: ["/new/whatuni", "/"],
};

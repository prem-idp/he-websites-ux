import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
export function middleware(request: NextRequest, response: NextResponse) {
  const { pathname, search, searchParams } = request.nextUrl;
  const slugs = pathname?.split("/");
  const customDomain = `${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "https://mdev.dev.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "stg" ? "https://mtest.test.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "prd" ? "https://www.whatuni.com" : "http://localhost:3000"}`;

  if (slugs.length > 1) {
    const response = NextResponse.next(); // Initialize response properly
    response.cookies.set("pathnamecookies", pathname.toString());
    response.cookies.set("searchParamscookies", searchParams.toString());
    if (response.cookies.get("dynamic_random_number")?.value === "") {
      response.cookies.set(
        "dynamic_random_number",
        uuidv4().replace(/\D/g, "").slice(0, 8),
        { path: "/" }
      );
    }
    return response;

    // const response = NextResponse.next(); // Initialize response properly
    // const ip =request.headers.get("x-forwarded-for") || "unknown";
    // response.cookies.set("pathname", pathname, { path: "/" });
    // response.cookies.set("searchParams", searchParams.toString(), { path: "/" });
    // response.cookies.set("user-ip", ip, { path: "/" });
    // return response;
    // return NextResponse.next();
  }

  const trailingSlashes = pathname.match(/\/+$/)?.[0].length || 0;
  if (trailingSlashes > 1) {
    const cleanedUrl = pathname.replace(/([^:]\/)\/+/g, "$1");
    return NextResponse.redirect(new URL(`${cleanedUrl}`, customDomain));
  }

  if (search && pathname.endsWith("/")) {
    const newUrl = pathname.slice(0, -1) + search;
    return NextResponse.redirect(new URL(newUrl, customDomain));
  }
  if (!search && !pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(`${pathname}/`, customDomain));
  }

  // const trailingSlashes = pathname.match(/\/+$/)?.[0].length || 0;
  // if(trailingSlashes > 1  ){
  //   const cleanedUrl = pathname.replace(/([^:]\/)\/+/g, '$1');
  //   return NextResponse.redirect(new URL(`${cleanedUrl}`, customDomain));
  // }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|fonts|images|icons|static|assets).*)",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest, response: NextResponse) {
  const { pathname, search, searchParams } = request.nextUrl;

  const customDomain = `${process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? "https://mdev.dev.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "stg" ? "https://mtest.test.aws.whatuni.com" : process.env.NEXT_PUBLIC_ENVIRONMENT === "prd" ? "https://www.whatuni.com" : "http://localhost:3000"}`;

  if (pathname === "/home" || pathname === "/" || pathname === "/home/") {
    console.log(request, "request headers logging from the middleware");
    const response = NextResponse.next(); // Initialize response properly
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    response.cookies.set("pathname", pathname, { path: "/" });
    response.cookies.set("searchParams", searchParams.toString(), {
      path: "/",
    });
    response.cookies.set("user-ip", ip, { path: "/" });
    return response;
    // return NextResponse.next();
  }
  let cleanedUrl = pathname;
  const trailingSlashes = pathname.match(/\/+$/)?.[0].length || 0;
  if (trailingSlashes > 1) {
    cleanedUrl = pathname.replace(/([^:]\/)\/+/g, "$1");
    return NextResponse.redirect(new URL(`${cleanedUrl}`, customDomain));
  }
  if (search && cleanedUrl.endsWith("/")) {
    const newUrl = cleanedUrl.slice(0, -1) + search;
    return NextResponse.redirect(new URL(newUrl, customDomain));
  }
  if (!search && !cleanedUrl.endsWith("/")) {
    return NextResponse.redirect(new URL(`${cleanedUrl}/`, customDomain));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images|icons).*)"],
};

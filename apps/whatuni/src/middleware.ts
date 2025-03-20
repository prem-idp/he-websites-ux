import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export function middleware(request: NextRequest) {
  const { pathname, search, searchParams } = request.nextUrl;
  const slugs = pathname.split("/");
  
  // Define domain mapping
  const domainMap: Record<string, string> = {
    dev: "https://mdev.dev.aws.whatuni.com",
    stg: "https://mtest.test.aws.whatuni.com",
    prd: "https://www.whatuni.com",
  };

  const customDomain = domainMap[process.env.NEXT_PUBLIC_ENVIRONMENT!] || "http://localhost:3000";
  const response = NextResponse.next();
  
  // Dynamic path check
  if (/^\/degrees\/[^/]+\/[^/]+\/cd\/[^/]+\/[^/]+$/.test(pathname)) {
    if (response.cookies.get("dynamic_random_number")?.value === "") {
      response.cookies.set(
        "dynamic_random_number",
        uuidv4().replace(/\D/g, "").slice(0, 8),
        { path: "/" }
      );
    }
    return response;
  }

  if (slugs.length > 1) {
    response.cookies.set("pathnamecookies", pathname);
    response.cookies.set("searchParamscookies", searchParams.toString());

    
    if (response.cookies.get("dynamic_random_number")?.value === "") {
      response.cookies.set(
        "dynamic_random_number",
        uuidv4().replace(/\D/g, "").slice(0, 8),
        { path: "/" }
      );
    }
    return response;
  }

  // Handle URL corrections
  if (pathname.match(/\/{2,}$/)) {
    return NextResponse.redirect(new URL(pathname.replace(/\/{2,}$/, "/"), customDomain));
  }

  if (search && pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(pathname.slice(0, -1) + search, customDomain));
  }

  if (!search && !pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(`${pathname}/`, customDomain));
  }

  return response;
}

function generateRandomNumber() {
  return uuidv4().replace(/\D/g, "").slice(0, 8);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|fonts|images|icons|static|assets).*)",
  ],
};

// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Log request details
  console.log("Request Info:----------", {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });

  // You can also log the query params or any specific details
  // console.log("Query Params:", req.nextUrl.searchParams);

  // You can also log request body, if needed (for POST requests)
  if (req.method === "POST") {
    req.json().then((body) => {
      console.log("Request Body:", body);
    });
  }

  // Continue to the next middleware or request handler
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/", // Match root
    "/new/whatuni", // Match specific path
  ],
};

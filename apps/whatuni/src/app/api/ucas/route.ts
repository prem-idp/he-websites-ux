import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { guestUserUcas } from "@packages/lib/server-actions/server-action";
export async function POST(request: any) {
  console.log("method called");
  try {
    const cookie = await cookies();
    const tracksessionid: any = cookie.get("tracksessionid");

    if (tracksessionid.value) {
      const { ucasAjax } = await request.json();
      const response = await guestUserUcas(ucasAjax, tracksessionid.value);
      console.log("response", response);
      return NextResponse.json(response, { status: 200 });
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}

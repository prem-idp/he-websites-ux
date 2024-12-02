import { NextResponse } from "next/server";
import { guestUserUcas } from "@packages/lib/server-actions/server-action";
export async function POST(request: any) {
  try {
    const { ucasAjax, tracksessionid } = await request.json();
    const response = await guestUserUcas(ucasAjax, tracksessionid);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}

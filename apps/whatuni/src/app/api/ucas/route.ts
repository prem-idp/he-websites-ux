import { NextResponse } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";
export async function POST(request: any) {
  try {
    const { ucasAjax } = await request.json();
    const cookie = await cookies();
    const tracksessionid: any = cookie.get("trackSessionId");
    const payloadString = JSON.stringify(ucasAjax);
    const hash = crypto
      .createHash("sha256")
      .update(payloadString)
      .digest("hex");
    const res = await fetch(
      `https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/guest/homepage/ucas-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
          tracksessionid: tracksessionid,
          "x-amz-content-sha256": hash,
        },
        body: JSON.stringify(ucasAjax),
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import crypto from "crypto";
export async function POST(request: any) {
  try {
    const { query }: any = await request.json();
    console.log(query);
    const payloadString = JSON.stringify(query);
    const hash = crypto
      .createHash("sha256")
      .update(payloadString)
      .digest("hex");
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
        "x-amz-content-sha256": hash,
      },
      body: JSON.stringify({ query: query }),
      next: { revalidate: 90 },
    });
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

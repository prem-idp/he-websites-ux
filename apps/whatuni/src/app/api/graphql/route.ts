import { NextResponse } from "next/server";
import crypto from "crypto";

// Function to make a GraphQL fetch request
async function graphQlFetchFunction(payload: string) {
  try {
    const payloadString = JSON.stringify(payload);
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
      body: JSON.stringify({ query: payload }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`GraphQL API response error: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in graphQlFetchFunction:", error);
    throw new Error("Failed to fetch data from GraphQL API");
  }
}

// API Route Handler for POST requests
export async function POST(request: Request) {
  // console.log(request);
  try {
    const { query }: { query: string } = await request.json();
    // console.log(query, "asssssssss");
    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing query string" },
        { status: 400 }
      );
    }

    // Call the GraphQL Fetch Function
    const response = await graphQlFetchFunction(query);

    // Return the response data
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}

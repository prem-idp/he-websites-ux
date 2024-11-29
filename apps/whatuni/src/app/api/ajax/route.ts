import { NextResponse } from "next/server";
import crypto from "crypto";
interface SearchPayload {
  [key: string]: any; // Adjust this to your expected payload structure
}

async function searchAjaxFetchFunction(payload: SearchPayload): Promise<any> {
  try {
    const payloadString = JSON.stringify(payload);
    const hash = crypto
      .createHash("sha256")
      .update(payloadString)
      .digest("hex");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/sub-inst-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
          "x-amz-content-sha256": hash,
        },
        body: payloadString,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error(`API response error: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error in searchAjaxFetchFunction:", error);
    throw new Error("Failed to fetch data from Search AJAX API");
  }
}

// API Route Handler for POST requests
export async function POST(request: Request) {
  try {
    const payload: SearchPayload = await request.json();

    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        { error: "Invalid or missing payload" },
        { status: 400 }
      );
    }

    // Call the Search AJAX Fetch Function
    const response = await searchAjaxFetchFunction(payload);

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

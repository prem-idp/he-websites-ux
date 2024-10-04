"use server";

export default async function FetchData(url: string): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-API-Key": process.env.SUBJECT_GUIDE_API_KEY || "",
  };
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error while fetching data " + error);
  }
}

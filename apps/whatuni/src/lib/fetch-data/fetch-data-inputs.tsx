"use server";

type InputParameters = {
  affiliateId: string;
  pod: string;
  browseCatId: string;
  categoryCode: string;
  wuscaCurrentYear: string;
};
export default async function FetchDataInputdata(
  slug: string,
  inputParameters: InputParameters,
): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-API-Key": process.env.SUBJECT_GUIDE_API_KEY || "",
  };

  const initend = process.env.DETAIL_PAGE_API_ENDPOINT;
  const endpoint = `${initend}${slug}?affiliateId=${inputParameters.affiliateId}&pod=${inputParameters.pod}&browseCatId=${inputParameters.browseCatId}&categoryCode=${inputParameters.categoryCode}&wuscaCurrentYear=${inputParameters.wuscaCurrentYear}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: headers,
      // next: { revalidate: 20 },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error while fetching data: " + error);
  }
}

"use server";
const fetchSrPageData = async (subject: any) => {
  try {
    const response = await fetch(`${process.env.SR_PAGE_API_ENDPOINT}`, {
      headers: {
        "x-api-key": `${process.env.SR_PAGE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        townCity: "united-kingdom",
        websiteAppCode: "WU",
        searchCategory: subject,
        affiliateId: "220703",
        qualification: "M",
      }),
    });

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
};

export default fetchSrPageData;

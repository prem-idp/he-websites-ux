import FetchData from "../fetch-data/fetch-data";
import type { Metadata } from "next";

interface MetadataProps {
  params: {
    slug: any;
  };
}
const Metadata = async ({ params }: MetadataProps) => {
  const inputdata: { affiliateId: string } = { affiliateId: "220703" };
  const initend = process.env.DETAIL_PAGE_API_ENDPOINT;
  if (!initend) {
    throw new Error("API_URL_DETAILPAGE is not defined");
  }
  const endpoint: string = `${initend}${params.slug}?affiliateId=${inputdata.affiliateId}`;
  const data = await FetchData(endpoint);
  return (
    <>
      <title>{data?.seoDetails?.metaTitle}</title>
      <meta name="description" content={data?.seoDetails?.metaDescription} />
      <meta name="keywords" content={data?.seoDetails?.metaKeywords} />
      <meta name="robots" content={data?.seoDetails?.metaRobots} />
    </>
  );
};
export default Metadata;

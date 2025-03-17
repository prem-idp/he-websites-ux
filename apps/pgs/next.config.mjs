/** @type {import('next').NextConfig} */
const getImageDomain = () => {
  const env = process.env.NODE_ENV || "development";

  switch (env) {
    case "development":
      return "images-dom.aws.dev.idp-connect.com";
    case "staging":
      return "images-dom.aws.test.idp-connect.com";
    case "production":
      return "images-dom.prod.aws.idp-connect.com";
    default:
      return "images-dom.aws.dev.idp-connect.com";
  }
};
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  env: {
    PROJECT: "PGS",
    AFFILATE_ID: "607022",
    DOMAIN: "postgraduatesearch.com",
    SUBDOMAIN: "https://mdev.dev.aws.whatuni.com",
    SITE_CODE: "PGS_WEB",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      {
        protocol: "https",
        hostname: "mdev.dev.aws.whatuni.com",
      },
      { protocol: "https", hostname: "videos.ctfassets.net" },
      { protocol: "https", hostname: getImageDomain() },
      {
        protocol: "https",
        hostname: "images-dom.aws.test.idp-connect.com",
      },
      { protocol: "https", hostname: "images-dom.aws.stg.idp-connect.com" },
    ],
  },
};

export default nextConfig;

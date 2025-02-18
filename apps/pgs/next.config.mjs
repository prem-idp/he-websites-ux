/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  env: {
    PROJECT: "PGS",
    AFFILATE_ID: "607022",
    DOMAIN: "postgraduatesearch.com",
    SUBDOMAIN: "https://mdev.dev.aws.whatuni.com",
    SITE_CODE: "WU_PGS",
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
    ],
  },
};

export default nextConfig;

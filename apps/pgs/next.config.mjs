/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    PROJECT: "PGS",
    DOMAIN: "postgraduatesearch.com",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  env: {
    PROJECT: "Whatuni",
    DOMAIN: "whatuni.com",
    SUBDOMAIN: "https://mdev.dev.aws.whatuni.com",
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
  env: {
    PROJECT: "Whatuni",
  },
};

export default nextConfig;

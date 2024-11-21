/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    PROJECT: "Whatuni",
    DOMAIN: "whatuni.com",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }, { protocol: "https", hostname: "videos.ctfassets.net" }],
  },
};

export default nextConfig;

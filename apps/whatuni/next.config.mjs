/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
  env: {
    PROJECT: "Whatuni"
  }
};

export default nextConfig;

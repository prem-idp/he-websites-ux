/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

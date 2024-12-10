/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  // trailingSlash: true,
  async redirects() {
    return [
      {
        // Matches routes with query parameters and removes trailing slash
        source: "/:path*/",
        has: [
          {
            type: "query",
            key: "someQueryParam", // Replace "someQueryParam" with a commonly used key or add multiple rules
          },
        ],
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
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

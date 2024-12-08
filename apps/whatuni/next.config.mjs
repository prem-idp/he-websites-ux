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
    NEXT_PUBLIC_HOME_REVIEW_API_ENDPOINT:
      "https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/homepage/reviews",
    NEXT_PUBLIC_SEARCH_AJAX_API:
      "https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/homepage",
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

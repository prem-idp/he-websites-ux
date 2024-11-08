/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(woff|woff2)$/,
  //     use: {
  //       loader: "file-loader",
  //       options: {
  //         outputPath: "static/fonts",
  //         publicPath: "/_next/static/fonts",
  //         name: "[name].[ext]",
  //       },
  //     },
  //   });
  //   return config;
  // },
};

export default nextConfig;

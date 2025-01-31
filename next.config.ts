import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
//   assetPrefix: "./",
  basePath: "",
  trailingSlash: true
};

export default nextConfig;

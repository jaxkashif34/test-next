import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  // staleTimes: {
  //   dynamic: 30,
  //   static: 60,
  // },
  // dynamicIO: true,
  //   ppr: "incremental",
  // },
  logging: {
    fetches: { fullUrl: true },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;

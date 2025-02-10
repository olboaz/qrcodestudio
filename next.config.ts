import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  basePath: "/qrcodestudio"
};

export default nextConfig;

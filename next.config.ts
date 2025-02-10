  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    images: { unoptimized: true },
    basePath: "/qrcodestudio",
    assetPrefix: "/qrcodestudio",
    trailingSlash: true,
  };

  export default nextConfig;

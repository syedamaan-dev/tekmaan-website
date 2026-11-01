import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: "/tekmaan-symbol-512.png",
        destination: "/assets/brand/tekmaan-symbol-512.png",
      },
      {
        source: "/brand/tekmaan-symbol-512.png",
        destination: "/assets/brand/tekmaan-symbol-512.png",
      },
    ];
  },
};

export default nextConfig;

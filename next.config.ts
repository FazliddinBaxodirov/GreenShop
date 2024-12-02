import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol:'http',
        hostname:"3.125.43.204",
        port:"9000",
        pathname:"/image/**"
      }
    ]
  }
};

export default nextConfig;

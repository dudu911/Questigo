import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@questigo/shared", "@questigo/ui"],
  webpack: (config, { isServer }) => {
    // Add support for workspace packages
    config.resolve.alias = {
      ...config.resolve.alias,
      "@questigo/shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@questigo/ui": path.resolve(__dirname, "../../packages/ui/src"),
    };

    return config;
  },
};

export default nextConfig;

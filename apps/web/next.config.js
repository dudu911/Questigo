/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@questigo/shared", "@questigo/ui"],
  eslint: {
    // Ensure ESLint runs during builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Ensure TypeScript checking during builds
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

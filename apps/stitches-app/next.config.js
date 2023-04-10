/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  pageExtensions: ["page.ts", "page.tsx", "api.ts", "api.tsx"],
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  pageExtensions: ["page.ts", "page.tsx", "api.ts", "api.tsx"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

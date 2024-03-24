/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    distDir: '../docs',
    assetPrefix: "/nextassets"
  };
  
export default nextConfig;
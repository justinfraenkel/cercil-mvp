/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,   // <— skip TS checking in Vercel builds
  },
};

export default nextConfig;

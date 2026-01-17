/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.imgbb.com"],
    unoptimized: true, // 🔥 IMPORTANT
  },
};

export default nextConfig;

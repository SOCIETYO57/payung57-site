/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // penting! biar hasil ke folder out
  images: {
    unoptimized: true, // Cloudflare Pages ga support image optimization Next.js
  },
};

export default nextConfig;

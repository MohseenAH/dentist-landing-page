/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
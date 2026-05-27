import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Otimiza imagens automaticamente: compressão WebP/AVIF no servidor
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

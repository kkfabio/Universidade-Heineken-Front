/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack ativado conforme adicionado por Fabio Nunes (mais rápido em dev)
  experimental: {
    turbo: {
      root: import.meta.dirname,
    },
  },
  // Hosts externos usados pelas branches (avatares e imagens de cursos/feed)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
    ],
  },
};

export default nextConfig;

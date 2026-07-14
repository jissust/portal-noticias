import type { NextConfig } from "next";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL
const url = new URL(API_URL || "http://localhost:1337");

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      // Strapi
      {
        protocol: url.protocol.replace(":", "") as "http" | "https",
        hostname: url.hostname,
        port: url.port || undefined,
        pathname: "/uploads/**",
      },

      // API Sports
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        pathname: "/football/**",
      },

      // Si API Sports usa otras rutas
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
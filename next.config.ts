import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.itch.zone',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dorik.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kmex.fr',
      },
      {
        protocol: 'https',
        hostname: 'klava-innovation.com',
      },
    ],
  },
};

export default nextConfig;

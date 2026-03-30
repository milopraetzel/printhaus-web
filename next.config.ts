import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/printhaus-web',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig

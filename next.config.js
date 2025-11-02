/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static exports for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Configure images for static export
  images: {
    unoptimized: true,
    domains: ['github.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Uncomment these lines if deploying to GitHub Pages with repository name
  // basePath: '/My_Portfolio',
  // assetPrefix: '/My_Portfolio/',
  
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
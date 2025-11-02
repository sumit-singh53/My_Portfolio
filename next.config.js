/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable static exports for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Configure images for static export (updated for Next.js 16)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  
  // Uncomment these lines if deploying to GitHub Pages with repository name
  // basePath: '/My_Portfolio',
  // assetPrefix: '/My_Portfolio/',
  
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations (removed experimental features causing issues)
  // experimental: {
  //   optimizeCss: true,
  //   optimizePackageImports: ['react-icons'],
  // },
}

module.exports = nextConfig
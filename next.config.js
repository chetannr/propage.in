/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  // If deploying to GitHub Pages subdirectory:
  // basePath: '/propage.in',
  // trailingSlash: true,
}

module.exports = nextConfig


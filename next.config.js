/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to GitHub Pages subdirectory:
  // basePath: '/propage.in',
  // trailingSlash: true,
}

module.exports = nextConfig


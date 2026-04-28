/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost'],
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizeCss: false,
    },
    // Enable static export if needed
    // output: 'export',
}

module.exports = nextConfig

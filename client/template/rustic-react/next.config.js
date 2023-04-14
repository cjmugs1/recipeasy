/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    images: {
        deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
        domains: ['res.cloudinary.com'],
        loader: 'akamai',
        path: '/',
    },
};

module.exports = nextConfig;

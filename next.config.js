const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? 'https://pet-e-portfolio.vercel.app' : undefined,
};

module.exports = nextConfig;

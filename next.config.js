const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/e-portfolio' : undefined,
    assetPrefix: isProd ? 'https://pet-e-portfolio.vercel.app' : undefined,
};

module.exports = nextConfig;

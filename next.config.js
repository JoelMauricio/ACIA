/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  images: {
    domains: ['sofvznghsbwryaahtjxt.supabase.co'],
  },
};

module.exports = nextConfig;

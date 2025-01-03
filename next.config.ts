import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',

  webpack: (config:any) => {

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
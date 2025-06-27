import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev','10.0.0.3'],
  /*
  experimental: {
    ppr: 'incremental'
  }
  */
};

export default nextConfig;

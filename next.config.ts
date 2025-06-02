// next.config.ts
import type { NextConfig } from 'next';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Determine environment (default to development if not set)
const env = process.env.NODE_ENV || 'development';

// Load the right file from /config
dotenv.config({ path: resolve(__dirname, 'config', `.env.${env}`) });

console.log(`[Next.js config] Loaded /config/.env.${env}`);

const nextConfig: NextConfig = {
  // Your config options here
  reactStrictMode: true,
};

export default nextConfig;

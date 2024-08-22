import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.pixabay.com',
            },
        ],
    },
};

if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
}


export default nextConfig;

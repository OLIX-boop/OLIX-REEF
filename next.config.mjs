/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_DB_ID: process.env.NEXT_DB_ID
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8090',
                pathname: '/**/**',
            },
        ],
    },
};

export default nextConfig;

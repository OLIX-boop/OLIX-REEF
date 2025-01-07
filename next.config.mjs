/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_DB_IP: process.env.NEXT_PRODUCTION == "false" ?  "127.0.0.1:8090": process.env.NEXT_DB_IP,
        NEXT_DNS: process.env.NEXT_PRODUCTION == "false" ? "127.0.0.1" : process.env.NEXT_DNS,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.NEXT_DB_IP,
                port: '8090',
                pathname: '/**/**',
            },
        ],
    },
};

export default nextConfig;

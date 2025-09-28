/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "revvit-wp.revvit.ca",
      },
    ],
  },
};

export default nextConfig;

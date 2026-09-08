const withNextIntl = require("next-intl/plugin");
/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl()({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
    ],
    unoptimized: true,
  },
});

module.exports = nextConfig;

const withNextIntl = require("next-intl/plugin");
/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl()({
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "x-custom-header", value: "my custom header value" }]
      }
    ];
  }
});

module.exports = nextConfig;

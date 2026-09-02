import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Legacy URLs from the previous WordPress site, kept alive for SEO.
  async redirects() {
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/dorms", destination: "/rooms", permanent: true },
      { source: "/private-rooms", destination: "/rooms", permanent: true },
      { source: "/gran-canaria", destination: "/rooms", permanent: true },
      { source: "/tamaran-life", destination: "/the-hostel", permanent: true },
    ];
  },
};

export default nextConfig;

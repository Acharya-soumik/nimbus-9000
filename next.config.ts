import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect /legal-notice to /send-legal-notice
      {
        source: '/legal-notice',
        destination: '/send-legal-notice',
        permanent: true,
      },
      {
        source: '/legal-notice/:path*',
        destination: '/send-legal-notice',
        permanent: true,
      },

      // Redirect /send-a-legal-notice to /send-legal-notice
      {
        source: '/send-a-legal-notice/:path*',
        destination: '/send-legal-notice',
        permanent: true,
      },

      // Redirect multi-level paths (city-specific, etc.)
      // /send-legal-notice/something/something-else → /send-legal-notice
      {
        source: '/send-legal-notice/:type/:city',
        destination: '/send-legal-notice',
        permanent: true,
      },
      {
        source: '/send-legal-notice/in/:city',
        destination: '/send-legal-notice',
        permanent: true,
      },

      // Other redirects
      {
        source: '/consultation/:path*',
        destination: '/legal-consultation',
        permanent: true,
      },
      {
        source: '/document-drafting',
        destination: '/agreement-drafting',
        permanent: true,
      },
      {
        source: '/3500-legal-drafts-templates-bundle/:path*',
        destination: '/legal-drafts-bundle',
        permanent: true,
      },
      {
        source: '/corporate-retainer',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

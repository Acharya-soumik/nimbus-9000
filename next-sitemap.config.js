/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://vakiltech.in',
  generateRobotsTxt: false, // We already have a custom robots.txt
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Exclude patterns
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/legal-notice-for-money-recovery', // Redirect page
    '/thank-you',
    '/legal-drafts-bundle-success',
  ],

  // Additional paths to include
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/send-legal-notice'),
    await config.transform(config, '/legal-consultation'),
    await config.transform(config, '/agreement-drafting'),
    await config.transform(config, '/legal-drafts-bundle'),
    await config.transform(config, '/fssai-registration'),
    await config.transform(config, '/gst-registration'),
    await config.transform(config, '/trade-license'),
    await config.transform(config, '/itr-filing'),
    await config.transform(config, '/about'),
    await config.transform(config, '/blogs'),
  ],

  // Custom transformation for specific routes
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorityMap = {
      '/': 1.0,
      '/send-legal-notice': 0.9,
      '/legal-consultation': 0.9,
      '/agreement-drafting': 0.9,
      '/legal-drafts-bundle': 0.9,
      '/fssai-registration': 0.9,
      '/gst-registration': 0.9,
      '/trade-license': 0.9,
      '/itr-filing': 0.9,
      '/about': 0.8,
      '/blogs': 0.8,
    };

    // Changefreq for different page types
    const changefreqMap = {
      '/': 'daily',
      '/blogs': 'daily',
      '/send-legal-notice': 'weekly',
      '/legal-consultation': 'weekly',
      '/agreement-drafting': 'weekly',
      '/legal-drafts-bundle': 'weekly',
      '/fssai-registration': 'weekly',
      '/gst-registration': 'weekly',
      '/trade-license': 'weekly',
      '/itr-filing': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || config.changefreq,
      priority: priorityMap[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

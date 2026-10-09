/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://embassyriverinevilla.in",
  generateRobotsTxt: false,
  generateIndexSitemap: false,

  exclude: ["/thank-you"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", disallow: ["/cgi-bin/"] }],
  },

  transform: async (config, path) => {
    // The money pages deserve a higher priority than the article archive.
    const high = [
      "/price",
      "/floor-plans",
      "/master-plan",
      "/villas-configurations",
      "/amenities",
      "/location-connectivity",
    ];

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : high.includes(path) ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

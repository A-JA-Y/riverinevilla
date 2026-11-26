/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://embassyriverinevilla.in",
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  generateRobotsTxt: false,
  generateIndexSitemap: false,

  // App Router icon files (app/icon.png, app/apple-icon.png) export as routes;
  // keep them out of the sitemap, which lists pages only.
  exclude: ["/thank-you", "/icon.png", "/apple-icon.png"],

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

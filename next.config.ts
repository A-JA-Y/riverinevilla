import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  allowedDevOrigins: ["192.168.29.216"],

  async redirects() {
    return [
      // Routes renamed in the Embassy Riverine rebuild — keep the old paths alive.
      {
        source: "/about-godrej-golf-links",
        destination: "/about-embassy-riverine",
        permanent: true,
      },
      {
        source: "/about-godrej-properties",
        destination: "/about-embassy-group",
        permanent: true,
      },
      {
        source: "/crownresidences",
        destination: "/villas-configurations",
        permanent: true,
      },
      // Retired articles
      {
        source: "/blogs/godrej-golf-links-greater-noida-buyers-guide-2026",
        destination: "/blogs/embassy-riverine-north-bangalore-buyers-guide-2026",
        permanent: true,
      },
      {
        source: "/blogs/jewar-airport-godrej-golf-links-greater-noida-smart-investment-2026",
        destination: "/blogs/villa-projects-north-bangalore-2026",
        permanent: true,
      },
      {
        source: "/news/greater-noida-circle-rate-hike-godrej-golf-links-2026",
        destination: "/news/embassy-origins-launch-north-bangalore-2026",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));

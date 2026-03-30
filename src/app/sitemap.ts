import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/business-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/ten-out-of-ten", "/ten-out-of-ten-tailor", "/contact"];

  return pages.map((path, index) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}

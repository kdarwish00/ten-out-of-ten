import type { Metadata } from "next";

import { BusinessPage } from "@/components/business-page";
import { businessBySlug, siteConfig } from "@/lib/business-data";
import { createLocalBusinessJsonLd } from "@/lib/seo";

const business = businessBySlug["ten-out-of-ten"];
const pagePath = "/ten-out-of-ten";
const pageUrl = `${siteConfig.domain}${pagePath}`;

export const metadata: Metadata = {
  title: business.name,
  description: business.description,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: business.name,
    description: business.description,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: business.name,
    description: business.description,
  },
};

export default function TenOutOfTenPage() {
  return (
    <BusinessPage
      business={business}
      pageUrl={pageUrl}
      localBusinessJsonLd={createLocalBusinessJsonLd(business, pageUrl)}
    />
  );
}

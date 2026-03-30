import type { Business } from "@/lib/business-data";

export function createLocalBusinessJsonLd(business: Business, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    url: pageUrl,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: business.serviceAreas,
    openingHoursSpecification: business.hours.map((hoursRow) => ({
      "@type": "OpeningHoursSpecification",
      description: hoursRow,
    })),
    sameAs: business.sameAs,
  };
}

export function createOrganizationJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ten Out Of Ten",
    url: siteUrl,
  };
}

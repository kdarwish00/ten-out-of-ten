export type Business = {
  slug: "ten-out-of-ten" | "ten-out-of-ten-tailor";
  name: string;
  shortName: string;
  description: string;
  services: string[];
  serviceAreas: string[];
  phone: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    mapUrl: string;
  };
  hours: string[];
  google: {
    businessProfileUrl: string;
    placeId: string;
  };
  sameAs: string[];
};

export const siteConfig = {
  siteName: "Ten Out Of Ten",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  defaultDescription:
    "Ten Out Of Ten and Ten Out Of Ten Tailor services under one trusted local brand.",
};

export const businesses: Business[] = [
  {
    slug: "ten-out-of-ten",
    name: "Ten Out Of Ten",
    shortName: "Ten Out Of Ten",
    description:
      "Professional local services focused on quality, reliability, and customer satisfaction.",
    services: [
      "Custom service 1",
      "Custom service 2",
      "Custom service 3",
      "Consultations",
    ],
    serviceAreas: ["Your City", "Nearby Area 1", "Nearby Area 2"],
    phone: "(000) 000-0000",
    phoneHref: "tel:+10000000000",
    email: "hello@example.com",
    address: {
      street: "123 Main St",
      city: "Your City",
      region: "State",
      postalCode: "00000",
      country: "US",
      mapUrl: "https://maps.google.com/?q=123+Main+St+Your+City",
    },
    hours: [
      "Mon-Fri 9:00 AM - 6:00 PM",
      "Sat 10:00 AM - 4:00 PM",
      "Sun Closed",
    ],
    google: {
      businessProfileUrl: "https://share.google/3KaK99LO6VeXWJJt8",
      placeId: "REPLACE_WITH_PLACE_ID_1",
    },
    sameAs: ["https://share.google/3KaK99LO6VeXWJJt8"],
  },
  {
    slug: "ten-out-of-ten-tailor",
    name: "Ten Out Of Ten Tailor",
    shortName: "Ten Out Of Ten Tailor",
    description:
      "Expert tailoring and alterations with precise craftsmanship and personal service.",
    services: [
      "Suit alterations",
      "Dress adjustments",
      "Hem and fit corrections",
      "Custom tailoring",
    ],
    serviceAreas: ["Your City", "Nearby Area 1", "Nearby Area 2"],
    phone: "(000) 000-0000",
    phoneHref: "tel:+10000000000",
    email: "tailor@example.com",
    address: {
      street: "123 Main St",
      city: "Your City",
      region: "State",
      postalCode: "00000",
      country: "US",
      mapUrl: "https://maps.google.com/?q=123+Main+St+Your+City",
    },
    hours: [
      "Mon-Fri 9:00 AM - 6:00 PM",
      "Sat 10:00 AM - 4:00 PM",
      "Sun Closed",
    ],
    google: {
      businessProfileUrl: "https://share.google/ZwZ7aVAEcsRdpGz14",
      placeId: "REPLACE_WITH_PLACE_ID_2",
    },
    sameAs: ["https://share.google/ZwZ7aVAEcsRdpGz14"],
  },
];

export const businessBySlug = Object.fromEntries(
  businesses.map((business) => [business.slug, business]),
) as Record<Business["slug"], Business>;

export const primaryKeywords = [
  "local services",
  "tailor",
  "alterations",
  "professional service",
  "near me",
];

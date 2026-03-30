export type Business = {
  slug: "ten-out-of-ten" | "ten-out-of-ten-tailor";
  name: string;
  shortName: string;
  description: string;
  services: string[];
  pricing?: Array<{
    service: string;
    price: string;
  }>;
  pricingNote?: string;
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
      "Hair cuts and styling",
      "Skin fades",
      "Beard services",
      "Threading and wax",
      "Hair and beard colouring",
      "Face cleaning",
    ],
    pricing: [
      { service: "Hair Cut", price: "£14" },
      { service: "Hair Wash", price: "£3" },
      { service: "Skin Fade", price: "£16" },
      { service: "OAP & Kids", price: "£13" },
      { service: "Beard Shaving", price: "£10" },
      { service: "Beard (Box or Line)", price: "£12" },
      { service: "Threading & Wax", price: "£7" },
      { service: "Hair Colouring", price: "£30" },
      { service: "Beard Colouring", price: "£22" },
      { service: "Face Cleaning", price: "£18" },
    ],
    pricingNote: "Cash only please.",
    serviceAreas: ["Your City", "Nearby Area 1", "Nearby Area 2"],
    phone: "+44 07799414143",
    phoneHref: "tel:+447799414143",
    email: "hello@example.com",
    address: {
      street: "7 Bell St",
      city: "London",
      region: "NW1",
      postalCode: "5BY",
      country: "GB",
      mapUrl: "https://maps.google.com/?q=7+Bell+St+London+NW1+5BY",
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
    phone: "+44 07799414143",
    phoneHref: "tel:+447799414143",
    email: "tailor@example.com",
    address: {
      street: "7 Bell St",
      city: "London",
      region: "NW1",
      postalCode: "5BY",
      country: "GB",
      mapUrl: "https://maps.google.com/?q=7+Bell+St+London+NW1+5BY",
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

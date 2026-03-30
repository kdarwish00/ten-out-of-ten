import type { Metadata } from "next";

import { businesses } from "@/lib/business-data";

const mapShareUrl = "https://maps.app.goo.gl/ujfDma55k6mjdnuX8";
const mapEmbedUrl =
  "https://www.google.com/maps?q=7+Bell+St,+London+NW1+5BY&output=embed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ten Out Of Ten and Ten Out Of Ten Tailor. Call, map directions, and Google profile links.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
        <p className="mt-3 text-slate-200">
          Reach both businesses quickly by phone, maps, or Google profile.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {businesses.map((business) => (
          <article
            key={business.slug}
            className="ui-card"
          >
            <h2 className="text-xl font-semibold text-slate-900">{business.name}</h2>
            <p className="mt-4">
              <a className="underline text-slate-700" href={business.phoneHref}>
                {business.phone}
              </a>
            </p>
            <p className="mt-3 text-slate-700">
              {business.address.street}, {business.address.city},{" "}
              {business.address.region} {business.address.postalCode}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="btn-primary"
                href={business.address.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
              <a
                className="rounded-full border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                href={business.google.reviewUrl}
                target="_blank"
                rel="noreferrer"
              >
                Leave a review
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="ui-card mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-900">Find us on map</h2>
          <a
            className="rounded-full border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            href={mapShareUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
          <iframe
            title="Ten Out Of Ten location map"
            src={mapEmbedUrl}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}

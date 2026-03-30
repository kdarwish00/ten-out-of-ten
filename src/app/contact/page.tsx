import type { Metadata } from "next";

import { businesses } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ten Out Of Ten and Ten Out Of Ten Tailor. Call, email, map directions, and Google profile links.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-slate-900 px-5 py-10 text-white sm:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
        <p className="mt-3 text-slate-200">
          Reach both businesses quickly by phone, email, maps, or Google
          profile.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {businesses.map((business) => (
          <article
            key={business.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{business.name}</h2>
            <p className="mt-4">
              <a className="underline" href={business.phoneHref}>
                {business.phone}
              </a>
            </p>
            <p className="mt-2">
              <a className="underline" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </p>
            <p className="mt-3 text-slate-700">
              {business.address.street}, {business.address.city},{" "}
              {business.address.region} {business.address.postalCode}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                href={business.address.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
              <a
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900"
                href={business.google.businessProfileUrl}
                target="_blank"
                rel="noreferrer"
              >
                Google reviews
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { BusinessCard } from "@/components/business-card";
import { businesses, primaryKeywords } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Ten Out Of Ten barbershop and Ten Out Of Ten Tailor in one place. View services, reviews, directions, and contact details.",
  keywords: primaryKeywords,
};

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Two trusted businesses, one website
        </h1>
        <p className="mt-3 max-w-3xl text-slate-200">
          Find details for Ten Out Of Ten barbershop and Ten Out Of Ten Tailor,
          including services, location, and Google reviews.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
          <Link
            href="/ten-out-of-ten"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Barbershop
          </Link>
          <Link
            href="/ten-out-of-ten-tailor"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Tailor
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {businesses.map((business) => (
          <BusinessCard key={business.slug} business={business} />
        ))}
      </section>
    </main>
  );
}

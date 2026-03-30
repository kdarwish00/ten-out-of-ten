import type { Metadata } from "next";
import Link from "next/link";

import { BusinessCard } from "@/components/business-card";
import { businesses, primaryKeywords } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Ten Out Of Ten and Ten Out Of Ten Tailor in one place. View services, reviews, directions, and contact details.",
  keywords: primaryKeywords,
};

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Two trusted businesses, one website
        </h1>
        <p className="mt-3 max-w-3xl text-slate-100">
          Find details for Ten Out Of Ten and Ten Out Of Ten Tailor, including
          services, locations, and Google reviews.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
          <Link href="/ten-out-of-ten" className="btn-secondary">
            Barbershop
          </Link>
          <Link href="/ten-out-of-ten-tailor" className="btn-secondary">
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

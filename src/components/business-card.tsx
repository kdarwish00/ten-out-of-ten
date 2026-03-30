import Link from "next/link";

import type { Business } from "@/lib/business-data";

type BusinessCardProps = {
  business: Business;
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className="ui-card">
      <h2 className="text-xl font-semibold text-white">{business.name}</h2>
      <p className="mt-3 text-slate-200">{business.description}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-300">
        {business.services.slice(0, 4).map((service) => (
          <li key={service}>- {service}</li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          className="btn-primary"
          href={`/${business.slug}`}
        >
          View details
        </Link>
        <a
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          href={business.phoneHref}
        >
          Call now
        </a>
      </div>
    </article>
  );
}

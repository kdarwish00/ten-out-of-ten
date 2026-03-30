import Link from "next/link";

import type { Business } from "@/lib/business-data";

type BusinessCardProps = {
  business: Business;
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className="ui-card">
      <h2 className="text-xl font-semibold text-slate-900">{business.name}</h2>
      <p className="mt-3 text-slate-700">{business.description}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-600">
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
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
          href={business.phoneHref}
        >
          Call now
        </a>
      </div>
    </article>
  );
}

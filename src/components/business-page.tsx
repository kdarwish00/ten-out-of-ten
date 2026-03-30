import type { Business } from "@/lib/business-data";
import { ReviewsSection } from "@/components/reviews-section";

type BusinessPageProps = {
  business: Business;
  pageUrl: string;
  localBusinessJsonLd: object;
};

export function BusinessPage({
  business,
  pageUrl,
  localBusinessJsonLd,
}: BusinessPageProps) {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="hero-panel">
        <h1 className="text-3xl font-bold sm:text-4xl">{business.name}</h1>
        <p className="mt-3 max-w-3xl text-slate-200">{business.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href={business.phoneHref}>
            Call {business.shortName}
          </a>
          <a
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            href={business.address.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
          <a
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            href={business.google.reviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            Leave a review
          </a>
          <a
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            href={business.google.businessProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
            Google profile
          </a>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="ui-card">
          <h2 className="text-xl font-semibold text-slate-900">Services</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {business.services.map((service) => (
              <li key={service}>- {service}</li>
            ))}
          </ul>
        </section>

        {business.pricing?.length ? (
          <section className="ui-card">
            <h2 className="text-xl font-semibold text-slate-900">Prices</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {business.pricing.map((item) => (
                <li
                  key={item.service}
                  className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2 last:border-b-0 last:pb-0"
                >
                  <span>{item.service}</span>
                  <span className="font-semibold text-slate-900">{item.price}</span>
                </li>
              ))}
            </ul>
            {business.pricingNote ? (
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-red-600">
                {business.pricingNote}
              </p>
            ) : null}
          </section>
        ) : (
          <section className="ui-card">
            <h2 className="text-xl font-semibold text-slate-900">Service areas</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {business.serviceAreas.map((area) => (
                <li key={area}>- {area}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="ui-card">
          <h2 className="text-xl font-semibold text-slate-900">Contact details</h2>
          <p className="mt-3 text-slate-700">
            {business.address.street}, {business.address.city}, {business.address.region}{" "}
            {business.address.postalCode}
          </p>
          <p className="mt-2 text-slate-700">
            <a className="underline" href={business.phoneHref}>
              {business.phone}
            </a>
          </p>
          <p className="mt-2 text-slate-700">
            <a className="underline" href={`mailto:${business.email}`}>
              {business.email}
            </a>
          </p>
          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-900">
            Hours
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {business.hours.map((hoursRow) => (
              <li key={hoursRow}>{hoursRow}</li>
            ))}
          </ul>
        </section>

        <ReviewsSection
          placeId={business.google.placeId}
          fallbackReviewUrl={business.google.reviewUrl}
          title={`${business.shortName} Google Reviews`}
        />
      </div>

      <p className="mt-6 text-sm text-slate-500">Direct page URL: {pageUrl}</p>
    </main>
  );
}

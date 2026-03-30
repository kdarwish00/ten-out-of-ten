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
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="rounded-2xl bg-slate-900 px-5 py-10 text-white sm:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">{business.name}</h1>
        <p className="mt-3 max-w-3xl text-slate-200">{business.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900"
            href={business.phoneHref}
          >
            Call {business.shortName}
          </a>
          <a
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold"
            href={business.address.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
          <a
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold"
            href={business.google.businessProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
            Google profile
          </a>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Services</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {business.services.map((service) => (
              <li key={service}>- {service}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Service areas</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {business.serviceAreas.map((area) => (
              <li key={area}>- {area}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
          fallbackProfileUrl={business.google.businessProfileUrl}
          title={`${business.shortName} Google Reviews`}
        />
      </div>

      <p className="mt-6 text-sm text-slate-500">Direct page URL: {pageUrl}</p>
    </main>
  );
}

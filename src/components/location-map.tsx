import { MAP_EMBED_URL, MAP_SHARE_URL } from "@/lib/site-map";

type LocationMapSectionProps = {
  heading?: string;
  iframeTitle?: string;
  className?: string;
};

export function LocationMapSection({
  heading = "Find us on map",
  iframeTitle = "Ten Out Of Ten location map",
  className = "mt-8",
}: LocationMapSectionProps) {
  return (
    <section className={`ui-card ${className}`.trim()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
        <a
          className="rounded-full border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          href={MAP_SHARE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
        <iframe
          title={iframeTitle}
          src={MAP_EMBED_URL}
          className="h-[360px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

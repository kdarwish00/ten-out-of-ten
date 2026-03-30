import type { ManualReview } from "@/lib/manual-reviews";

function Stars() {
  return <span className="text-amber-500" aria-hidden>★★★★★</span>;
}

function ReviewCard({ review }: { review: ManualReview }) {
  return (
    <article className="ui-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-semibold text-slate-900">{review.author}</p>
        <p className="text-xs text-slate-500">{review.dateLabel}</p>
      </div>
      <p className="mt-1">
        <Stars />
      </p>
      <p className="mt-3 whitespace-pre-line text-sm text-slate-700">{review.text}</p>
    </article>
  );
}

type HomeReviewsProps = {
  barbershop: ManualReview[];
  tailor: ManualReview[];
};

export function HomeReviews({ barbershop, tailor }: HomeReviewsProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900">What customers say</h2>
      <p className="mt-2 text-slate-600">
        Reviews shared from Google (shown here for convenience).
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Barbershop</h3>
          <div className="mt-4 space-y-4">
            {barbershop.map((review, index) => (
              <ReviewCard key={`barbershop-${index}`} review={review} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Tailor</h3>
          <div className="mt-4 space-y-4">
            {tailor.map((review, index) => (
              <ReviewCard key={`tailor-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

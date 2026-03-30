import { getGoogleReviews } from "@/lib/google-reviews";

type ReviewsSectionProps = {
  placeId: string;
  fallbackProfileUrl: string;
  title: string;
};

function renderStars(rating: number) {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)));
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

export async function ReviewsSection({
  placeId,
  fallbackProfileUrl,
  title,
}: ReviewsSectionProps) {
  const reviewsData = await getGoogleReviews(placeId);

  if (!reviewsData) {
    return (
      <section className="ui-card">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-slate-700">
          Live reviews are temporarily unavailable.
        </p>
        <a
          className="btn-primary mt-4 inline-flex"
          href={fallbackProfileUrl}
          target="_blank"
          rel="noreferrer"
        >
          View reviews on Google
        </a>
      </section>
    );
  }

  return (
    <section className="ui-card">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-700">
        {reviewsData.rating ? `${reviewsData.rating.toFixed(1)} / 5` : "N/A"} (
        {reviewsData.totalRatings ?? 0} ratings)
      </p>

      <div className="mt-4 space-y-4">
        {reviewsData.reviews.map((review) => (
          <article key={`${review.authorName}-${review.relativeTimeDescription}`}>
            <p className="text-sm font-medium text-slate-900">
              {review.authorName}
            </p>
            <p className="text-sm text-amber-600">{renderStars(review.rating)}</p>
            <p className="mt-1 text-sm text-slate-700">{review.text}</p>
            <p className="mt-1 text-xs text-slate-500">
              {review.relativeTimeDescription}
            </p>
          </article>
        ))}
      </div>

      <a
        className="btn-primary mt-6 inline-flex"
        href={reviewsData.profileUrl ?? fallbackProfileUrl}
        target="_blank"
        rel="noreferrer"
      >
        View all reviews on Google
      </a>
    </section>
  );
}

export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription: string;
};

export type GoogleReviewResult = {
  name: string;
  rating: number | null;
  totalRatings: number | null;
  reviews: GoogleReview[];
  profileUrl: string | null;
};

type GooglePlacesDetailsResponse = {
  status: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: Array<{
      author_name?: string;
      rating?: number;
      text?: string;
      relative_time_description?: string;
    }>;
  };
};

export async function getGoogleReviews(
  placeId: string,
): Promise<GoogleReviewResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !placeId || placeId.startsWith("REPLACE_WITH_PLACE_ID")) {
    return null;
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,url,reviews");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 6 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GooglePlacesDetailsResponse;
    if (!data.result || data.status !== "OK") {
      return null;
    }

    return {
      name: data.result.name ?? "",
      rating: data.result.rating ?? null,
      totalRatings: data.result.user_ratings_total ?? null,
      profileUrl: data.result.url ?? null,
      reviews: (data.result.reviews ?? []).slice(0, 3).map((review) => ({
        authorName: review.author_name ?? "Google User",
        rating: review.rating ?? 0,
        text: review.text ?? "",
        relativeTimeDescription: review.relative_time_description ?? "",
      })),
    };
  } catch {
    return null;
  }
}

import { TReviewCard } from "@/shared/types/reviewCard";

export async function useReviews() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`
  );
  const reviews = (await response.json()) as TReviewCard[];

  return reviews;
}

import { ReviewCard } from "@/entities/review-card";
import { TReviewCard } from "@/shared/types/reviewCard";
import { BorderedGrid } from "@/shared/ui";

export async function Reviews() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`
  );
  const reviews = (await response.json()) as TReviewCard[];

  return (
    <BorderedGrid
      cols={3}
      data={reviews}
      Component={ReviewCard}
      className="container"
    />
  );
}

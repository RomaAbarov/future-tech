import { ReviewCard } from "@/entities/review-card";
import { BorderedGrid } from "@/shared/ui";
import { useReviews } from "../api/useReviews";

export async function Reviews() {
  const reviews = await useReviews();

  return (
    <BorderedGrid
      cols={3}
      data={reviews}
      Component={ReviewCard}
      className="container"
    />
  );
}

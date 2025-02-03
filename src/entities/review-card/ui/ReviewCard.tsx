import { PersonCard, Rating } from "@/shared/ui";
import { TReviewCard } from "@/shared/types/reviewCard";
import "./ReviewCard.scss";

export function ReviewCard({
  image,
  name,
  department,
  review,
  rating,
}: TReviewCard) {
  return (
    <div className="review-card">
      <div className="review-card__author">
        <PersonCard image={image} name={name} department={department} />
      </div>
      <div className="review-card__body tile">
        <div className="review-card__rating-view">
          <Rating rating={rating} />
        </div>
        <blockquote className="review-card__description">
          <p>{review}</p>
        </blockquote>
      </div>
    </div>
  );
}

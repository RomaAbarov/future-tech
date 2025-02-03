import { TPersonCard } from "./personCard";

export type TReviewCard = TPersonCard & {
  id: string;
  review: string;
  rating: number;
};

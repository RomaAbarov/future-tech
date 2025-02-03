import Image from "next/image";
import { TPersonCard } from "@/shared/types/personCard";
import "./PersonCard.scss";

export function PersonCard({ image, name, department }: TPersonCard) {
  return (
    <div className="review-card__author person-card">
      <Image
        src={image}
        alt=""
        className="person-card__image"
        width="60"
        height="60"
      />
      <div className="person-card__body">
        <p className="person-card__name">{name}</p>
        <p className="person-card__department">{department}</p>
      </div>
    </div>
  );
}

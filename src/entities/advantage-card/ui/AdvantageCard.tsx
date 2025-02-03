import Image from "next/image";
import Link from "next/link";
import { TAdvantageCard } from "@/shared/types/advantageCard";
import "./AdvantageCard.scss";

export function AdvantageCard({
  srcIcon,
  title,
  subtitle,
  link,
  details,
}: TAdvantageCard) {
  return (
    <div className="advantage-card">
      <Image
        src={srcIcon}
        alt=""
        className="advantage-card__image"
        width="50"
        height="50"
      />
      <Link href={link} className="advantage-card__link circle-icon">
        <h3 className="advantage-card__title h6">{title}</h3>
        <p className="advantage-card__subtitle">{subtitle}</p>
      </Link>
      <p className="advantage-card__details">{details}</p>
    </div>
  );
}

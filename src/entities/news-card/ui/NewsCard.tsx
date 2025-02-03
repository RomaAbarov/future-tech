import Image from "next/image";
import Link from "next/link";
import { Summary } from "@/features/summary";
import { Actions } from "@/features/actions";
import { TNewsCard } from "@/shared/types/newsCard";
import "./NewsCard.scss";

export function NewsCard({
  id,
  srcIcon,
  title,
  category,
  publicationDate,
  author,
  link,
  labelLink,
  likes,
  share,
  isLike,
}: TNewsCard) {
  return (
    <article className="news-card">
      <Image
        src={srcIcon}
        alt=""
        className="news-card__image"
        width="512"
        height="427"
        priority
      />
      <div className="news-card__body">
        <h2 className="news-card__title h6">{title}</h2>
        <div className="news-card__description">
          <p>{category}</p>
        </div>
      </div>
      {category && publicationDate && author && (
        <div className="news-card__summary">
          <Summary
            category={category}
            publicationDate={publicationDate}
            author={author}
          />
        </div>
      )}
      <div className="news-card__controls">
        <div className="news-card__actions">
          <Actions id={id} likes={likes} isLike={isLike} share={share} />
        </div>
        <Link href={link} className="news-card__link button">
          <span className="icon icon--yellow-arrow">{labelLink}</span>
        </Link>
      </div>
    </article>
  );
}

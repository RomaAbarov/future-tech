import Link from "next/link";
import { PersonCard } from "@/shared/ui";
import { Actions } from "@/features/actions";
import { TBlogCard } from "@/shared/types/blogCard";
import formatDate from "@/shared/lib/formatDate";
import { route } from "@/shared/router/routes";
import "./BlogCard.scss";

export function BlogCard({
  id,
  image,
  name,
  department,
  postDate,
  title,
  description,
  discussions,
  likes,
  isLike,
  share,
}: TBlogCard) {
  return (
    <article className="blog-card container">
      <div className="blog-card__author">
        <PersonCard image={image} name={name} department={department} />
      </div>
      <div className="blog-card__body">
        <time dateTime={postDate} className="blog-card__date h6">
          {formatDate(postDate)}
        </time>
        <div className="blog-card__info">
          <h4 className="blog-card__title">{title}</h4>
          <div className="blog-card__description">
            <p>{description}</p>
          </div>
        </div>
        <div className="blog-card__actions blog-actions">
          <Actions
            id={id}
            likes={likes}
            isLike={isLike}
            discussions={discussions}
            share={share}
          />
        </div>
      </div>
      <Link href={route.Blog + `/${id}`} className="blog-card__link button">
        <span className="icon icon--yellow-arrow">View Blog</span>
      </Link>
    </article>
  );
}

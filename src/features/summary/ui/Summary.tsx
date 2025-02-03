import clsx from "clsx";
import formatDate from "@/shared/lib/formatDate";
import "./Summary.scss";

type Props = {
  category: string;
  author?: string;
  publicationDate?: string;
  readingTime?: string;
  cols?: number;
};

export function Summary({
  category,
  author,
  publicationDate,
  readingTime,
  cols,
}: Props) {
  return (
    <div className={clsx("summary", { [`summary--${cols}-cols`]: cols })}>
      <dl className="summary__list">
        <div className="summary__item">
          <dt className="summary__key">Category</dt>
          <dd className="summary__value">{category}</dd>
        </div>
        {readingTime && (
          <div className="summary__item">
            <dt className="summary__key">Reading Time</dt>
            <dd className="summary__value">{readingTime}</dd>
          </div>
        )}
        <div className="summary__item">
          <dt className="summary__key">Publication Date</dt>
          <dd className="summary__value">
            <time dateTime={publicationDate}>
              {publicationDate && formatDate(publicationDate)}
            </time>
          </dd>
        </div>
        <div className="summary__item">
          <dt className="summary__key">Author</dt>
          <dd className="summary__value">{author}</dd>
        </div>
      </dl>
    </div>
  );
}

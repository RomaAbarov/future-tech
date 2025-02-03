import clsx from "clsx";
import "./Rating.scss";

type Props = {
  rating: number;
};

export function Rating({ rating }: Props) {
  return (
    <div
      className="rating-view"
      aria-label={`rating ${rating} star`}
      title={`rating ${rating} star`}
    >
      {[...new Array(5)].map((_, index) => (
        <div
          key={index}
          className={clsx("rating-view__star", { "is-active": index < rating })}
        ></div>
      ))}
    </div>
  );
}

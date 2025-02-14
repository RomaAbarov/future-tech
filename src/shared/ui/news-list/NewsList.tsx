import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";
import { route } from "@/shared/router/routes";
import "./NewsList.scss";

type Props<T> = {
  data: T[];
  Component: FC<T>;
  hasHeader?: boolean;
  className?: string;
};

export function NewsList<T extends { id: string }>({
  data,
  Component,
  hasHeader,
  className,
}: Props<T>) {
  return (
    <div className={clsx("news", className)}>
      {hasHeader && (
        <header className="news__header">
          <h2 className="news__title h4">Similar News</h2>
          <Link href={route.News} className="news__link button">
            <span className="icon icon--yellow-arrow">View All News</span>
          </Link>
        </header>
      )}

      <ul className="news__list">
        {data.map((item) => (
          <li key={item.id} className="news__item">
            <Component key={item.id} {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { FC } from "react";
import clsx from "clsx";
import "./BorderedGrid.scss";

type Props<T> = {
  cols?: number;
  data: T[];
  Component: FC<T>;
  className?: string;
};

export function BorderedGrid<T extends { id: string }>({
  data,
  Component,
  cols,
  className,
}: Props<T>) {
  return (
    <ul
      className={clsx(
        "bordered-grid",
        {
          [`bordered-grid--${cols}-cols`]: cols,
        },
        className
      )}
    >
      {data.map((item) => (
        <li key={item.id} className="bordered-grid__item">
          <Component key={item.id} {...item} />
        </li>
      ))}
    </ul>
  );
}

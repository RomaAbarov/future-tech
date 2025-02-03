import { FC } from "react";
import "./List.scss";

type Props<T> = {
  data: T[];
  Component: FC<T>;
};

export function List<T extends { id: string }>({ data, Component }: Props<T>) {
  return (
    <ul className="list">
      {data.map((item) => (
        <li key={item.id} className="list__item">
          <Component key={item.id} {...item} />
        </li>
      ))}
    </ul>
  );
}

"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { routes } from "@/shared/router/routes";
import "./Navigation.scss";

type Props = {
  onClick: () => void;
};

export function Navigation({ onClick }: Props) {
  const pathname = usePathname();

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {routes.map((route) => (
          <li key={route.title} className="header__menu-item">
            <Link
              href={route.path}
              className={clsx(
                "header__menu-link",
                pathname === route.path && "is-active"
              )}
              onClick={onClick}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

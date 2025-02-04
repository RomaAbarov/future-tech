"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Navigation } from "@/features/navigation";
import { BurgerButton } from "@/shared/ui";
import "./OverlayMenu.scss";

export function OverlayMenu() {
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);

  function onClick() {
    if (isShowBurgerMenu) {
      document.documentElement.classList.toggle("is-lock");
      setIsShowBurgerMenu(!isShowBurgerMenu);
    }
  }

  return (
    <>
      <div className={clsx("header__overlay", isShowBurgerMenu && "is-active")}>
        <Navigation onClick={onClick} />
        <Link
          href="/contacts"
          className="header__contact-us-link button button--accent"
          onClick={onClick}
        >
          Contact Us
        </Link>
      </div>
      <BurgerButton
        isActive={isShowBurgerMenu}
        setIsActive={setIsShowBurgerMenu}
      />
    </>
  );
}

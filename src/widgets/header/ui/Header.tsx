import Link from "next/link";
import { OverlayMenu } from "@/features/overlay-menu";
import "./Header.scss";

export function Header() {
  return (
    <header className="header" data-js-header>
      <div className="header__promo">
        <div className="header__promo-inner container">
          <Link href="/" className="header__promo-link">
            <span className="icon icon--yellow-arrow">
              Subscribe to our Newsletter For New & latest Blogs and Resources
            </span>
          </Link>
        </div>
      </div>
      <div className="header__body">
        <div className="header__body-inner container">
          <Link
            href="/"
            className="header__logo logo"
            title="Home"
            aria-label="Home"
          >
            <img
              src="/images/logo.svg"
              alt=""
              className="logo__image"
              width="179"
              height="50"
            />
          </Link>
          <OverlayMenu />
        </div>
      </div>
    </header>
  );
}

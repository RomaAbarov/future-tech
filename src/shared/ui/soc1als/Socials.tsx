import Link from "next/link";
import clsx from "clsx";
import MediumSvg from "/public/icons/medium.svg";
import TwitterSvg from "/public/icons/twitter.svg";
import LinkedInSvg from "/public/icons/linkedIn.svg";
import "./Socials.scss";

type Props = {
  className?: string;
};

export function Socials({ className }: Props) {
  return (
    <div className={clsx("soc1als", className)}>
      <ul className="soc1als__list">
        <li className="soc1als__list-item">
          <Link
            href="#"
            className="soc1als__list-link"
            target="_blank"
            aria-label="twitter"
            title="twitter"
          >
            <TwitterSvg />
          </Link>
        </li>
        <li className="soc1als__list-item">
          <Link
            href="#"
            className="soc1als__list-link"
            target="_blank"
            aria-label="Medium"
            title="Medium"
          >
            <MediumSvg />
          </Link>
        </li>
        <li className="soc1als__list-item">
          <Link
            href="#"
            className="soc1als__list-link"
            target="_blank"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInSvg />
          </Link>
        </li>
      </ul>
    </div>
  );
}

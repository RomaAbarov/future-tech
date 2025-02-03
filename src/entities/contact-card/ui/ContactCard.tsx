import Link from "next/link";
import { ReactNode } from "react";
import { TContactCard } from "@/shared/types/contactCard";
import "./ContactCard.scss";

type Props = {
  data?: TContactCard;
  children?: ReactNode;
};

export function ContactCard({ children, data }: Props) {
  return (
    <div className="contacts-card">
      <h2 className="contacts-card__title h6">{data?.title}</h2>
      <div className="contacts-card__body">
        {data?.email && (
          <Link
            href={`mailto:${data.email}`}
            className="contacts-card__link button"
          >
            <span className="icon icon--yellow-arrow">{data.email}</span>
          </Link>
        )}
        {data?.tel && (
          <Link href={`tel:${data.tel}`} className="contacts-card__link button">
            <span className="icon icon--yellow-arrow">{data.tel}</span>
          </Link>
        )}
        {data?.address && (
          <address className="contacts-card__address">{data.address}</address>
        )}
        {data?.link && (
          <Link href={data.link} className="contacts-card__link button">
            <span className="icon icon--yellow-arrow">{data.linkLabel}</span>
          </Link>
        )}
        {children}
      </div>
    </div>
  );
}

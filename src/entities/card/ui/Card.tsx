import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { TCard } from "@/shared/types/card";
import { Rating } from "@/shared/ui";
import "./Card.scss";

type Props = {
  data: TCard;
  children?: ReactNode;
  renderTitle: (title: string) => ReactNode;
  renderExtraSubTitle?: (extraSubtitle: string) => ReactNode;
};

export function Card({
  data,
  children,
  renderTitle,
  renderExtraSubTitle,
}: Props) {
  return (
    <div className="card container">
      <div className="card__preview">
        <div className="card__preview-main">
          <Image
            src={data.srcIcon}
            alt=""
            className="card__preview-icon"
            width="80"
            height="80"
          />
          <div className="card__preview-info">
            {renderTitle(data.title)}
            {data.rating && (
              <div className="card__rating-view">
                <Rating rating={data.rating} />
              </div>
            )}
            {data.description && (
              <div className="card__preview-description">
                <p>{data.description}</p>
              </div>
            )}
            {data.link && (
              <Link
                href={data.link}
                className="card__preview-link button button--dark-gray"
              >
                <span className="icon icon--yellow-arrow">
                  {data.linkLabel}
                </span>
              </Link>
            )}
          </div>
        </div>
        {data.extraSubtitle && data.extraLink && (
          <div className="card__preview-extra">
            <div className="card__cell tile">
              {renderExtraSubTitle && renderExtraSubTitle(data.extraSubtitle)}
              <p className="card__cell-description h6">
                {data.extraDescription}
              </p>
              <Link href={data.extraLink} className="card__cell-link button">
                <span className="icon icon--yellow-arrow">
                  {data.extraLinkLabel}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="card__body">{children}</div>
    </div>
  );
}

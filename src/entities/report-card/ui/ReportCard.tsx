import Image from "next/image";
import Link from "next/link";
import { TReportCard } from "@/shared/types/reportCard";
import "./ReportCard.scss";

export function ReportCard({
  srcImg,
  title,
  description,
  link,
  downloadPdfLink,
}: TReportCard) {
  return (
    <div className="report-card">
      <Image
        src={srcImg}
        alt=""
        className="report-card__image"
        width="470"
        height="290"
        priority
      />
      <div className="report-card__body">
        <h3 className="report-card__title h6">{title}</h3>
        <div className="report-card__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="report-card__actions">
        <Link href={link} className="report-card__details-link button">
          View Details
        </Link>
        <Link
          href={downloadPdfLink}
          className="report-card__download-link button button--dark-gray"
          download
        >
          Download PDF Now
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { VideoPlayer } from "@/features/video-player";
import { TVideoCard } from "@/shared/types/videoPlayer";
import "./VideoCard.scss";

export function VideoCard({
  src,
  poster,
  title,
  description,
  videoDuration,
  link,
  labelLink,
}: TVideoCard) {
  return (
    <div className="video-card">
      <div className="video-card__player">
        <VideoPlayer
          className="video-player__video--small"
          src={src}
          poster={poster}
          width="470"
          height="290"
          positionPanel="left-bottom"
          videoDuration={videoDuration}
        />
      </div>
      <div className="video-card__body">
        <h3 className="video-card__title h5">{title}</h3>
        <div className="video-card__description">
          <p>{description}</p>
        </div>
      </div>
      <Link href={link!} className="video-card__link button">
        <span className="icon icon--yellow-arrow">{labelLink}</span>
      </Link>
    </div>
  );
}

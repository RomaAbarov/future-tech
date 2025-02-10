import { VideoPlayer } from "@/features/video-player";
import { TVideoCard } from "@/shared/types/videoPlayer";

export async function Video() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/podcasts/api`
  );
  const videos = (await response.json()) as TVideoCard[];

  return (
    <VideoPlayer
      src={videos[0].src}
      poster={videos[0].poster}
      positionPanel="center"
      width="917"
      height="412"
    />
  );
}

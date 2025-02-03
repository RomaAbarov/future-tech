import { VideoPlayer } from "@/features/video-player";
import { TVideoCard } from "@/shared/types/videoPlayer";

export async function Video() {
  const response = await fetch("http://localhost:3001/videos");
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

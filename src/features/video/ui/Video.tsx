import { VideoPlayer } from "@/features/video-player";
import { useVideos } from "@/shared/api/video/useVideos";

export async function Video() {
  const videos = await useVideos();

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

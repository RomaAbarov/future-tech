import { VideoCard } from "@/entities/video-card";
import { TVideoCard } from "@/shared/types/videoPlayer";
import { BorderedGrid } from "@/shared/ui";

export async function PodcastVideosSection() {
  const response = await fetch("http://localhost:3001/videos");
  const videos = (await response.json()) as TVideoCard[];

  return (
    <BorderedGrid
      data={videos}
      cols={3}
      Component={VideoCard}
      className="container"
    />
  );
}

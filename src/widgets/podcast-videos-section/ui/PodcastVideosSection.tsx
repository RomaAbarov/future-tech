import { VideoCard } from "@/entities/video-card";
import { useVideos } from "@/shared/api/video/useVideos";
import { BorderedGrid } from "@/shared/ui";

export async function PodcastVideosSection() {
  const videos = await useVideos();

  return (
    <BorderedGrid
      data={videos}
      cols={3}
      Component={VideoCard}
      className="container"
    />
  );
}

import { TVideoCard } from "@/shared/types/videoPlayer";

export async function useVideos() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/podcasts/api`
  );
  const videos = (await response.json()) as TVideoCard[];

  return videos;
}

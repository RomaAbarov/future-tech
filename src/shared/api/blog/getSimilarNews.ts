import { TNewsCard } from "@/shared/types/newsCard";

export async function getSimilarNews(limit?: number): Promise<TNewsCard[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/news/api?_limit=` + limit
  );
  const news = (await response.json()) as TNewsCard[];

  return news.map((n) => ({
    id: n.id,
    srcIcon: n.srcIcon,
    title: n.title,
    category: n.category,
    link: n.link,
    labelLink: n.labelLink,
    likes: n.likes,
    isLike: n.isLike,
    share: n.share,
  }));
}

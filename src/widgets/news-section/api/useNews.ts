import { TNewsCard } from "@/shared/types/newsCard";

export async function useNews() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/api`);
  const news = (await response.json()) as TNewsCard[];

  return news;
}

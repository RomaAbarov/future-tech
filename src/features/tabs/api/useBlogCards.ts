import { TBlogCard } from "@/shared/types/blogCard";

export async function useBlogCards() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogCards`
  );
  const blogCards = (await response.json()) as TBlogCard[];

  return blogCards;
}

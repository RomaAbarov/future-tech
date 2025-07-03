import { TBlogCard } from "@/shared/types/blogCard";

export async function useBlogStaticParams() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogCards`
    );
    const blogCards = (await response.json()) as TBlogCard[];

    return blogCards.map((blog) => ({ id: blog.id }));
  } catch (error) {
    console.error("Failed to fetch blog static params:", error);

    return [];
  }
}

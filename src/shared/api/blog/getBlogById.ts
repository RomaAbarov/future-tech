import { TBlogDetails } from "@/shared/types/blogDetails";
import { notFound } from "next/navigation";

export async function getBlogById(id: string): Promise<TBlogDetails> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}/api`
  );

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

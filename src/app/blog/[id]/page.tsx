import { Metadata } from "next";
import { useBlogStaticParams } from "@/shared/api/blog/useBlogStaticParams";
import { getBlogById } from "@/shared/api/blog/getBlogById";
import { getSimilarNews } from "@/shared/api/blog/getSimilarNews";
import { BlogPage } from "./BlogPage";

export const revalidate = 600;
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "Blog",
};

export async function generateStaticParams() {
  return await useBlogStaticParams();
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;

  const blogDetailsData = getBlogById(id);
  const newsData = getSimilarNews(3);

  const [blogDetails, news] = await Promise.all([blogDetailsData, newsData]);

  return <BlogPage blogDetails={blogDetails} news={news} />;
}

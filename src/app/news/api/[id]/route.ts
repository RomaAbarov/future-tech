import { NextResponse } from "next/server";
import db from "@/../db.json";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const news = db.news.find((item) => item.id === id);

  return NextResponse.json(news);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { isLike, likes } = (await request.json()) as {
    likes: number;
    isLike: boolean;
  };

  const news = db.news.find((item) => item.id === id);

  if (news) {
    news.isLike = isLike;
    news.likes = likes;
  }

  return NextResponse.json(news);
}

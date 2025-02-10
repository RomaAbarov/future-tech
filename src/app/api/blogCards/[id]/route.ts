import { NextResponse } from "next/server";
import db from "@/../db.json";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blogCard = db.blogCards.find((blogCard) => blogCard.id === id);

  return NextResponse.json(blogCard);
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

  const blogCard = db.blogCards.find((blogCard) => blogCard.id === id);

  if (blogCard) {
    blogCard.isLike = isLike;
    blogCard.likes = likes;
  }

  return Response.json(blogCard);
}

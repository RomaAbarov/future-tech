import { NextResponse } from "next/server";
import db from "@/../db.json";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blog = db.blogDetails.find((item) => item.id === id);

  return NextResponse.json(blog);
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

  const blog = db.blogDetails.find((item) => item.id === id);

  if (blog) {
    blog.isLike = isLike;
    blog.likes = likes;
  }

  return Response.json(blog);
}

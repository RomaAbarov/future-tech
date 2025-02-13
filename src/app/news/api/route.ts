import { NextRequest, NextResponse } from "next/server";
import db from "@/../db.json";

export const dynamic = "force-static";
export const revalidate = 600;

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("_limit");
  const news = query ? db.news.slice(0, +query) : db.news;

  return NextResponse.json(news);
}

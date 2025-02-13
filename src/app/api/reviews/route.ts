import { NextResponse } from "next/server";
import db from "@/../db.json";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  return NextResponse.json(db.reviews);
}

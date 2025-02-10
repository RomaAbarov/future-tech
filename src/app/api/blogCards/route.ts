import db from "@/../db.json";

export async function GET() {
  return Response.json(db.blogCards);
}

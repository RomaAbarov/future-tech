import { NextRequest, NextResponse } from "next/server";
import db from "@/../db.json";
import { TMessageFormData } from "@/features/feedback-form/model/types";

export async function GET() {
  return NextResponse.json(db.messages);
}

export async function POST(request: NextRequest) {
  const newMessage = (await request.json()) as TMessageFormData;

  (db.messages as TMessageFormData[]).push(newMessage);

  return new NextResponse(JSON.stringify(newMessage), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

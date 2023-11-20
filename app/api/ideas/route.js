import connectMongoDB from "@/backend/libs/mongodb";
import Idea from "@/backend/models/idea";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Idea.create({ title, description });
  return NextResponse.json({ message: "Idea Created" }, { status: "201" });
}

export async function GET() {
  await connectMongoDB();
  const ideas = await Idea.find();
  return NextResponse.json({ ideas });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Idea.findByIdAndDelete(id);
  return NextResponse.json({ message: "Idea Deleted" }, { status: "200" });
}

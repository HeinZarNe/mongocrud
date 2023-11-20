import connectMongoDB from "@/backend/libs/mongodb";
import Idea from "@/backend/models/idea";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Idea.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Idea Updated" }, { status: "200" });
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();
  const idea = await Idea.findOne({ _id: id });
  return NextResponse.json({ idea }, { status: "200" });
}

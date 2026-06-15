import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const db = await connectDB();
  const users = await db.collection("users").find({}).toArray();
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const db = await connectDB();
  const users = await db.collection("users").insertOne(body);
  return NextResponse.json({
    message: "User created successfully",
    success: true,
    users,
  });
}

export async function PUT(request) {
  const body = await request.json();
  const db = await connectDB();
  const { id, name, age } = body;
  const users = await db.collection("users").updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: { name, age } },
  );
  return NextResponse.json({
    message: "User updated successfully",
    success: true,
    users,
  });
}

export async function DELETE(request) {
  const body = await request.json();
  const db = await connectDB();
  const { id } = body;
  const users = await db.collection("users").deleteOne({
    _id: new ObjectId(id),
  });
  return NextResponse.json({
    message: "User deleted successfully",
    success: true,
    users,
  });
}

import { posts } from "@/app/lib/posts";
import { NextResponse } from "next/server";

//GET API routes
export async function GET() {
  return NextResponse.json({ posts });
}

//POST API routes
export async function POST(request: Request) {
  const body = await request.json();
  posts.push(body);
  return NextResponse.json(
    {
      message: "Post created successfully",
      data: body,
    },
    {
      status: 201,
    },
  );
}

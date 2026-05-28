import { NextResponse } from "next/server";
import { posts } from "@/app/lib/posts";

//GET api based on ID
export async function GET(
  request: Request,
  { params }: Promise<{ params: { id: string } }>,
) {
  console.log(request);
  const id = (await params).id;
  const post = posts.find((post) => post.id === Number(id));
  if (!post) {
    return NextResponse.json(
      {
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  }
  return NextResponse.json(post);
}

//PATCH api bases on ID
export async function PATCH(
  request: Request,
  { params }: Promise<{ params: { id: string } }>,
) {
  const id = (await params).id;
  const body = await request.json();
  const postIndex = posts.findIndex((post) => post.id === Number(id));

  if (postIndex === -1) {
    return NextResponse.json(
      {
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  }
  if (body.title) {
    posts[postIndex].title = body.title;
  }
  if (body.content) {
    posts[postIndex].content = body.content;
  }
  return NextResponse.json(posts[postIndex]);
}

export async function PUT(
  request: Request,
  { params }: Promise<{ params: { id: string } }>,
) {
  const { id } = await params;
  const body = await request.json();
  const postIndex = posts.findIndex((post) => post.id === Number(id));
  if (postIndex === -1) {
    return NextResponse.json(
      {
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  } else {
    posts[postIndex] = body;
    return NextResponse.json(posts[postIndex]);
  }
}

export async function DELETE(
  request: Request,
  { params }: Promise<{ params: { id: string } }>,
) {
  const { id } = await params;
  const postIndex = posts.findIndex((post) => post.id === Number(id));
  if (postIndex === -1) {
    return NextResponse.json(
      {
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  } else {
    posts.splice(postIndex, 1);
    return NextResponse.json({ message: "Post deleted successfully" });
  }
}

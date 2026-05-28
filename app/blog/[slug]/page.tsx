import { getPost, getStaticPosts } from "@/lib/posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if(!post) {
    return {
      title: "Post not found",
      description: "Post not found",
    };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images:['/images/posts.jpg']
    }
  };
}



export default async function PostPage({ params }:Props) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
      <p>{post?.content}</p>
    </>
  );
} 

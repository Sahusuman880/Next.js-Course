import Link from "next/link";
import { getStaticPosts } from "@/lib/posts";

export default function BlogPage() {
    const posts = getStaticPosts();
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
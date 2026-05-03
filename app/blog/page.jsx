import Link from "next/link";
const blogs = [
  { slug: "nextjs", title: "Next.js Learning" },
  { slug: "reactjs", title: "React.js Learning" },
  { slug: "nodejs", title: "Node.js Learning" },
];
function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;

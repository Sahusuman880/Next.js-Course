interface BlogPageProps {
  params: {
    slug: string;
  };
}

const blogData: Record<string, { title: string; content: string }> = {
  "nextjs": {
    title: "Next.js Learning",
    content: "Next.js is a React Framework",
  },
  "reactjs": {
    title: "React.js Learning",
    content: "react.js is a React Framework",
  },
  "nodejs": {
    title: "Node.js Learning",
    content: "Node.js is a React Framework",
  },
};

export default async function BlogDetailsPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) {
    return <h1>blog not found</h1>;
  }
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>slug url:{slug}</p>
    </div>
  )
}

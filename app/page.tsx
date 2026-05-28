import Form from "./components/Form";
type post = {
  id: number;
  title: string;
};
export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/posts");
  const { posts } = (await response.json()) as { posts: post[] };
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Form />
    </div>
  );
}

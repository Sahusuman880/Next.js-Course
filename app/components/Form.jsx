"use client";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (response.status === 201) {
      router.refresh();
      e.target.reset();
      alert("Post added successfully");
    } else {
      alert("Post not added successfully");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="content" placeholder="Content" />
      <button type="submit">Add Post</button>
    </form>
  );
}

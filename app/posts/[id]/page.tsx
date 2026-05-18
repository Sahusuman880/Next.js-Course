import { notFound } from "next/navigation";
interface PostId {
    id: number
}

export default async function PostDetails({ params }: { params: PostId }) {
    const { id } = params;
    if (id > 100) {
        notFound()
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const data = await response.json();
    return (
        <div style={{ padding: 20 }}>
            <h2>{id}</h2>
            <p>{data.body}</p>
        </div>
    )
}
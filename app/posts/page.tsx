interface Post {
    id: number;
    title: string;
    body: string;
}
export default async function Posts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        // cache: 'no-store'  
    });
    const data: Post[] = await response.json();
    return(
        <div style={{padding:20}}>
            <h1>Posts Page</h1>
            <p>This is Posts Component</p>
            <ul>
                {data.map((item:Post)=>(
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
import Link from "next/link";

export default function NotFound() {
    return(
        <div style={{padding:20, textAlign:"center"}}>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/posts">Go back to posts</Link>
        </div>
    )
}

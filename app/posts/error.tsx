"use client"

export default function Error({error,reset}: {error:Error,reset:()=>void}) {
    return(
        <div style={{padding:20}}>
            <h1>Error in Posts Page</h1>
            <p>Something went wrong. Please try again later.</p>
            <p>{error?.message}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}
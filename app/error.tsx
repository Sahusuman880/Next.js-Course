"use client"

export default function Error({error,reset}: {error:Error,reset:()=>void}) {
    return(
        <div style={{padding:20, textAlign:"center",color:'red'}}>
            <h1>Error</h1>
            <p>Something went wrong. Please try again later.</p>
            <p>{error?.message}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}

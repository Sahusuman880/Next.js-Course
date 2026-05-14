import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <main style={{padding:"40px", textAlign:"center", color:"red", fontWeight:700}}>
        <h1>Home Page</h1>
        <p>This is Main Component</p>
        <Image 
        // src="/hero.jpg"
        src="https://images.unsplash.com/photo-1702138129392-364adea0ad00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXJtYW58ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"

        width={100}
        height={100}/>
    </main>
  )
}

export default Home
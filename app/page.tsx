import Image from 'next/image'
import React from 'react'
import Counter from './components/Counter'

async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
  return (
    <main style={{padding:"40px", textAlign:"center", fontWeight:700}}>
        <h1>Home Page</h1>
        <p>This is Main Component</p>
        <Image 
        // src="/hero.jpg"
        src="https://images.unsplash.com/photo-1702138129392-364adea0ad00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXJtYW58ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"

        width={100}
        height={100}/>
        <ul>
        {data.map((item:{id:number, title:string, body:string})=>(
          <li key={item.id}>
            <h2 style={{color:'blue'}}>{item.title}</h2>
            <p style={{color:'blue'}}>{item.body}</p>
          </li>
        ))}
        </ul>
        <Counter/>
    </main>
  )
}

export default Home
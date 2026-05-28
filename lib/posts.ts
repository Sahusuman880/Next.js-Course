export type Post = {
    slug: string
    title: string
    description: string
    content: string
}

export const Posts: Post[] = [
    {
        slug: "learning-nextjs",
        title: "Learning Next.js",
        description: "Learn Next.js with us",
        content: "Next.js is a React framework for building web applications. I have a lot of knowledge about Next.js and I am excited to share it with you. We will cover many topics in this course."
    },
    {
        slug: "learning-react",
        title: "Learning React",
        description: "Learn React with us",
        content: "React is a JavaScript library for building user interfaces. It is a declarative and component-based library that makes it easy to build complex user interfaces. We will cover many topics in this course."
    },
    {
        slug: "learning-javascript",
        title: "Learning JavaScript",
        description: "Learn JavaScript with us",
        content: "JavaScript is a programming language that is used to build web applications. It is a client-side scripting language that is interpreted by web browsers. We will cover many topics in this course."
    },
]

export function getStaticPosts() {
    return Posts;
}

export function getPost(slug: string) {
    return Posts.find(post => post.slug === slug)
}

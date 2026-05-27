import Link from "next/link";
import './globals.css';
import {Inter} from 'next/font/google';
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'],
  weight:['400','700'],
  display:'swap'
})

export const metadata: Metadata = {
  title: {
    default: "Next.js Course",
    template:'%s | Sumangit'
  },
  description: "Learn Next.js with us",
  keywords: ["Next.js", "React", "JavaScript", "Web Development"],
  openGraph: {
    title: "Next.js Course",
    description: "Learn Next.js with us",
    type: "website",
    locale: "en_US",
    siteName: "Next.js Course",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js Course",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <title>Next.js Course</title>
      </head>
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <section>
          <nav style={{display:'flex',gap:12}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/courses">Courses</Link>
          </nav>
        </section>
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

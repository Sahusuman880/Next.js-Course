import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Chats Page | Sumangit",
  description: "Chat Page",
  openGraph: {
    title: "Chat Page",
    description: "Chat Page",
    type: "website",
    locale: "en_US",
    siteName: "Chats Page",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chats Page",
      },
    ],
  },
  twitter:{
    card:'summary_large_image',
    title:'Chats Page',
    description:'Chat Page',
    images:[
      {
        url:'https://example.com/og-image.jpg',
        width:1200,
        height:630,
        alt:'Chats Page',
      },
    ],
  }
} 
function ChatsPage() {
  return <div>Chats Page</div>;
}

export default ChatsPage;
import type { Metadata } from "next";
 

async function ChatDetailPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    return <div>Chat Detail Page - {slug}</div>;
}

//Dynamic Metadata
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    return {
        title: `${slug} | Chat Detail Page`,
        description: `${slug} | Chat Detail Page`,
        openGraph: {
            title: `${slug} | Chat Detail Page`,
            description: `${slug} | Chat Detail Page`,
            type: "website",
            locale: "en_US",
            siteName: `${slug} | Chat Detail Page`,
            images: [
                {
                    url: "https://example.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${slug} | Chat Detail Page`,
                },
            ],
        },
        twitter:{
            card:'summary_large_image',
            title:`${slug} | Chat Detail Page`,
            description:`${slug} | Chat Detail Page`,
            images:[
                {
                    url:'https://example.com/og-image.jpg',
                    width:1200,
                    height:630,
                    alt:`${slug} | Chat Detail Page`, 
                },
            ],
        }
    }
}

export default ChatDetailPage;


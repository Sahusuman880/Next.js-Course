export type Product = {
  id: number;
  name: string;
  category: string;
};

export const products: Product[] = [
    {
        id:1,
        name:'React Course',
        category:'Web Development'
    },
    {
        id:2,
        name:'Next.js Course',
        category:'Web Development'
    },
    {
        id:3,
        name:'Tailwind CSS Course',
        category:'Web Development'
    },
    {
        id:4,
        name:'React Native Course',
        category:'Mobile Development'
    },
    {
        id:5,
        name:'Flutter Course',
        category:'Mobile Development'
    },
]
  
export async function getProducts(){
    return products
}
  
export async function getProductById(id: number){
    return products.find((product) => product.id === id)
}
  

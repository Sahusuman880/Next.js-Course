import Link from "next/link";
import { getProducts } from "@/lib/products";

type Product={
    searchParams:Promise<{
        category?:string;
        page?:number;
    }>
}

const PAGE_SIZE = 2;

export default async function ProductsPage({searchParams}: Product){
    const {category,page} = await searchParams;
    const products = await getProducts()
    let renderProducts = products

    if(category){
        renderProducts = renderProducts.filter((product) => product.category === category)
    }

    const totalPages = Math.ceil(renderProducts.length / PAGE_SIZE)
    const currentPage = page || 1
    const paginatedProducts = renderProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
 

    return(
        <div>
            <h1>Products</h1>   
            <div style={{display:'flex',gap:10}}>
                <Link href={`/products?category=Web Development`}>Web Development</Link>
                <Link href={`/products?category=Mobile Development`}>Mobile Development</Link>
            </div>
            <ul>
                {paginatedProducts.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div style={{display:'flex',gap:10}}>
                {currentPage > 1 && <Link href={`/products?category=${category}&page=${currentPage - 1}`}>Previous</Link>}
                {currentPage < totalPages && <Link href={`/products?category=${category}&page=${currentPage + 1}`}>Next</Link>}
            </div>
        </div>
    )
}
  
import Link from "next/link";
const products = [
  { category: "fruits", title: "Apple", id: 1 },
  { category: "fruits", title: "Orange", id: 2 },
  { category: "fruits", title: "Mango", id: 3 },
  { category: "vegetables", title: "Potato", id: 4 },
  { category: "vegetables", title: "Tomato", id: 5 },
];
function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.category}>
            <Link href={`/products/${product.category}/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;

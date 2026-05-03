export default async function ProductDetailsPage({ params }) {
  const { category, id } = await params;
  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Category: {category}</p>
      <p>Product ID: {id}</p>
    </div>
  );
}

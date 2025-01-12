import Link from "next/link";
import { notFound } from "next/navigation";
// export const revalidate = 60; // revalidate at most every hour
// export const fetchCache = "default-cache";
export const dynamic = "auto";
export default async function Products() {
  const response = await fetch("http://localhost:3001/products");

  if (!response.ok) {
    notFound();
  }
  const data = await response.json();
  return <ShowProducts data={data} />;
}

function ShowProducts({ data }: { data: any[] }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>
            <Link href={`/products/[id]`} as={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from "next/link";
// export const revalidate = 60 // revalidate at most every hour
// export const fetchCache = "default-cache";
export const dynamic = "error"; // (didn't quite understand it why it not work when we set the value to error)
// export const dynamicParams = true; // true | false,
export default async function ProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3001/products/${id}`);
  if (!response.ok) {
    return <p>not found {id}</p>;
  }
  const data = await response.json();
  return (
    <div>
      <h1>{data.title}</h1>
      <h6>{data.price}</h6>
      <p>{data.description}</p>
      <div className="flex gap-2">
        <Link
          className="p-2 bg-green-100 rounded-md text-gray-700"
          href="/products"
        >
          Back to products
        </Link>
        {/* <Link className="p-2 bg-green-100 rounded-md text-gray-700" aria-disabled="true" href={`/products/${id}/edit`}>Edit</Link> */}
        <Link
          className="p-2 bg-green-100 rounded-md text-gray-700"
          href={`/add-product`}
        >
          Add New
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  return data.map((product: any) => ({ id: product.id.toString() }));
}

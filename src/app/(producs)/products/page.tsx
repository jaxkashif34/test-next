import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
// export const revalidate = 60; // revalidate at most every hour
// export const fetchCache = "default-cache"; // (In here all options are working fine except the 'auto' (working same as 'default-cache' what they stated didn't working that) and 'force-no-store' here if we provide in one or request a option of 'force-cache' it is storing in the cache (but it shouldn't))
// export const revalidate = 20; // (to test the revalidate we must have to build the app like without specifying any other route segment config other then (revalidate) and don't add any request level config)
export const dynamic = "error";
export default async function Products() {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  // const rawc = await cookies();
  // console.log("🚀 ~ Products ~ rawc:", rawc)
  // const id = rawc.get("id")?.value;
  // console.log("🚀 ~ Products ~ id:", id)
  const response2 = await fetch(`http://localhost:3001/products/${2}`);
  const data2 = await response2.json();

  const response3 = await fetch(`http://localhost:3001/products/${3}`);
  const data3 = await response3.json();
  return (
    <div>
      <span> data 2 {JSON.stringify(data2)}</span> <br />
      <span> data 3 {JSON.stringify(data3)}</span>
      <ShowProducts data={data} />
    </div>
  );
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

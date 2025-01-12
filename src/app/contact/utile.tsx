import { cookies } from "next/headers";

export async function DynamicComponent() {
  const rawCookies = await cookies();
  const id = rawCookies.get("id");
  console.log("🚀 ~ DynamicComponent ~ id:", id)
  if (!id) return <p>Not logged in</p>;
  const response = await fetch(`http://localhost:3001/contacts/${id.value}`);
  const data = await response.json();
  if (!data) return <p>Not logged in data</p>;
  return (
    <div key={data.id} className="space-y-2 bg-gray-600">
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
}

async function getData(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`http://localhost:3001/contacts/${id}`);
  const data = await response.json();
  return data;
}

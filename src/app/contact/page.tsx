export const fetchCache = "force-no-store";
// export const dynamic = "auto";
// export const experimental_ppr = true
import { cookies } from "next/headers";
import { Suspense } from "react";
import { DynamicComponent } from "./utile";
import Link from "next/link";

export default async function Contact() {
  const response = await fetch("http://localhost:3001/contacts", {
    cache: "force-cache",
  });
  const data = await response.json();
  return (
    <div>
      <div>
        {data.map((contact: any) => (
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
        ))}
      </div>
      {/* <StaticComponent /> */}
      <Suspense fallback={<Loading />}>
        <DynamicComponent />
      </Suspense>
      <Link href="/">Home</Link>
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

async function StaticComponent() {
  const response = await fetch("http://localhost:3001/contacts", {
    cache: "force-cache",
  });
  const data = await response.json();
  return (
    <div>
      {data.map((contact: any) => (
        <div key={contact.id}>
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  );
}

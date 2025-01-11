"use server";

import { revalidatePath } from "next/cache";

export default async function addProduct(
  prevState: unknown,
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = Object.fromEntries(formData);
  const response = await fetch("http://localhost:3001/products", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  revalidatePath("/products");
  const res = await response.json();
  return res;
}

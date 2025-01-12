"use server";

import { revalidatePath } from "next/cache";
import { Message } from "./add-product/addProductFormOptimistic";

export default async function addProduct(prevState: any, formData: FormData) {
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
export async function deliverMessage(message: Message): Promise<Message> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("http://localhost:3001/messages", {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const res = await response.json();
  return res;
}

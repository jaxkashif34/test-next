"use client";
import Link from "next/link";
import AddProductFormOptimistic, { Message } from "./addProductFormOptimistic";
import { useState } from "react";
import { deliverMessage } from "../actions";

export default function AddProduct() {
  const [messages, setMessages] = useState<Message[]>([]);
  async function sendMessage(message: Message) {
    const sentMessage = await deliverMessage(message);
    setMessages((message) => [...message, sentMessage]);
  }
  return (
    <div className="text-gray-800">
      <h1>Add product Form</h1>
      <AddProductFormOptimistic messages={messages} sendMessage={sendMessage} />
      <Link
        className="p-2 bg-green-100 rounded-md text-gray-700"
        href="/products"
      >
        Back to products
      </Link>
    </div>
  );
}

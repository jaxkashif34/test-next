// "use client";
import Link from "next/link";
import AddProductFormOptimistic, { Message } from "./addProductFormOptimistic";
import { deliverMessage } from "../actions";
import AddProductForm from "./addProductForm";

export default async function AddProduct() {
  // const [messages, setMessages] = useState<Message[]>([]);
  // async function sendMessage(message: Message) {
  //   const sentMessage = await deliverMessage(message);
  //   setMessages((message) => [...message, sentMessage]);
  // }
  return (
    <div className="text-gray-100">
      <h1>Add product Form</h1>
      <AddProductForm />
      <Link
        className="p-2 bg-green-100 rounded-md text-gray-700"
        href="/products"
      >
        Back to products
      </Link>
    </div>
  );
}

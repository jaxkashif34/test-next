import Link from "next/link";
import AddProductForm from "./addProductForm";

export default async function AddProduct() {
  return (
    <div className="text-gray-800">
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

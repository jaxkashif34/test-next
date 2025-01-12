"use client";
import { useActionState } from "react";
import addProduct from "../actions";
import { useFormStatus } from "react-dom";
const initialState = { message: "" };
export default function AddProductForm() {
  const [state, formAction, pending] = useActionState(addProduct, initialState);
  console.log("🚀 ~ AddProductForm ~ state:", state)
  return (
    <form action={formAction} className="flex mb-4 flex-col gap-y-2 max-w-md" method="post">
      <label className="text-green-50" htmlFor="title">
        Title
      </label>
      <input type="text" id="title" name="title" />
      <label className="text-green-50" htmlFor="price">
        Price
      </label>
      <input type="number" id="price" name="price" />
      <label className="text-green-50" htmlFor="description">
        Description
      </label>
      <input type="text" id="description" name="description" />
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const data = useFormStatus();

  return (
    <button
      type="submit"
      className={`p-2 bg-green-100 rounded-md text-gray-700 ${
        data.pending ? "opacity-50" : ""
      }`}
      disabled={data.pending}
    >
      Submit
    </button>
  );
};

"use client";
import { useActionState } from "react";
import addProduct from "../actions";
import { useFormStatus } from "react-dom";
const initialState = { message: "" };
export default function AddProductForm() {
  const [state, formAction, pending] = useActionState(addProduct, initialState);
  // TODO: test the Incremental static generation with revalidateTags and revalidatePaths api
  return (
    <form action={formAction} className="flex mb-4 flex-col gap-y-2 max-w-md text-grey-50">
      <label className="text-gray-50" htmlFor="isHuman">
        is human ?
      </label>
      <input className="text-gray-800" type="file" id="isHuman" name="isHuman" />
      <label className="text-gray-50" htmlFor="title">
        Title
      </label>
      <input className="text-gray-800" type="text" id="title" name="title" />
      <label className="text-gray-50" htmlFor="price">
        Price
      </label>
      <input className="text-gray-800" type="number" id="price" name="price" />
      <label className="text-gray-50" htmlFor="description">
        Description
      </label>
      <input className="text-gray-800" type="text" id="description" name="description" />
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

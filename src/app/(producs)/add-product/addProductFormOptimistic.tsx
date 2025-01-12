"use client";
import { useOptimistic, useRef } from "react";
import { useFormStatus } from "react-dom";
export type Message = {
  text: string;
  sending: boolean;
};
export default function AddProductFormOptimistic({
  messages,
  sendMessage,
}: {
  messages: Message[];
  sendMessage: (message: Message) => Promise<void>;
}) {
  const [optmisticmessages, addOptimisticMessage] = useOptimistic<
    Message[],
    Message
  >(messages, (current, update) => {
    return [...current, update];
  });
  const formRef = useRef<HTMLFormElement>(null);
  async function formAction(formData: FormData) {
    const data = Object.fromEntries(formData) as any;
    addOptimisticMessage({ text: data.text, sending: true });
    formRef.current?.reset();
    await sendMessage({ ...data, sending: false });
  }
  return (
    <div>
      {optmisticmessages.map((item, i) => {
        return (
          <div key={i} className="text-gray-100">
            <span>{item.text}</span>
            <span>{`${!item?.sending ? "" : "loading..."}`}</span>
          </div>
        );
      })}
      <form
        action={formAction}
        className="flex mb-4 flex-col gap-y-2 max-w-md"
        ref={formRef}
      >
        <label className="text-green-50" htmlFor="text">
          Message
        </label>
        <input type="text" id="text" name="text" />
        <SubmitButton />
      </form>
    </div>
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

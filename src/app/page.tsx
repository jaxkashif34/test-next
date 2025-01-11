import { notFound, redirect, RedirectType } from "next/navigation";
import { getData } from "./utils/utils";

export default async function Home() {
  // const data = await getData();
  async function updateUser(data: FormData) {
    "use server";
    // console.log("🚀 ~ updateUser ~ data:", data);
    redirect("/about", RedirectType.push);
  }
  return (
    <div>
      <h1>Home static</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <form action={updateUser}>
        <input type="text" name="name" />
        <input type="number" name="age" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const Comp1 = async () => {
  const data = await getData();
  return (
    <div className="bg-red-500">
      Comp1
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

const Comp2 = () => {
  return <div className="bg-blue-500">Comp2</div>;
};

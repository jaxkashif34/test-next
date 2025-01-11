// "use client";
import Link from "next/link";
import { getData } from "../utils/utils";
import { Suspense } from "react";
import { unstable_cacheLife as cacheLife } from "next/cache";
// import { useEffect, useState } from "react";
export default async function About() {
  // await cookies();
  // const [data, setdata] = useState<null | Record<string, number>>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("🚀 ~ About ~ data:", "running use effect");
  //     const response = await fetch("http://localhost:1001/api");
  //     const data = await response.json();
  //     setdata(data);
  //   };

  //   fetchData();
  // }, []);
  // const data = await response.json();

  // const response = await fetch("http://localhost:1001/api");
  // const data = await response.json();
  return (
    <div>
      <h1>About dynamic</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataComp />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataComp1 />
      </Suspense>
      {/* <p>{data ? data.number : "Loading..."}</p> */}
      {/* <p>{b1.number}</p> */}
      <Link href="/">Home</Link>
    </div>
  );
}

const DataComp = async () => {
  const data = await getData();
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
const DataComp1 = async () => {
  let id = 1;
  const data = await getData(id);
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

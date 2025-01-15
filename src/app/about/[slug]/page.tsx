type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
// export const dynamicParams = false;
export default async function Page({ searchParams, params }: Props) {
  const { slug } = await params;
  const response = await fetch("http://localhost:3001/api");
  const data = await response.json();
  return (
    <div>
      <h1>Dynamic {slug}</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export async function generateMetadata({ params, searchParams }: Props) {
  const { slug } = await params;
  return {
    title: "About Page" + slug,
  };
}

export async function generateStaticParams() {
  return [];
}

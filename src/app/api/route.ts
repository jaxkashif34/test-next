export const dynamic = "force-static";
export async function GET() {
  const response = await fetch("http://localhost:3001/about/api");
  const data = await response.json();
  return new Response(JSON.stringify(data));
}

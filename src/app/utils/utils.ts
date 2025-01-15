export const getData = async (id?: number) => {
  const response = await fetch("http://localhost:3001/api");
  const data = response.json();
  return data;
};

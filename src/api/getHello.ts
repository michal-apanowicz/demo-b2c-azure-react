export async function getHello(): Promise<string> {
  return await fetch("https://localhost:6001/hello", {}).then((response) =>
    response.json()
  );
}

export async function getPubluc(): Promise<string> {
  return await fetch("https://localhost:6001/public").then((response) =>
    response.json()
  );
}

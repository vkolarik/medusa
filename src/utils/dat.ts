export function formatDate(input: string): string {
  const date = new Date(input);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // getUTCMonth() is zero-based
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
}

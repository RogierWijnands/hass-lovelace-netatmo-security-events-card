export function toSearchParams(params: Record<string, string>): string {
  const searchParams = new URLSearchParams();
  for (const param in params) {
    searchParams.set(param, params[param]);
  }
  return searchParams.toString();
}

export function toURL(url: string, params: Record<string, string>): string {
  const parsedUrl = new URL(url);
  for (const param in params) {
    parsedUrl.searchParams.set(param, encodeURIComponent(params[param]));
  }
  return parsedUrl.toString();
}

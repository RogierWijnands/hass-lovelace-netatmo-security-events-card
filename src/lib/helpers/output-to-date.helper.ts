export function outputToDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}

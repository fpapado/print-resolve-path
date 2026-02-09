export function resolvePath({ from, to }: { from: string; to: string }) {
  return import.meta.resolve(from, import.meta.resolve(to));
}

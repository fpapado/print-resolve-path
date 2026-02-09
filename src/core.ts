import { createRequire } from "node:module";

export function resolvePath({
  cwd,
  fromId,
  toId,
}: {
  cwd: string;
  fromId: string;
  toId: string;
}) {
  const require = createRequire(cwd);
  const fromPath = require.resolve(fromId, { paths: [cwd] });

  return require.resolve(toId, { paths: [fromPath] });
}

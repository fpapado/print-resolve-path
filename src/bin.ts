#!/usr/bin/env node
import { parseArgs } from "node:util";
import { resolvePath } from "./core.ts";

function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      verbose: { type: "boolean", short: "v", default: false },
    },
  });

  const verbose = values.verbose;
  const [fromId, toId] = positionals;

  if (!fromId || !toId) {
    throw new Error("Two positional arguments must be provided.");
  }

  const cwd = process.cwd();
  const { fromPath, toPath } = resolvePath({
    fromId,
    toId,
    cwd,
  });

  if (verbose) {
    const verboseOutput = [
      cwd,
      `-> ${fromId} (at ${fromPath})`,
      `-> ${toId} (at ${toPath})`,
    ].join("\n");

    console.log(verboseOutput);

    return;
  }

  console.log(toPath);
}

main();

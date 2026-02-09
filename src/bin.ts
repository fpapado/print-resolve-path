#!/usr/bin/env node
import { resolvePath } from "./core.ts";

function main() {
  const args = process.argv.slice(2);
  const [from, to] = args;

  if (!from || !to) {
    throw new Error("Two positional arguments must be provided.");
  }

  console.log(resolvePath({ from, to }));
}

main();

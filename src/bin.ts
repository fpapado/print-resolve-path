#!/usr/bin/env node
import { resolvePath } from "./core.ts";

function main() {
  const args = process.argv.slice(2);
  const [fromId, toId] = args;

  if (!fromId || !toId) {
    throw new Error("Two positional arguments must be provided.");
  }

  console.log(resolvePath({ fromId, toId, cwd: process.cwd() }));
}

main();

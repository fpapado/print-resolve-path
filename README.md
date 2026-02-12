# `print-resolve-path`

CLI utility to get the path to a resolved dependency, from within another dependency. Useful when debugging package manager `node_modules` structures. Uses the standard Node resolution algorithm (`require.resolve`/`import.meta.resolve`), so it always matches what Node sees or does no see.

## Usage

```shell
# An easy one, can a package find itself?
pnpx print-resolve-path react react

# Here is a peer, can styled-components find react?
pnpx print-resolve-path styled-components react

# If you are resolving types, it gets trickier. 
# If the types package has `exports` > `types`, specify the type condition first:
NODE_OPTIONS="--conditions=types" pnpx print-resolve-path @types/styled-components @types/react

# If the type package does not have `exports` (if it's older than ~2023), then you're out of luck, 
# because Node does not resolve `types` at the top-level of package.json; 
# that's a TypeScript-only thing
```

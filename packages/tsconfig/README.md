# tsconfig

## Installation

```bash
pnpm add -D @heartreup/tsconfig
```

## Default Usage

```
// tsconfig.json
{
    "extends": ["@heartreup/tsconfig/tsconfig.default.json"], // Extend the default tsconfig.
    "include": ["src/**/*.ts"], // Optional: Specify the files to include.
    "exclude": ["node_modules", "dist"] // Optional: Specify the files to exclude.
}
```

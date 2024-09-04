# Prettier Config

## Install

```bash
pnpm add -D @heartreup/prettier-config-cherish
```

## Usage

```javascript
// .prettierrc.js
module.exports = '@heartreup/prettier-config-cherish';
```

## configure with eslint (optional)

-   extends `eslint-config-prettier`
-   plugins `eslint-plugin-prettier`
-   rules `prettier/prettier` to `error`

```bash
pnpm add -D eslint-config-prettier eslint-plugin-prettier
```

then add to eslint config.

```javascript
// .eslintrc.js
module.exports = {
    extends: [
        // ... other extends(config)
        'prettier',
    ],
    plugins: [
        // ... other plugins
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        // ... other rules for overriding
    },
};
```

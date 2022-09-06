module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable",
  },
  ignorePatterns: ["build", ".eslintrc.js", "next.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "import", "unused-imports"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error"
  },
  settings: { react: { version: "detect" } },
};
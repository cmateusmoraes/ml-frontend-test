import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import perfectionistPlugin from "eslint-plugin-perfectionist";

export default [
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
        process: "readonly",
        module: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "unused-imports": unusedImportsPlugin,
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "func-style": ["error", "declaration"],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
        { blankLine: "always", prev: "*", next: "export" },
        { blankLine: "any", prev: "export", next: "export" },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "perfectionist/sort-exports": ["warn", { order: "asc" }],
      "perfectionist/sort-named-imports": ["warn", { order: "asc" }],
      "perfectionist/sort-named-exports": ["warn", { order: "asc" }],
      "perfectionist/sort-imports": [
        "warn",
        {
          order: "asc",
          groups: [
            ["builtin", "external", "internal"],
            ["parent", "sibling", "index"],
          ],
        },
      ],
    },
  },
];

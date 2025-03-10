import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: [
    "*",                          // Ignore everything
    "!apps",                  // Un-ignore the projects directory
    "apps/pgs/**/tsconfig.*",
    "apps/whatuni/**/tsconfig.*",    // Re-ignore tsconfig files in projects
    "apps/whatuni/**/assets.*",
    "apps/pgs/**/assets.*" // Re-ignore assets folder in src
  ],

}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"), {
  plugins: {
    "@typescript-eslint": typescriptEslint,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "script",

    parserOptions: {
      project: "tsconfig.json",
    },
  },

  rules: {
    semi: "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-readonly": "off",
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "accessor-pairs": "off",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "off",
    "eol-last": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "padded-blocks": ["error", "never"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "no-undef": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/promise-function-async": "off",
    "spaced-comment": "off",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "off",
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "array-bracket-spacing": ["error", "never"],

    "prefer-const": ["error", {
      destructuring: "any",
      ignoreReadBeforeAssign: false,
    }],

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "off",

    "no-multi-spaces": ["error", {
      ignoreEOLComments: true,
    }],

    "multiline-ternary": ["error", "never"],
    "quote-props": ["error", "consistent"],
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/type-annotation-spacing": "off",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "off",
    curly: ["error", "multi", "consistent"],
    "rest-spread-spacing": ["error", "never"],

    "arrow-spacing": ["error", {
      before: true,
      after: true,
    }],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "operator-linebreak": ["error", "after"],
    "no-useless-escape": "off",
    "one-var": ["error", "never"],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "off",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "off",
    "no-array-constructor": "off",
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "off",
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "prefer-promise-reject-errors": "off",

    "no-tabs": ["error", {
      allowIndentationTabs: true,
    }],

    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "no-async-promise-executor": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
}];
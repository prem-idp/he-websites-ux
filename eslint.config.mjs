import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["apps/whatuni/src", "apps/pgs/src"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Automatically picks the version you have installed
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

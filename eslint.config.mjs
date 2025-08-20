/* Install prettier plugin? */
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier, { rules } from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "capitalized-comments": ["error", "always"],
    },
  },
  eslintConfigPrettier,
]);

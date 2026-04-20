import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import importFsd from "eslint-plugin-import-fsd"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig([
  globalIgnores([
    "dist",
    "trash",
    "tests",
    "scripts",
    "eslint.config.js",
    "vite.config.js",
  ]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "import-fsd": importFsd,
    },
    settings: {
      fsd: {
        rootDir: path.resolve(__dirname, "src"),
        aliases: {
          "@/*": "./src/*",
        },
      },
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "import-fsd/no-denied-layers": [
        "error",
        { ignores: ["app", "shared"] },
      ],
      "import-fsd/no-unknown-layers": "error",
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^[A-Z_]",
          argsIgnorePattern: "^[A-Z_]",
        },
      ],
    },
  },
])

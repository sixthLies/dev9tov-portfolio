import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import fsd from "eslint-plugin-feature-sliced-design-architecture"
import { defineConfig, globalIgnores } from "eslint/config"
import importPlugin from "eslint-plugin-import"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "feature-sliced-design-architecture": fsd,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        vite: true,
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
      // FSD: контроль слоёв (app/pages/widgets/features/entities/shared)
      "feature-sliced-design-architecture/layer-imports": [
        "error",
        {
          alias: "@",
          ignoreImportPatterns: [
            "**/*.test.*",
            "**/*.spec.*",
            "**/vite.config.*",
          ],
        },
      ],
      // FSD: относительные импорты внутри одного slice
      "feature-sliced-design-architecture/path-checker": [
        "error",
        {
          alias: "@",
        },
      ],

      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "import/no-internal-modules": [
        "error",
        {
          allow: [
            "@/shared/**",
            "@/entities/*",
            "@/features/*",
            "@/widgets/*",
            "@/pages/*",
            // обычно app наружу не импортируют, но если надо — включи:
            // "@/app/*"
          ],
        },
      ],
    },
  },
])

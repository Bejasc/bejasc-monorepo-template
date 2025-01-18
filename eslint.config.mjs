import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import noLoops from "eslint-plugin-no-loops";
import path from "node:path";
import promise from "eslint-plugin-promise";
import sonarjs from "eslint-plugin-sonarjs";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ["**/node_modules", "**/dist", "**/.quasar"],
	},
	{
		languageOptions: {
			parserOptions: {
				warnOnUnsupportedTypeScriptVersion: false,
			},
		},
	},
	...compat.extends("eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			"no-loops": noLoops,
			promise,
			unicorn,
			sonarjs,
		},
		files: ["**/*.ts"],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				project: "./tsconfig.json",
			},
		},

		rules: {
			"sonarjs/no-small-switch": 2,
			"sonarjs/prefer-object-literal": 2,
			"promise/prefer-await-to-then": 2,
			"promise/catch-or-return": 2,
			"promise/always-return": 2,
			"promise/param-names": 2,
			"sonarjs/max-switch-cases": 1,
			"sonarjs/no-collection-size-mischeck": 1,
			"sonarjs/cognitive-complexity": 1,
			"no-loops/no-loops": 1,
			"no-var": 1,
			"promise/no-nesting": 1,
			"@typescript-eslint/no-unused-vars": 1, // 1 is for warning level

			/*
        "unicorn/filename-case": ["error", {
            case: "pascalCase",
            ignore: ["index.ts"],
        }],
        */

			"@typescript-eslint/array-type": 2,
			"@typescript-eslint/no-explicit-any": 2,
			"@typescript-eslint/await-thenable": 2,
			"@typescript-eslint/promise-function-async": 2,
		},

		ignores: ["node_modules", "dist", ".quasar"],
	},
];

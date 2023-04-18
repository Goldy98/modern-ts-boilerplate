/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  env: {
    jest: true,
  },
  plugins: ["@typescript-eslint", "import", "promise", "prettier", "jest"],
  extends: [
    "airbnb-typescript/base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  // parserOptions: {
  //   ecmaVersion: "latest",
  //   project: "./tsconfig.eslint.json",
  // },
  // ignorePatterns: ["!(src)/**/*.*"],
  rules: {
    "func-names": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "require-await": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "promise/prefer-await-to-then": "error",
    "promise/always-return": "warn",
    "no-magic-numbers": ["error", { ignoreArrayIndexes: true, ignore: [0, 1] }],
  },
  overrides: [
    {
      files: ["src/*.test.ts"],
    },
  ],
};

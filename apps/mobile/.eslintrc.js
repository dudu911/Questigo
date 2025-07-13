module.exports = {
  extends: [
    "expo",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native"],
  rules: {
    // Questigo-specific rules following project guidelines
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/prop-types": "off", // Using TypeScript for prop validation
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "off", // Temporarily disabled until we migrate to NativeWind
  },
  env: {
    "react-native/react-native": true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "react-native": {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/", ".expo/", "dist/", "build/", "*.d.ts"],
};

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "@vue/prettier",
    "eslint:recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/vue",
  ],

  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },

  parserOptions: {
    parser: "babel-eslint",
  },

  plugins: ["testing-library", "jest-dom"],
};

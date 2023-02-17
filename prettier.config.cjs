module.exports = {
  plugins: [
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
  semi: true,
  singleQuote: false,
  endOfLine: "crlf",
  arrowParens: "always",
  singleAttributePerLine: true,
};

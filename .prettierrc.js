module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  semi: false,

  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,

  bracketSpacing: true,
  proseWrap: 'always',
  singleAttributePerLine: true,
  endOfLine: 'auto',

  importOrder: [
    "^components/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

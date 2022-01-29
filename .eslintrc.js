module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ 'prettier', '@typescript-eslint', 'react' ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
  },
  rules: {},
};

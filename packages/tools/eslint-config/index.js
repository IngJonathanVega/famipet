module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:@next/next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'sort-exports', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'sort-exports/sort-exports': [
      'error',
      {
        sortDir: 'asc',
      },
    ],
  },
}

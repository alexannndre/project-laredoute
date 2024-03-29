module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['tailwindcss'],
  rules: {
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'no-new': 'off',
    'no-return-assign': 'off',
  },
};

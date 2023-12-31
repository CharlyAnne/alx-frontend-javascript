module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': ['error', 'before'],
    'next-line no-unused-vars': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'prefer-arrow-callback': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};

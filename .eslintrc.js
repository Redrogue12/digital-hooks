module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'no-console': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-wrap-multilines': 'off',
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
  },
};

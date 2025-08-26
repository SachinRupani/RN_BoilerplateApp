module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    quotes: ['warn', 'single', {avoidEscape: true}],
    'react/react-in-jsx-scope': 'off', // ✅ React 17+ doesn’t need React in scope
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

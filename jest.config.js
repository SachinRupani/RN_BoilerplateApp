module.exports = {
  preset: "react-native",
  roots: ["<rootDir>/__tests__"], // only run tests from __tests__ folder
  testMatch: [
    "**/?(*.)+(test).[jt]s?(x)", // matches .test.ts, .test.tsx, .test.js, .test.jsx
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@reduxjs/toolkit)",
  ],
};

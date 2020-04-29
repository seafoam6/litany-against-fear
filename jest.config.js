module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};
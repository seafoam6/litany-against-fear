module.exports = {

  testEnvironment: 'jsdom',
  moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    setupFiles: [
      "raf/polyfill"
    ],
    testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
transform: {
  "^.+\\.[t|j]sx?$": "babel-jest"
}
};
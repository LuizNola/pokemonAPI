/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  globalSetup: '<rootDir>/src/infra/jest/jest.setup.js',
  globalTeardown: '<rootDir>/src/infra/jest/jest.teardown.js'
}

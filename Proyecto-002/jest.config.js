module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/src/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
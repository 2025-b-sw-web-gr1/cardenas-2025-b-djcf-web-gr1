jest.config.js
{
  "testEnvironment": "node",
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"]
}

src/app.spec.ts
test('hello world!', () => {
  expect(1 + 1).toBe(2);
});
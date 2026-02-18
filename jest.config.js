const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './'
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/src/components'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/text-encoder-mock.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.{js,jsx}'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1'
  }
};
module.exports = createJestConfig(customJestConfig);

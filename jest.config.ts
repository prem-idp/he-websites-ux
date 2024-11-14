import type { Config } from "jest";
import nextJest from "next/jest.js";

// Create Jest configuration for multiple Next.js apps
const createJestConfig = nextJest({
  // Point to the root directory of your monorepo or workspace
  dir: "./apps/whatuni",
});

// Add custom config to Jest for multiple apps
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  // Enable coverage collection
  collectCoverage: true,

  // Collect coverage from both apps
  collectCoverageFrom: [
    // Collect coverage from app1 (whatuni)
    // Collect coverage from app2 (pgs) - add your other app here
    "apps/whatuni/src/**/*.{ts,tsx}",
    "apps/pgs/src/**/*.{ts,tsx}",
    "packages/shared-components/**/*.{ts,tsx}",

    // Exclude common directories
    "!**/node_modules/**",
    "!**/.open-next/**",
    "!**/.next/**",
    "!**/jest.config.ts",
    "!**/next-env.d.ts",
    "!**/tailwind.config.ts ",
    // Exclude Jest config file
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transpile JS, JSX, TS, and TSX with Babel
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@packages/(.*)$': '<rootDir>/packages/$1'
  },
  // Output coverage results to the 'coverage' directory
  coverageDirectory: "<rootDir>/coverage",

  // Configure the reporters for coverage results
  coverageReporters: ["json", "lcov", "text", "clover"],

  // Optional: Specify different test setup files if needed
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure next/jest can load the Next.js config which is async
export default createJestConfig(config);

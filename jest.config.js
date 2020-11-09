module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'ts'],
  modulePathIgnorePatterns: ['<rootDir>/store/*', '<rootDir>/assets/style/*'],
  transform: {
    '^.+\\.[jt]s?$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/components/**/*.vue'],
  testPathIgnorePatterns: ['/store/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: ['<rootDir>/(node_modules)/', '<rootDir>/const/'],
}

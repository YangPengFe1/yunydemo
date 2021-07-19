/*
 * @Date: 2021-07-19 13:50:29
 * @LastEditors: Mason.Yang
 * @LastEditTime: 2021-07-19 13:51:29
 * @FilePath: \yunydemo\lall-mason\js.js
 * @Description: $1
 */

let a = {
  "name": "yourwebpart",
  "jest": {
    "verbose": true,
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(js|ts|tsx)$": "ts-jest"
    },
    "testMatch": [
      "**/src/**/*.(test|spec).+(ts|tsx|js)"
    ],
    "testResultsProcessor": "jest-junit"
  },
}

{
  "name": "yourwebpart",
  "jest": {
    ...,
    "collectCoverage": true,
    "coverageReporters": [
      "text-summary"
    ]
  }
  ...
}

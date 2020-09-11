[![travis build](https://img.shields.io/travis/RobertSasak/norwegian-phone?style=flat-square)](https://travis-ci.com/github/RobertSasak/norwegian-phone)
[![codecov coverage](https://img.shields.io/codecov/c/github/RobertSasak/norwegian-phone?style=flat-square)](https://codecov.io/gh/RobertSasak/norwegian-phone)
[![version](https://img.shields.io/npm/v/norwegian-phone?style=flat-square)](https://www.npmjs.com/package/norwegian-phone)
[![downloads](https://img.shields.io/npm/dm/norwegian-phone?style=flat-square)](https://npm-stat.com/charts.html?package=norwegian-phone)
[![MIT License](https://img.shields.io/npm/l/norwegian-phone.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

# norwegian-phone

If you need to distinguish norwegian landlines from mobile numbers this library is for you. It is built on the top of the amazing [unfold/norwegian-utils](https://github.com/unfold/norwegian-utils) utility library.

## Installation

This package is distributed via npm:

```
npm install norwegian-phone
```

or

```
yarn add norwegian-phone
```

## Usage

```js
import { isLandline, isMobile } from 'norwegian-phone'

if (isLandline('+4733012345')) {
  // yes it is
}
if (isMobile('+4791234567')) {
  // yes it is
}

const numbers = [
  '+4790123456',
  '90123456',
  '901 23 456',
  '+4733012345',
  '33 01 23 45',
  '112',
  '🐛',
]

const landLines = numbers.filter(isLandline)
// [ '+4733012345', '33 01 23 45' ]

const mobiles = numbers.filter(isMobile)
// [ '+4790123456', '90123456', '901 23 456' ]
```

## Other

This simple library was developed as an exercise while watching amazing egghead course [How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)

## Develop

Code, add test and commit with `npm run commit`.

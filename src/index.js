var formatPhoneNumber = require('norwegian-utils/formatPhoneNumber')

// based on https://en.wikipedia.org/wiki/Telephone_numbers_in_Norway

// Geographic numbers, 1993-present
// 2x xx xx xx: Geographic numbers, mainly Oslo and some parts of former Akershus in Viken
// 32 xx xx xx, 63 xx xx xx, 64 xx xx xx, 66 xx xx xx, 67 xx xx xx, 68 xx xx xx and 69 xx xx xx: Geographic numbers in Viken
// 32 xx xx xx: Geographical numbers in Jan Mayen
// 33 xx xx xx and 35 xx xx xx: Geographic numbers in Vestfold og Telemark
// 37 xx xx xx and 38 xx xx xx: Geographic numbers in Agder
// 38 xx xx xx: Geographic numbers in Vest-Agder
// 5x xx xx xx (except 58 and 59): Geographic numbers in south-western counties, including Bergen
// 61 xx xx xx and 62 xx xx xx: Used in Innlandet
// 7x xx xx xx: Geographic numbers in the mid and north, from Møre og Romsdal, Trøndelag (Trondheim) and northern Norway
// 79 xx xx xx: Geographic numbers in Svalbard

var landlinePrefixes = [
  '2',
  '32',
  '63',
  '64',
  '66',
  '67',
  '68',
  '69',
  '33',
  '35',
  '37',
  '38',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '61',
  '62',
  '7',
  '79',
]

// Mobile numbers
// 9x xx xx xx: Mobile numbers (older)
// 4x xx xx xx: Mobile numbers (newer)
// 58 xx xx xx xx xx: Mobile numbers (M2M traffic)
// 59 xx xx xx: Mobile numbers (newer, M2M traffic)

var mobilePrefixes = ['9', '4']

function startsWith(s, prefixes) {
  for (let key in prefixes) {
    if (s.substr(0, prefixes[key].length) === prefixes[key]) {
      return true
    }
  }
  return false
}

function normalize(number) {
  // remove country code +47
  return formatPhoneNumber.shortFormatPhoneNumber(number).substr(3)
}

function isLandline(number) {
  if (!formatPhoneNumber.isNorwegianPhoneNumber(number)) {
    return false
  }
  var normalized = normalize(number)
  return startsWith(normalized, landlinePrefixes)
}

function isMobile(number) {
  if (!formatPhoneNumber.isNorwegianPhoneNumber(number)) {
    return false
  }
  var normalized = normalize(number)
  return startsWith(normalized, mobilePrefixes)
}

module.exports = {
  isLandline,
  isMobile,
}

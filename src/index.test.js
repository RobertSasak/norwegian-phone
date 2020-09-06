var expect = require('chai').expect

var norwegianPhone = require('./index.js')
var isLandline = norwegianPhone.isLandline
var isMobile = norwegianPhone.isMobile

describe('norwegian-phone', function () {
  it('should work', function () {
    expect(true).to.be.true
  })
  describe('isLandline', function () {
    it('should work', function () {
      expect(isLandline('33123456')).to.be.true
      expect(isLandline('+4733123456')).to.be.true
      expect(isLandline('004733123456')).to.be.true
    })
    it('should fail', function () {
      expect(isLandline('112')).to.be.false
      expect(isLandline('+4533123456')).to.be.false
      expect(isLandline('004533123456')).to.be.false
      expect(isLandline('91234567')).to.be.false
      expect(isLandline('41234567')).to.be.false
      expect(isLandline('59000000')).to.be.false
    })
  })
  describe('isMobile', function () {
    it('should work', function () {
      expect(isMobile('40000000')).to.be.true
      expect(isMobile('90000000')).to.be.true
    })
    it('should fail', function () {
      expect(isMobile('20000000')).to.be.false
      expect(isMobile('112')).to.be.false
      expect(isMobile('59000000')).to.be.false
    })
  })
})

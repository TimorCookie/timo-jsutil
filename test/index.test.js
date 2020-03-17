var expect = require('expect.js');
const isCellphoneValid = require('../dist/index.cjs').isCellphoneValid
// 手机号正则匹配test
describe('test isCellphoneValid', function () {
    it('should expose a function', function () {
        expect(isCellphoneValid).to.be.a('function');
    });
    it('17621251706 shold be correct phone number', function () {
        expect(isCellphoneValid('17621251706')).to.be(true);
    });
    it('07621251706 should not be correct phone numer', function () {
        expect(isCellphoneValid('07621251706')).to.be(false);
    });
    it('0762125170 should not be correct phone numer', function () {
        expect(isCellphoneValid('0762125170')).to.be(false);
    });
});


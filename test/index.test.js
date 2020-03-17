var expect = require('expect.js');
const isCellphoneValid = require('../dist/index.cjs').isCellphoneValid

// 手机号正则匹配test
describe('test isCellphoneValid', function () {
    it('should expose a function', function () {
        expect(isCellphoneValid).to.be.a('function');
    });

    it('should check phone numer', function () {
        expect(isCellphoneValid('17621251706')).to.be(true);
    });
    it('should check phone numer', function () {
        expect(isCellphoneValid('07621251706')).to.be(false);
    });
});


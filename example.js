const chai = require('chai');
const expect = chai.expect;

// Code that you want to test
function add(a, b) {
    return a + b;
}

// Test suite
describe('add function', () => {
    // Test case 1
    it('should return 3 when adding 1 and 2', () => {
        expect(add(1, 2)).to.equal(2);
    });

    // Test case 2
    it('should return -1 when adding 2 and -3', () => {
        expect(add(2, -3)).to.equal(-1);
    });

    // Add more test cases as needed
    t('should return 15 when adding 6 and 9', () => {
        expect(add(6, 9)).to.equal(15);
    });
});

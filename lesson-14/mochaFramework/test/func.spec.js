const { expect } = require('chai');
const { returnTrue } = require('../../func')

describe('first mocha test', function ()  {

    before(async () => {
        console.log('Print before all tests');
    });

    beforeEach(async() => {
        console.log('I print before EACH tests')
    });

    afterEach(async() => {
        console.log('I print After EACH tests')
    })

    after(async() => {
        console.log('Print after all tests')
    })

    it(`function should return true`, async () => {
        console.log('first test')
        const result = returnTrue();
        expect(result).to.equal(true);
    });

    it(`function should return true`, async () => {
        console.log('second test')
        const result = returnTrue();
        expect(result).to.equal(false);
    });

    it(`function should return true`, async () => {
        console.log('third test')
        const result = returnTrue();
        expect(result).to.equal(true);
    })
})
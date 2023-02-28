const { returnTrue } = require('../../func');
const { expect } = require('chai');

describe('first mocha test', function ()  {
    test(`function should return true`, async () => {
        console.log('first test')
        const result = returnTrue();
        expect(result).to.equal(true);
    });

    test(`function should return true`, async () => {
        console.log('second test')
        const result = returnTrue();
        expect(result).to.equal(false);
    });

    test(`function should return true`, async () => {
        console.log('third test')
        const result = returnTrue();
        expect(result).to.equal(true);
    })
})
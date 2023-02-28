const { returnTrue } = require('../../../func');
const {cases} = require('jasmine-parameterized');

describe('first mocha test', function ()  {

    // beforeAll(async () => {
    //     console.log('Print before all tests');
    // });
    //
    // beforeEach(async() => {
    //     console.log('I print before EACH tests')
    // });
    //
    // afterEach(async() => {
    //     console.log('I print After EACH tests')
    // })
    //
    // afterAll(async() => {
    //     console.log('Print after all tests')
    // })

    it(`function should return true`, async () => {
        // console.log('first test')
        const result = returnTrue();
        expect(result).toEqual(true);
    });

    it(`function should return true`, async () => {
        // console.log('second test')
        const result = returnTrue();
        expect(result).toEqual(false);
    });
    it(`function should return true`, async () => {
        // console.log('third test')
        const result = returnTrue();
        expect(result).toEqual(true);
    })

    cases([
        [10, 5, 15],
        [20, 30, 50],
        [19, 18, 37]
    ]).it(`firstNumber + secondNumber equals result`, async ([firstNumber, secondNumber, result]) => {
        await expect(firstNumber + secondNumber).toEqual(result)
    })

})
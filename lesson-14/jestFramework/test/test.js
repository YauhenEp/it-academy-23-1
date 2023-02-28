const { returnTrue } = require('../../func')

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

    test(`function should return true`, async () => {
        console.log('first test')
        const result = returnTrue();
        expect(result).toEqual(true);
    });

    test(`function should return true`, async () => {
        console.log('second test')
        const result = returnTrue();
        expect(result).toEqual(false);
    });

    test.each([[10, 5, 15],
    [20, 30, 50],
    [19, 18, 37]
    ])(`%d plus %d should be %d`, async (numberOne, numberTwo, result) => {
        expect(numberOne + numberTwo).toEqual(result);
    })
})
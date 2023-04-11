const axios = require('axios');
const validator = require('jsonschema');
const fiveDaysForecastSchema = require('../data/fiveDaysForecast.v1.json');
const { sendHttpRequest } = require('../helpers/sendHttpRequets')

describe(`API tests Weather`, function () {
    describe.skip('first', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', {
                params: {lat: '35.5', lon: '-78.5'},
                headers: {
                    'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                }
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, fiveDaysForecastSchema);
            expect(result.valid).toEqual(true)
        })
    })

    describe.skip('second', function () {
        let response;
        beforeAll(async () => {
            response = await axios({
                method: "GET",
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
                headers: {
                    'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                },
                params: {lat: '35.5', lon: '-78.5'},
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, fiveDaysForecastSchema);
            expect(result.valid).toEqual(true)
        })
    });

    describe('third', function () {
        let response;
        beforeAll(async () => {
            const config = {
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
                headers: {
                    'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                },
                params: {lat: '35.5', lon: '-78.5'},
            }
            response = await sendHttpRequest(config)
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, fiveDaysForecastSchema);
            expect(result.valid).toEqual(true)
        })
    });

    describe('fourth', function () {
        let response;
        beforeAll(async () => {
            const config = {
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
                headers: {
                    'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                },
                params: {lat: '35.5', lon: '-78.5'},
            }
            response = await sendHttpRequest(config);
        });

        test('status code should be 200', async () => {
            expect(response).toBeValidStatusCode(200);
        })

        test('json schema should be valid', async () => {
            expect(response).toBeValidSchema(fiveDaysForecastSchema);
        })
    });
})
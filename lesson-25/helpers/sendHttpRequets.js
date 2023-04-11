const https = require("https");
const axios = require('axios');

async function sendHttpRequest(params, httpMethod = 'GET', statusCode, testTimeout = 10000) {
    const conf = {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json',
        },
        ...params,
        validateStatus(status) {
            return statusCode ? statusCode === status : true;
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
        timeout: testTimeout,
    };
    return axios(conf);
}

module.exports = { sendHttpRequest }
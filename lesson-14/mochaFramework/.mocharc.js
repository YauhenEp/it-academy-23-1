module.exports = {
    bail: false,
    color: true,
    delay: false,
    diff: true,
    exit: true, // could be expressed as "'no-exit': true"
    growl: false,
    parallel: 3,
    recursive: false,
    reporter: 'mochawesome',
    reporterOptions: {
        "reportTitle": "My test report",
        "reportDir": "results",
        "overwrite": false,
        "html": true,
        "json": true
    },
    retries: 0,
    slow: '1500',
    sort: false,
    spec: ['test/**/*.spec.js'], // the positional arguments!
    timeout: '1500', // same as "timeout: '2s'"
    watch: true,
};

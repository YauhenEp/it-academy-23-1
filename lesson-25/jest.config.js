const config = {
    verbose: true,
    clearMocks: true,
    runner: 'jest-runner',
    testTimeout: 70000,
    rootDir: './',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    setupFilesAfterEnv: ['./setupJest.js'],
    reporters: ['default',
        'jest-junit',
        [
            'jest-html-reporters',
            {
                pageTitle: 'Contract Monitoring Test Report',
                publicPath: './reports',
                filename: 'test-report.html',
                enableMergeData: true,
                dataMergeLevel: 3,
            },
        ],
    ],
    transform: {},
    globals: {},
};

module.exports = config;
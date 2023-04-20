const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const envs = require('../data/envs.json');

async function getUrlByEnv(env = argv.test_env) {
    return envs[env];
}

async function getUrlByEnv1(env = argv.test_env) {
    return `https://www.${env === 'prod' ? '' : env + '.'}21vek.by/`;
}

module.exports = { getUrlByEnv, getUrlByEnv1 };
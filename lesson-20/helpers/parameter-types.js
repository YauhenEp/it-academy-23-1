const { defineParameterType } = require('@wdio/cucumber-framework');
const Utils = require('./utils');
const PageFactory = require('../pageobjects/pageFactory');

defineParameterType({
    regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
    name: 'locator',
    transformer: (string) => {
        if (string.indexOf(' > ') !== -1) {
            const array = string.split(' > ');
            return Utils.poParser(array, PageFactory);
        }
        return string;
    },
    useForSnippets: false,
});
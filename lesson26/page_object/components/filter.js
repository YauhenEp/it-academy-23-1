const BasePage = require('../basePage');
const baseElements = require('../../helpers/baseElements')

class Filter extends BasePage {
    async getFilterByName(filterName) {
        return `//label[text()='${filterName}']`
    }

    get filterButton() {
        return `.g-button__text`;
    }

    get filterCounter() {
        return '#j-filter__counter'
    }

    async chooseFilterOption(filterName) {
        // await baseElements.waitForPageLoad();
        await baseElements.jsClick(await this.getFilterByName(filterName));
        const textBeforeFilter = await baseElements.getText(this.filterCounter)
        await browser.execute('arguments[0].scrollIntoView()', this.filterButton);
        await baseElements.waitUntilTextChanges(this.filterCounter, textBeforeFilter);
    }
}

module.exports = new Filter();
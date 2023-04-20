const BasePage = require('../basePage');
const baseElements = require('../../helpers/baseElements')

class Search extends BasePage {
    get searchField() {
        return '#catalogSearch';
    }

    get searchResults() {
        return '.SearchSuggestList_link__3H2j0';
    }

    async searchProductsByName(productName, productNumber = 0) {
        await baseElements.click(this.searchField);
        await baseElements.setValue(this.searchField, productName);
        await baseElements.click(this.searchResults, productNumber);
    }
}

module.exports = new Search();
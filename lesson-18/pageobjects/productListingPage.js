const BasePage = require('./basePage');
const BaseElements = require('../helpers/baseElements')

class ProductListingPage extends BasePage {
    get sortDropdown() {
        return $(`.sorter .select2-selection--single`);
    }

    sortOptions(sortOption) {
        return $(`//li[text()="${sortOption}"]`)
    }

    async chooseSortingOption(option) {
        await BaseElements.click(this.sortDropdown)
        // await this.sortDropdown.waitForDisplayed()
        // await this.sortDropdown.click();
        await this.sortOptions(option).waitForClickable()
        await this.sortOptions(option).click()
    }
}

module.exports = new ProductListingPage();
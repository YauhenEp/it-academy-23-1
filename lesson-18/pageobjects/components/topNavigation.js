const BasePage = require('../basePage');

class TopNavigation extends BasePage {
    mainMenuTab(tabName) {
        return $(`//*[text()='${tabName}']//ancestor::a[@class='ammenu-link']`)
    }

    mainMenuItem(itemName) {
        return $(`//div[@class='ammenu-text-block']/*[text()='${itemName}']`)
    }

    async goToProductListingPage(tabName, itemName) {
        await this.mainMenuTab(tabName).waitForDisplayed();
        await this.mainMenuTab(tabName).moveTo();
        await this.mainMenuItem(itemName).waitForDisplayed();
        await this.mainMenuItem(itemName).click();
    }
}

module.exports = new TopNavigation();
const BasePage = require('./basePage');
const element = require('../helpers/baseElements');
const header = require('./components/Header');

class ProductPage extends BasePage {
    get addToBagButtons() {
        return '.j-to_basket .g-buybtn.result__buybtn'
    }

    async addProductCartByNumber(number) {
        await element.scrollToElement(this.addToBagButtons, number)
        const numberOfProductBefore = await element.getText(header.headerCartCount);
        await element.click(this.addToBagButtons, number);
        await element.scrollToElement(header.cartButton);
        await header.waitProductInCart(numberOfProductBefore + 1);
    }
}

module.exports = ProductPage;
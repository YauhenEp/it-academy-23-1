const BasePage = require('./basePage');

class CartPage extends BasePage {
    get emptyCartNotification() {
        return '.EmptyBasket_text__2iKar';
    }
}

module.exports = new CartPage();
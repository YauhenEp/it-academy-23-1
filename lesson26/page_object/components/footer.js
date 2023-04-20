const BasePage = require('../basePage');

class Footer extends BasePage {
    get subscriptionForm() {
        return '.react-subscription-form__input'
    }
}

module.exports = new Footer();
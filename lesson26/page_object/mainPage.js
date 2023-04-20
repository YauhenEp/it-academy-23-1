const BasePage = require('./basePage');
const Utils = require('../utils/utils')

class MainPage extends BasePage {
    get acceptCookiesButton() {
        return '.AgreementCookie_buttons__F4XNa .Button-module__blue-primary'
    }
}

module.exports = new MainPage();
const { getUrlByEnv, getUrlByEnv1 } = require('../helpers/urls')

class BasePage {
    async navigate() {
        const url = await getUrlByEnv();
        await browser.url(url);
    }
}

module.exports = BasePage;
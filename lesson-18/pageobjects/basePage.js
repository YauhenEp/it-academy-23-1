class BasePage {
    async navigate(url) {
        await browser.url(url);
    }
}

module.exports = BasePage;
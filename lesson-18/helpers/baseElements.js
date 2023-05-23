class BaseElements {
    static async click(webElement) {
        await webElement.waitForClickable();
        await webElement.click();
    }

    static async getText(element) {
        await element.waitForDisplayd();
        return element.getText()
    }
}

module.exports = BaseElements;
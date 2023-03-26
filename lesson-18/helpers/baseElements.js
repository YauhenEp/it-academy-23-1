class BaseElements {
    static async click(webElement) {
        await webElement.waitForClickable();
        await webElement.click();
    }
}

module.exports = BaseElements;
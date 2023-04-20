class BaseElements {
    static async wrap(element) {
        this.webElement = element;
        return this.webElement;
    }

    static async get(selector) {
        if (!(selector instanceof BaseElements)) {
            await this.wrap(await $(selector));
            this.selector = selector;
            return this.webElement;
        }
        return selector;
    }

    static async getArray(selector) {
        const elements = await $$(selector);
        const baseElements = [];
        elements.forEach(async (element) => {
            const baseElement = new BaseElements();
            const webElement = await this.wrap(element);
            baseElement.webElement = webElement;
            baseElements.push(webElement);
        });
        this.webElement = baseElements;
        return baseElements;
    }

    static async getElement(selector, locatorNumber) {
        if((await this.getArray(selector)).length > 1) {
            return (await this.getArray(selector))[locatorNumber];
        }
        return this.get(selector)
    }

    async click(selector, locatorNumber = 0) {
        const webElement = await BaseElements.getElement(selector, locatorNumber);
        await webElement.waitForClickable();
        await webElement.click();
    }

    async jsClick(selector, locatorNumber = 0) {
        const webElement = await BaseElements.getElement(selector, locatorNumber);
        await browser.execute('arguments[0].click()', webElement);
    }

    async setValue(selector, text, locatorNumber = 0) {
        const webElement = await BaseElements.getElement(selector, locatorNumber);
        await webElement.waitForDisplayed();
        await webElement.setValue(text);
    }

    async getText(selector, locatorNumber = 0) {
        const webElement = await BaseElements.getElement(selector, locatorNumber);
        await webElement.waitForDisplayed();
        return webElement.getText();
    }

    async scrollToElement(selector, locatorNumber = 0) {
        const webElement = await BaseElements.getElement(selector, locatorNumber);
        // await webElement.waitForExist();
        await webElement.scrollIntoView();
    }

    async waitAngularStability(timeout) {
        await browser.waitUntil(
            async () => {
                const stable = await browser.execute('return window.getAllAngularTestabilities()[0].isStable()');
                return stable === true;
            },
            {
                timeout: 20000,
                timeoutMsg: 'Angular is not stable',
            },
        );
    };

    async waitUntilElementChangeTextTo(selector, text, includes = false) {
        const actualText = await BaseElements.getElement().getText();
        await browser.waitUntil(
            async () => (includes ? (await actualText).includes(text) : (await actualText).trim() === text),
            {
                timeout: 20000,
                timeoutMsg: `Expected text: ${text} in selector: ${selector} to be different after timeout. Actual text: ${actualText}`,
            },
        );
    }

    async waitUntilTextChanges(selector, text) {
        await browser.waitUntil(
            async () => {
                const currentText = await BaseElements.getElement().getText();
                return parseInt(currentText, 10) < parseInt(text, 10);
            },
            {
                timeout: 20000,
                timeoutMsg: `Expected text: ${text} in selector: ${selector} to be different after timeout. Actual text: ${actualText}`,
            },
        );
    }

    async waitForPageLoad() {
        return browser.waitUntil(
            async () => {
                await browser.execute(() => {
                    window.onload = function () {
                        document['onloadComplete'] = true;
                    };
                });
            },
            {
                timeout: 60000,
                timeoutMsg: `Expected page to be loaded`,
            },
        );
    }
}

module.exports = new BaseElements();
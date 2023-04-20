const { chromium } = require('playwright-chromium');

class Utils {
    static async connectPlaywrightToSession() {
        const debuggerPort = browser.capabilities['goog:chromeOptions'].debuggerAddress.split(':')[1];
        console.log(debuggerPort)
        console.log(`http://127.0.0.1:${debuggerPort}`)
        return chromium.connectOverCDP(`http://127.0.0.1:${debuggerPort}`);
    }

    static async setCookiesBeforeSession() {
        const playwright = await Utils.connectPlaywrightToSession();
        const context = await playwright.contexts()[0];
        await context.addCookies([{name: 'rr-testCookie', value: 'testvalue', domain: '.21vek.by', path: '/'}])
    }
}

module.exports = Utils;
const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');

describe('Onliner test', function () {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts( { implicit: 10000 } );
    });

    after(async () => {
        await driver.quit();
    });

    it.skip('catalog tab should redirect to catalog page', async () => {
        await driver.get('https://www.onliner.by/');
        const menuItems = await driver.findElements(By.css('.b-main-navigation__text'));
        await menuItems[0].click();
        const superPrice = await driver.findElement(By.css('.catalog-navigation__bubble'));
        expect(await superPrice.getText()).to.equal('Все суперцены!');
    })

    it.skip('google', async () => {
        await driver.get('https://www.google.com/');
        const acceptCoockiesButton = await driver.findElement(By.css('#L2AGLb'))
        await driver.actions().click(acceptCoockiesButton).perform();
        const searchField = await driver.findElement(By.css('.SDkEP .gLFyf'));
        await driver.actions().move({ origin: searchField }).press().sendKeys('chromedriver').keyDown(Key.ENTER).perform();
        // const linksWithResults = await driver.findElements(By.css('.yuRUbf h3'));
        await driver.wait(until.elementIsVisible(await driver.findElements(By.css('.yuRUbf h3'))), 20000);
        expect(await linksWithResults[0].getText().toLowerCase()).to.contain('chromedriver')
    });

    it('sky sports', async () => {
        await driver.get('https://www.skysports.com/');
        const transferCentrLinks = await driver.findElements(By.xpath(`//a[@class='site-nav-desktop__menu-link' and text()='Transfer Centre']`));
        console.log(transferCentrLinks)
        await driver.executeScript('arguments[0].click()', transferCentrLinks[1]);
        await driver.sleep(3000)
    })
})
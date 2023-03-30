const { test } = require('@playwright/test');
const MainPage = require('../page-objects/mainPage');
const Header = require('../page-objects/pageComponents/header');
const {expect} = require('chai');

test.describe('test EPAM website', async function() {
    let mainPage;
    let header;
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
    });

    test('go to test io page', async ({page}) => {
        await mainPage.navigate('https://www.epam.com/');
        await header.goToPageWithTopNavMenu(0, 'Optimizing for Growth');
        expect(await page.title()).to.equal('Optimizing for Growth Services | EPAM123');
    });

    test('go to test io page', async ({page}) => {
        await mainPage.navigate('https://www.epam.com/');
        await page.screenshot({path: './screen/new-screen.png', caret: 'hide', animations: 'disabled', mask: [page.locator('.cta-button-ui.cta-button-ui-23.header__control')]})
    })
})
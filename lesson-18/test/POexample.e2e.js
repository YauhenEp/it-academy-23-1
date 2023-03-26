const mainPage = require('../pageobjects/mainPage');
const topNavigation = require('../pageobjects/components/topNavigation');
const productListingPage = require('../pageobjects/productListingPage');

describe('Page Object Model', function () {
    it('should open product details page', async () => {
        await mainPage.navigate('https://www.metaltis.be/');
        await topNavigation.goToProductListingPage('Hijsmiddelen', 'Alle - One way slings');
        await productListingPage.chooseSortingOption('Prijs');
        await browser.pause(3000);
    })
})
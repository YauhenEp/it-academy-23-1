const mainPage = require('../page_object/mainPage');
const productListingPage = require('../page_object/productListingPage');
const element = require('../helpers/baseElements');
const header = require('../page_object/components/Header');
const filter = require('../page_object/components/filter');
const cartPage = require('../page_object/cartPage');
const search = require('../page_object/components/search');
const { expect } = require('chai');

describe('Search component testing', function () {

    before(async() => {
        await mainPage.navigate();
        await element.click(mainPage.acceptCookiesButton);
    });

    it.skip(`should go to products listing page`, async () => {
        await search.searchProductsByName('Холодильник', 3);
        await element.click(productListingPage.addToBagButtons);
    });
    //TODO проинвестигейтить ожидания на странице
    // ['В наличии', 'Под заказ', 'Уценка'].forEach((filterName) => {
    //     it(`should filter results using filter ${filterName}`, async () => {
    //         await mainPage.navigate();
    //         await element.click(header.topNavTabs, 2);
    //         // const numberOfProductsBeforeFiltering = await element.getText(filter.filterCounter);
    //         //console.log('numberOfProductsBeforeFiltering -- ', numberOfProductsBeforeFiltering)
    //         await filter.chooseFilterOption(filterName);
    //         const numberOfProductsAfterFiltering = await element.getText(filter.filterCounter);
    //         console.log('numberOfProductsAfterFiltering -- ', numberOfProductsAfterFiltering);
    //         //expect(numberOfProductsBeforeFiltering > numberOfProductsAfterFiltering).to.equal(true);
    //     });
    // });

    it(`add product to basket`, async () => {
        await mainPage.navigate();
        await element.click(header.topNavTabs, 4);
        await productListingPage.addProductCartByNumber(6);
        await header.goToCart();
    })
});
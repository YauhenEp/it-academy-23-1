const { expect } = require('chai');

describe.skip('Metaltis search', () => {

    beforeEach(async() => {
        await browser.url('https://www.metaltis.be/');
    })

    it('should login with valid credentials', async () => {
        await $('#ammenu-header-container #search').setValue('Blackstage');
        await browser.keys(['Enter']);
        await $(`[data-ui-id='page-title-wrapper']`).waitForDisplayed();
        await expect(await $(`[data-ui-id='page-title-wrapper']`).getText()).to.contain('Blackstage')
    })

    it('should login with valid credentials', async () => {
        await $('#ammenu-header-container #search').setValue('Blackstage');
        await browser.keys(['Enter']);
        await $(`[data-ui-id='page-title-wrapper']`).waitForDisplayed();
        await $(`.sorter .select2-selection--single`).click();
        await $(`//li[text()="Prijs"]`).waitForClickable();
        await $(`//li[text()="Prijs"]`).click();
        await $(`//*[@id="select2-sorter-container" and text()="Prijs"]`).waitForDisplayed();

        const basePrices = await $$(`.price-excluding-tax`).map(async (element) => {
            const priceWithCurrency = await element.getText();
            return priceWithCurrency.slice(2);
        });
        console.log(basePrices);
        await $$(`.toolbar-sorter .action.sorter-action`)[0].click();
        await $$(`.action.sorter-action.sort-desc`)[0].waitForDisplayed();
        const basePricesAfterSorting = await $$(`.price-excluding-tax`).map(async (element) => {
            const priceWithCurrency = await element.getText();
            return priceWithCurrency.slice(2);
        });
        console.log(basePricesAfterSorting);

        await expect(basePrices).not.eq(basePricesAfterSorting)
    })
})



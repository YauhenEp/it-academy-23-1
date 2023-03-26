class Helpers {
    static async getPriceWithoutCurrencySymbols(webElement) {
        await webElement.map(async (element) => {
            const priceWithCurrency = await element.getText();
            return priceWithCurrency.slice(2);
        });
    }
}
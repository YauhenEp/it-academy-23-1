class Header {
    constructor(page) {
        this.page = page;
        this.topNavLinks = '.top-navigation__item-link';
        this.topNavSubLinks = async (subLinkName) => {
            return `//*[@class='top-navigation__sub-link' and text()="${subLinkName}"]`
        };
        this.breadCrumbLink = async (breadCrumbName) => {
            return `//*[@class='breadcrumbs__link' and text()="${breadCrumbName}"]`
        }
    }

    async goToPageWithTopNavMenu(linkNumber, subItemTitle) {
        await this.page.locator('.top-navigation__item-link').nth(linkNumber).hover();
        await this.page.locator(await this.topNavSubLinks(subItemTitle)).click();
        await this.page.waitForSelector(await this.breadCrumbLink(subItemTitle))
    }
}


module.exports = Header;
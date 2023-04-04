describe(`Pon-pushka by`, function () {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
    });

    it(`make order`, async () => {
        cy.viewport(1960, 1080);
        cy.visit('https://pon-pushka.by/');
        cy.get('.t-popup__close-icon')
            .click();
        cy.get('.t228__maincontainer  .t-menu__link-item.t-menusub__target-link')//*[contains(text(),'Минск - Дзержинского 125А')]
            .trigger('mouseover');
        // cy.get('a.t-menusub__link-item.t-name.t-name_xs')
        //     .first()
        //     .click();
        cy.window().then((win) => {
            win.document.querySelectorAll('a.t-menusub__link-item.t-name.t-name_xs')[0].click();
        });
        cy.xpath(`//*[@class='t754__textwrapper']//*[text()='Напудренный пакет']//ancestor::*[contains(@class,'t-item')]//a[contains(@class,'t-btn_sm')]`)
            .click();
        cy.get(`.t706__carticon-imgwrap`)
            .click();

        cy.get('.t706__product-title')
            .invoke('text')
            .should('equal', 'Напудренный пакет')
    })
})
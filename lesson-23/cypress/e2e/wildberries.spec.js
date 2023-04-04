describe('Wildberries', function() {
    it('open menu', () => {
        cy.viewport(1960, 1080);
        cy.visit('https://by.wildberries.ru/');
        cy.get('.j-menu-burger-btn')
            .click();
        cy.get('.j-menu-burger-main.j-menu-active')
            .should('be.visible')
    })
})
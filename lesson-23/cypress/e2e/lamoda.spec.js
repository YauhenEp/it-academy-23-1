describe('Lamoda', () => {
    it(`test`, () => {
        cy.viewport(1960, 1080);
        cy.visit('https://www.lamoda.by/women-home');
        cy.get('._19JZY3KsRgBsBD_z9zrYb9 .swiper-free-mode .swiper-wrapper').scrollTo('center')
        cy.get('._19JZY3KsRgBsBD_z9zrYb9 .swiper-free-mode .swiper-wrapper')
            .scrollIntoView()
            .should('be.disabled')
    })
});
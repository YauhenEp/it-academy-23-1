describe(`Test API`, function() {
    it(`intercept request`, async () => {
        cy.viewport(1960, 1080);
        cy.visit('https://www.lamoda.by/women-home');
        debugger
        cy.intercept('/women-home**', (req) => {
            console.log('REQUEST ----', req);
        } )
        cy.get('._19JZY3KsRgBsBD_z9zrYb9 .swiper-free-mode .swiper-wrapper').scrollTo('center')
        cy.get('._19JZY3KsRgBsBD_z9zrYb9 .swiper-free-mode .swiper-wrapper')
            .scrollIntoView()
            .should('be.disabled')
    })
})
it('Product page', () => {
    cy.viewport(1960, 1080);
    cy.visit('https://5element.by/catalog/9-smartfony-i-gadzhety');
    // cy.get('div.swiper-slide-visible.swiper-slide-next > a')
    //     .click();
    
    // cy.get('div.swiper-slide.swiper-slide-active > div > a > div.c-image')
    //     .click();
    cy.get('#filters-0 > div > ul')
        .should('be.visible')
    
});
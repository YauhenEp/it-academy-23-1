describe('Second part of applicaton', () => {
    it('max lenght of field should be 15', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('#main-input')
            .type('Hello I am!!!!!')

        cy.get('span')
            .invoke('text')
            .should('equal', '1')
    })

    it('max lenght of field should be 15', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('#main-input')
            .type('Hello I am!!!!!')

        cy.get('#main-input')
            .invoke('attr', 'value')
            .should('have.length', 15)
    })

    it('shuld be correst number after input text', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('#main-input')
            .type('Hello')

        cy.get('span')
            .invoke('text')
            .should('equal', '10')
    })

    it('shuld be correst number after input text', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('#main-input')
            .type('Hello sdjjjjjjjjjjjjjjj')

        cy.get('span')
            .invoke('text')
            .should('equal', '0')
    })

    it('shuld be correst number after input text with more characters', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('#main-input')
            .type('Hello sdjjjjjjjjjjjjjjj!!!!!!!!!!!!')
            .invoke('attr', 'value')
            .should('have.length', 15)
    })
});
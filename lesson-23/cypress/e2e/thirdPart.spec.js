describe(`third part`, () => {
    beforeEach(() => {
        // alert(Cypress.env('MY_ENV_VARIABLE'));
        cy.visit('http://localhost:3000/example-3');
    });

    it(`check first field`, () => {
        cy.get('[data-cy="first-name-chars-left-count"]')
            .as('firstField')

        cy.inputTextAndCheck('Hello', '10');

        cy.inputTextAndCheck('Hello', '5');
    })
})
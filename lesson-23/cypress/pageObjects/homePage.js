class HomePage {
    constructor() {
        this.firstBlockItem = function(number) {
            return cy.get(`[data-cy="box-1-items-list"] li`)
                .eq(number)
        };
        this.firstBlockSelectedItem = () => cy.get(`[data-cy="box-1-selected-name"]`);
        this.numberOfcheckedCheckboxes = () => cy.get(`[data-cy="box-2-selected-count"]`);
        this.returnCheckboxByNumber = (number) => cy.get(`[data-cy="box-2-checkboxes"] input`).eq(number);
        this.dropdownButton = () => cy.get('[data-cy="box-3-dropdown"]');
        this.getItemByNumber = (number) => cy.get('[data-cy="box-3-dropdown"]  option').eq(number);
        this.thirdBlockSelectedName = () => cy.get('[data-cy="box-3-selected-name"]');
        this.mouseOverItemByNumber = (number) => cy.get('[data-cy="box-4-items-list"] li').eq(number); 
        this.forthBlockSelectedItem = () => cy.get('[data-cy="box-4-selected-name"]');
    }

    clickAndCheckFirstPartItemByNamber(number) {
        this.firstBlockItem(number)
            .click();

        this.firstBlockItem(number)
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')
    }

    doubleClickFirstPartItemByNamber(number, selectedItem) {
        this.firstBlockItem(number)
            .dblclick();

        this.firstBlockSelectedItem()
            .invoke('text')
            .should('equal', selectedItem)
    }

    checkCheckboxByNumberAndCheck(number) {
        this.returnCheckboxByNumber(number)
            .check();
        this.numberOfcheckedCheckboxes()
            .invoke('text')
            .should('equal', '1');
    }

    selectItemFromDropDownAndCheckIt(selectedItemText) {
        this.dropdownButton()
            .select(selectedItemText);

        this.thirdBlockSelectedName()
            .invoke('text')
            .should('equal', selectedItemText)
    }

    mouseOverTheIteAnadCheck(number, text) {
        this.mouseOverItemByNumber(number)
            .trigger('mouseover');

        this.forthBlockSelectedItem()
            .invoke('text')
            .should('equal', text)
    }
}

module.exports = new HomePage();
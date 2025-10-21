class calculatorPage{
    elements = {
        firstNumber: () => cy.get('#number1Field'),
        secondNumber: () => cy.get('#number2Field'),
        clculateButton: () => cy.get('#calculateButton'),
        answer: () => cy.get('#numberAnswerField'),
        clearButton: () => cy.get('#clearButton'),
    }

    enterNumber(fn, sn) {
        this.elements.firstNumber().should('be.visible').type(fn);
        this.elements.secondNumber().should('be.visible').type(sn);
    }

    clickCalculate() {
        this.elements.clculateButton().should('be.visible').click();
    }

    verifyAnswer(answer) {
        this.elements.answer().should('be.visible').and('contain.value', answer);
    }

    clickClear() {
        this.elements.clearButton().should('be.visible').click();
    }

    verifyInPutNumberFieldEmptyState() {
        this.elements.firstNumber().should('be.visible').and('be.empty');
        this.elements.secondNumber().should('be.visible').and('be.empty');
    }
}

export default calculatorPage
import CalculatorPage from "../pages/calculatorPage";

describe('Calculator Web Test', () => {
    const calculatorPage = new CalculatorPage()

    beforeEach(() => {
        cy.visit('/BasicCalculator.html')
    });

    it('Add Test', () => {
        cy.fixture('calculator').then((calInputs) => {
            calInputs.forEach((calInput) => {
                cy.log('Testing with Input ' + calInput.firstNumber + ', ' + calInput.secondNumber)
                calculatorPage.enterNumber(calInput.firstNumber, calInput.secondNumber);
                calculatorPage.clickCalculate();
                calculatorPage.verifyAnswer((calInput.firstNumber + calInput.secondNumber));
                calculatorPage.clickClear();
                calculatorPage.verifyInPutNumberFieldEmptyState();
            });
        });
        
    });
});
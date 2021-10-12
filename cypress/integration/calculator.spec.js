describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have arithmetical operations updating the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should be able to display result for range of positive numbers', () => {
    cy.get('#number2').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '14')
  })

  it('should be able to display result for range of negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })

  it('should be able to display result for range of decimal numbers', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10.08')
  })

  it('should be able to display result for range of large numbers', () => {
    cy.get('#number2').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1038543')
  })

  it('should be able to display an error when dividing by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})